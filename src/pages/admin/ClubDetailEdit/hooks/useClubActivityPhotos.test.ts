import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateClubImages } from '@/pages/admin/ClubDetailEdit/api/clubImagesEdit';
import { toast } from '@/shared/utils/toast';
import { useClubActivityPhotos } from './useClubActivityPhotos';

vi.mock('@/pages/admin/ClubDetailEdit/api/clubImagesEdit', () => ({
  updateClubImages: vi.fn(),
}));
vi.mock('@/shared/utils/toast', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const mockedUpdateClubImages = vi.mocked(updateClubImages);

const INITIAL_IMAGES = [
  { id: 1, url: 'https://example.com/1.png' },
  { id: 2, url: 'https://example.com/2.png' },
];

const createFile = (name: string, sizeInBytes = 1024) =>
  new File([new Uint8Array(sizeInBytes)], name, { type: 'image/png', lastModified: 1 });

describe('useClubActivityPhotos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    let counter = 0;
    vi.stubGlobal('URL', {
      ...URL,
      createObjectURL: vi.fn(() => `blob:preview-${++counter}`),
      revokeObjectURL: vi.fn(),
    });
  });

  it('기존 사진 삭제는 화면에만 반영되고 서버에는 요청하지 않는다', () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.handleDelete(result.current.photos[0]));

    expect(result.current.photos.map((photo) => photo.url)).toEqual([INITIAL_IMAGES[1].url]);
    expect(result.current.isDirty).toBe(true);
    expect(mockedUpdateClubImages).not.toHaveBeenCalled();
  });

  it('새 사진 추가는 미리보기로만 표시되고 서버에는 요청하지 않는다', () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.addFiles([createFile('new.png')]));

    expect(result.current.photos).toHaveLength(3);
    expect(result.current.photos[2]).toMatchObject({ url: 'blob:preview-1', isNew: true });
    expect(mockedUpdateClubImages).not.toHaveBeenCalled();
  });

  it('추가했다가 지운 새 사진은 미리보기 URL을 해제하고 dirty 상태를 되돌린다', () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.addFiles([createFile('new.png')]));
    act(() => result.current.handleDelete(result.current.photos[2]));

    expect(result.current.photos).toHaveLength(2);
    expect(result.current.isDirty).toBe(false);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:preview-1');
  });

  it('같은 파일을 두 번 추가하면 중복을 막고 안내한다', () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.addFiles([createFile('dup.png')]));
    act(() => result.current.addFiles([createFile('dup.png')]));

    expect(result.current.photos).toHaveLength(3);
    expect(toast.error).toHaveBeenCalledWith('이미 추가된 사진입니다.');
  });

  it('5MB를 초과하는 파일은 추가하지 않는다', () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.addFiles([createFile('big.png', 6 * 1024 * 1024)]));

    expect(result.current.photos).toHaveLength(2);
    expect(toast.error).toHaveBeenCalledWith('big.png 파일이 5MB를 초과합니다.');
  });

  it('변경 사항이 없으면 저장 시 서버에 요청하지 않는다', async () => {
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    await act(() => result.current.saveImages(10));

    expect(mockedUpdateClubImages).not.toHaveBeenCalled();
  });

  it('저장 시 남긴 기존 사진과 새 파일을 한 번에 서버로 보내고 응답으로 상태를 갱신한다', async () => {
    const savedImages = [
      { id: 2, url: 'https://example.com/2.png' },
      { id: 3, url: 'https://example.com/3.png' },
    ];
    mockedUpdateClubImages.mockResolvedValueOnce(savedImages);
    const newFile = createFile('new.png');
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.handleDelete(result.current.photos[0]));
    act(() => result.current.addFiles([newFile]));
    await act(() => result.current.saveImages(10));

    expect(mockedUpdateClubImages).toHaveBeenCalledTimes(1);
    expect(mockedUpdateClubImages).toHaveBeenCalledWith(10, [newFile], [INITIAL_IMAGES[1]]);
    expect(result.current.photos).toEqual(
      savedImages.map((image) => ({ key: `existing-${image.id}`, url: image.url, isNew: false })),
    );
    expect(result.current.isDirty).toBe(false);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:preview-1');
  });

  it('저장 실패 시 화면의 변경 사항을 유지해 다시 시도할 수 있다', async () => {
    mockedUpdateClubImages.mockRejectedValueOnce(new Error('이미지 업데이트 실패'));
    const { result } = renderHook(() => useClubActivityPhotos(INITIAL_IMAGES));

    act(() => result.current.addFiles([createFile('new.png')]));
    await expect(act(() => result.current.saveImages(10))).rejects.toThrow('이미지 업데이트 실패');

    expect(result.current.photos).toHaveLength(3);
    expect(result.current.isDirty).toBe(true);
  });
});
