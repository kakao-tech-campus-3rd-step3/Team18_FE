import { FiTrash2, FiPlus } from 'react-icons/fi';
import { useClubActivityPhotos } from '@/pages/admin/ClubDetailEdit/hook/useClubActivityPhotos';
import { SectionTitle } from '@/shared/components/SectionTitle';
import * as S from './index.styled';

interface ClubActivityPhotosEditSectionProps {
  clubId: string | number;
  images: string[];
  onUpload: (files: File[]) => void;
}

export const ClubActivityPhotosEditSection = ({
  clubId,
  images: initialImages,
}: ClubActivityPhotosEditSectionProps) => {
  const { images, handleAdd, handleDelete } = useClubActivityPhotos(clubId, initialImages);

  return (
    <>
      <S.TitleWrapper>
        <SectionTitle required>
          활동 사진
          <S.AddButton onClick={handleAdd}>
            <FiPlus />
          </S.AddButton>
        </SectionTitle>
      </S.TitleWrapper>

      <S.PhotosWrapper>
        <S.PhotosContainer>
          {images.map((src, idx) => (
            <S.PhotoWrapper key={idx}>
              <S.Photo src={src} alt={`활동 사진 ${idx + 1}`} />
              <S.Overlay className='overlay' onClick={() => handleDelete(idx)}>
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
