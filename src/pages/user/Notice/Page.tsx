import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { mockNotices } from './mock';

export const NoticeListPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>공지사항</Title>
      <NoticeCard>
        {mockNotices.notices.map((notice) => (
          <NoticeRow key={notice.id} onClick={() => navigate(`/notices/${notice.id}`)}>
            <NoticeText>{notice.title}</NoticeText>
            <NoticeDate>
              {notice.createdAt.slice(0, 10)} <span>개발진</span>
            </NoticeDate>
          </NoticeRow>
        ))}
      </NoticeCard>
      <Footer>개발진과 연락하기 : ppgs@admin.com</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const NoticeCard = styled.div`
  width: 80%;
  max-width: 780px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  padding: 24px 40px;
`;

const NoticeRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #e3e2f1;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const NoticeText = styled.span`
  font-size: 15px;
  color: #1b1b1b;
`;

const NoticeDate = styled.span`
  font-size: 13px;
  color: #a5a5a5;
  span {
    margin-left: 8px;
    color: #a5a5a5;
  }
`;

const Footer = styled.p`
  margin-top: 30px;
  font-size: 14px;
  color: #a9a9a9;
`;
