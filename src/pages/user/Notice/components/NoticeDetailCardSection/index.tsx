import { useNoticeDetail } from '@/pages/user/Notice/hooks/useNoticeDetail';
import * as S from './index.styled';

type NoticeDetailCardSectionProps = {
  noticeId: number;
  onBack: () => void;
};

export const NoticeDetailCardSection = ({ noticeId, onBack }: NoticeDetailCardSectionProps) => {
  const data = useNoticeDetail(noticeId);

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
          <S.Label>첨부파일</S.Label>
          {data.file && data.file.length > 0 ? (
            <S.FileList>
              {data.file.map((f) => (
                <S.FileItem key={f.id}>
                  <a
                    href={f.presignedUrl}
                    download={f.name}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {f.name}
                  </a>
                </S.FileItem>
              ))}
            </S.FileList>
          ) : (
            '없음'
          )}
        </S.MetaItem>
      </S.MetaWrapper>

      <S.Content>{data.content}</S.Content>
      <S.Button onClick={onBack}>목록</S.Button>
    </S.Container>
  );
};
