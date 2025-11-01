import { SectionTitle } from '@/shared/components/SectionTitle';
import * as S from './index.styled';

interface ClubActivityPhotosSectionProps {
  images: { id: number; url: string }[];
}

export const ClubActivityPhotosSection = ({ images }: ClubActivityPhotosSectionProps) => {
  return (
    <>
      <S.TitleWrapper>
        <SectionTitle>활동 사진</SectionTitle>
      </S.TitleWrapper>
      <S.PhotosWrapper>
        <S.PhotosContainer>
          {images.map((image) => (
            <S.Photo key={image.id} src={image.url} alt={`활동 사진 ${image.id}`} />
          ))}
        </S.PhotosContainer>
      </S.PhotosWrapper>
    </>
  );
};
