import { useNavigate } from 'react-router-dom';
import * as S from './index.styled';
import { mockNotices } from '../../mock'; //임시목

export const NoticeListCardSection = () => {
  const navigate = useNavigate();

  return (
    <S.NoticeCard>
      {mockNotices.notices.map((notice) => (
        <S.NoticeRow key={notice.id} onClick={() => navigate(`/notices/${notice.id}`)}>
          <S.NoticeText>{notice.title}</S.NoticeText>
          <S.NoticeRight>
            <S.NoticeDate>{notice.createdAt.slice(0, 10)}</S.NoticeDate>
            <S.NoticeAuthor>{notice.author}</S.NoticeAuthor>
          </S.NoticeRight>
        </S.NoticeRow>
      ))}
    </S.NoticeCard>
  );
};
