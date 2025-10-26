import * as S from './index.styled';
import type { NoticeDetail } from '@/pages/user/Notice/types/notice';

type NoticeDetailCardSectionProps = {
  data: NoticeDetail;
  onBack: () => void;
};

export const NoticeDetailCardSection = ({ data, onBack }: NoticeDetailCardSectionProps) => {
  return (
    <S.Card>
      <S.Title>{data.title}</S.Title>

      <S.MetaWrapper>
        <S.MetaItem>
          <S.Label>작성자</S.Label> {data.author}
        </S.MetaItem>
        <S.MetaItem>
          <S.Label>문의처</S.Label> {data.email}
        </S.MetaItem>
      </S.MetaWrapper>

      <S.MetaWrapper>
        <S.MetaItem>
          <S.Label>작성일</S.Label> {data.createdAt.slice(0, 10)}
        </S.MetaItem>
        <S.MetaItem>
          <S.Label>첨부파일</S.Label> {data.file}
        </S.MetaItem>
      </S.MetaWrapper>

      <S.Content>{data.content}</S.Content>
      <S.Button onClick={onBack}>목록</S.Button>
    </S.Card>
  );
};
