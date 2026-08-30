import { FiTrash2, FiPlus } from 'react-icons/fi';
import { SectionHeading } from '@/shared/components/SectionHeading';
import * as S from './index.styled';
import type { ActivityPhoto } from '@/pages/admin/ClubDetailEdit/hooks/useClubActivityPhotos';

interface ClubActivityPhotosEditSectionProps {
  photos: ActivityPhoto[];
  onAdd: () => void;
  onDelete: (photo: ActivityPhoto) => void;
}

export const ClubActivityPhotosEditSection = ({
  photos,
  onAdd,
  onDelete,
}: ClubActivityPhotosEditSectionProps) => {
  return (
    <>
      <S.TitleWrapper>
        <SectionHeading required>
          활동 사진
          <S.AddButton onClick={onAdd}>
            <FiPlus />
          </S.AddButton>
        </SectionHeading>
      </S.TitleWrapper>
      <S.Description>
        사진 추가·삭제는 하단 <strong>수정하기</strong> 버튼을 눌러야 저장됩니다.
      </S.Description>

      <S.PhotosWrapper>
        <S.PhotosContainer>
          {photos.map((photo) => (
            <S.PhotoWrapper key={photo.key}>
              <S.Photo src={photo.url} alt={photo.isNew ? '새로 추가한 활동 사진' : '활동 사진'} />
              {photo.isNew && <S.PendingBadge>저장 전</S.PendingBadge>}
              <S.Overlay className='overlay' onClick={() => onDelete(photo)}>
                <S.Circle />
                <FiTrash2 size={28} />
              </S.Overlay>
            </S.PhotoWrapper>
          ))}
        </S.PhotosContainer>
      </S.PhotosWrapper>
    </>
  );
};
