import { SectionHeading } from '@/shared/components/SectionHeading';
import * as S from './index.styled';

interface ClubActivityPhotosSectionProps {
  images: { id: number; url: string }[];
}

export const ClubActivityPhotosSection = ({ images }: ClubActivityPhotosSectionProps) => {
  return (
    <>
      <S.TitleWrapper>
        <SectionHeading>활동 사진</SectionHeading>
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
