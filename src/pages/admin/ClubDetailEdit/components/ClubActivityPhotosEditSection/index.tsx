import { FiTrash2, FiPlus } from 'react-icons/fi';
import { useClubActivityPhotos } from '@/pages/admin/ClubDetailEdit/hook/useClubActivityPhotos';
import { SectionHeading } from '@/shared/components/SectionHeading';
import * as S from './index.styled';

interface ClubActivityPhotosEditSectionProps {
  clubId: number;
  images: { id: number; url: string }[];
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
        <SectionHeading required>
          활동 사진
          <S.AddButton onClick={handleAdd}>
            <FiPlus />
          </S.AddButton>
        </SectionHeading>
      </S.TitleWrapper>

      <S.PhotosWrapper>
        <S.PhotosContainer>
          {images.map((img) => (
            <S.PhotoWrapper key={img.id}>
              <S.Photo src={img.url} alt={`활동 사진 ${img.id}`} />
              <S.Overlay className='overlay' onClick={() => handleDelete(img.id)}>
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
