import { useEffect, useState } from 'react';
import { fetchNoticeDetail } from '@/pages/user/Notice/api/notices';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import * as S from './index.styled';
import type { NoticeDetail } from '@/pages/user/Notice/types/notice';

type NoticeDetailCardSectionProps = {
  noticeId: number;
  onBack: () => void;
};

export const NoticeDetailCardSection = ({ noticeId, onBack }: NoticeDetailCardSectionProps) => {
  const [data, setData] = useState<NoticeDetail | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchNoticeDetail(noticeId);
        setData(res);
      } catch (err) {
        console.error('Failed to fetch notice detail:', err);
        setError(true);
      }
    };
    fetchData();
  }, [noticeId]);

  if (error)
    return (
      <S.Container>
        <S.ErrorBox>
          공지사항 정보를 불러올 수 없습니다.
          <br />
          잠시 후 다시 시도해주세요.
        </S.ErrorBox>
        <S.Button onClick={onBack}>목록</S.Button>
      </S.Container>
    );

  if (!data) return <LoadingSpinner />;

  return (
    <S.Container>
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
          <S.Label>작성일</S.Label> {data.createdAt?.slice(0, 10) ?? '-'}
        </S.MetaItem>
        <S.MetaItem>
          <S.Label>첨부파일</S.Label> {data.file}
        </S.MetaItem>
      </S.MetaWrapper>

      <S.Content>{data.content}</S.Content>
      <S.Button onClick={onBack}>목록</S.Button>
    </S.Container>
  );
};
