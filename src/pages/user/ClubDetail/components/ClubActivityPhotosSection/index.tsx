import { useState } from 'react';
import { SectionHeading } from '@/shared/components/SectionHeading';
import * as S from './index.styled';

interface ClubActivityPhotosSectionProps {
  images: { id: number; url: string }[];
}

export const ClubActivityPhotosSection = ({ images }: ClubActivityPhotosSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <S.TitleWrapper>
        <SectionHeading>활동 사진</SectionHeading>
      </S.TitleWrapper>
      <S.PhotosWrapper>
        <S.PhotosContainer>
          {images.map((image) => (
            <S.Photo
              key={image.id}
              src={image.url}
              alt={`활동 사진 ${image.id}`}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </S.PhotosContainer>
      </S.PhotosWrapper>

      {selectedImage && (
        <S.Overlay onClick={() => setSelectedImage(null)}>
          <S.OverlayImage src={selectedImage} alt='활동 사진 확대' />
        </S.Overlay>
      )}
    </>
  );
};
