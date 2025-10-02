import { FiTrash2, FiPlus } from 'react-icons/fi';
import * as S from './index.styled';
import { mockClubDetail } from '../mock';
import { SectionTitle } from '@/shared/components/SectionTitle';

export const ClubActivityPhotosEditSection = () => {
  const handleDelete = (idx: number) => {
    console.log(`${idx}번째 사진 삭제`);
    // TODO: 사진 삭제 로직 연결
  };

  const handleAdd = () => {
    console.log('사진 추가');
    // TODO: 사진 추가 로직 연결
  };

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
          {mockClubDetail.introductionImages.map((src, idx) => (
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
