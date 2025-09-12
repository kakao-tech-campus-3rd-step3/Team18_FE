import React from 'react';
import { SectionTitle } from '@/shared/components/SectionTitle';
import * as S from './index.styled';
import { mockClubDetail } from '../mock';

const ClubActivityPhotosSection: React.FC = () => {
  return (
    <>
      <S.TitleWrapper>
        <SectionTitle>활동 사진</SectionTitle>
      </S.TitleWrapper>
      <S.PhotosWrapper>
        <S.PhotosContainer>
          {mockClubDetail.introductionImages.map((src, idx) => (
            <S.Photo key={idx} src={src} alt={`활동 사진 ${idx + 1}`} />
          ))}
        </S.PhotosContainer>
      </S.PhotosWrapper>
    </>
  );
};

export default ClubActivityPhotosSection;
