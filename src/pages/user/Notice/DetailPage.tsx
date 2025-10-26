import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { mockNoticeDetail } from './mock';

export const NoticeDetailPage = () => {
  const navigate = useNavigate();
  // const { id } = useParams();

  const data = mockNoticeDetail;

  return (
    <Wrapper>
      <Card>
        <Title>{data.title}</Title>
        <MetaWrapper>
          <div>
            <Label>작성자</Label> {data.author}
          </div>
          <div>
            <Label>문의처</Label> {data.email}
          </div>
        </MetaWrapper>
        <MetaWrapper>
          <div>
            <Label>작성일</Label> {data.createdAt.slice(0, 10)}
          </div>
          <div>
            <Label>첨부파일</Label> {data.file}
          </div>
        </MetaWrapper>
        <Content>{data.content}</Content>
        <Button onClick={() => navigate('/notices')}>목록</Button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

const Card = styled.div`
  width: 80%;
  max-width: 780px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px 60px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const MetaWrapper = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 8px;
  font-size: 15px;
`;

const Label = styled.span`
  font-weight: 600;
  margin-right: 6px;
`;

const Content = styled.pre`
  margin-top: 30px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 40px;
  background: #dcd7f8;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #c7bdf3;
  }
`;
