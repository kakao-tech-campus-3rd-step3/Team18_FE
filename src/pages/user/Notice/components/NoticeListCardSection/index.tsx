import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_PATH } from '@/app/constants/routerPath';
import { useNotices } from '@/pages/user/Notice/hooks/useNotices';
import * as S from './index.styled';

export const NoticeListCardSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  const { content: notices, pageInfo } = useNotices(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <S.Container>
        {notices.map((notice) => (
          <S.NoticeRow
            key={notice.id}
            onClick={() =>
              navigate(
                `/${ROUTE_PATH.COMMON.NOTICE_DETAIL.replace(':noticeId', String(notice.id))}`,
              )
            }
          >
            <S.NoticeText>{notice.title}</S.NoticeText>
            <S.NoticeRight>
              <S.NoticeDate>{notice.createdAt?.slice(0, 10) ?? '-'}</S.NoticeDate>
              <S.NoticeAuthor>{notice.author}</S.NoticeAuthor>
            </S.NoticeRight>
          </S.NoticeRow>
        ))}
      </S.Container>

      <S.PaginationWrapper>
        {Array.from({ length: pageInfo.totalPages }, (_, i) => (
          <S.PageButton
            key={i}
            onClick={() => handlePageChange(i + 1)}
            $active={currentPage === i + 1}
          >
            {i + 1}
          </S.PageButton>
        ))}
      </S.PaginationWrapper>
    </>
  );
};
