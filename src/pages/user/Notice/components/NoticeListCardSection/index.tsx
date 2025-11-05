import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routerPath';
import { fetchNotices } from '@/pages/user/Notice/api/notices';
import * as S from './index.styled';
import type { Notice } from '@/pages/user/Notice/types/notice';

export const NoticeListCardSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchNotices(currentPage);
      setNotices(res.content);
      setTotalPages(res.pageInfo.totalPages);
    };
    fetchData();
  }, [currentPage]);

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
        {Array.from({ length: totalPages }, (_, i) => (
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
