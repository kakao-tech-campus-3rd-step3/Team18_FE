import styled from '@emotion/styled';

export const Container = styled.div({
  width: '100%',
});

export const ApplicantInfoCategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1.5fr 2fr 1fr;
  background-color: #f9fbfc;
  border-bottom: 1.8px solid ${({ theme }) => theme.colors.gray100};
  padding: 1.7rem 0 1.5rem 0;

  & > div {
    text-align: center;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1.5fr 1.5fr 1fr;
    & > div:nth-of-type(5) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.web}) {
    grid-template-columns: 1fr 1fr 1.5fr 1fr;
    & > div:nth-of-type(4) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    & > div:nth-of-type(3) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1.5fr 1fr;
    & > div:nth-of-type(2) {
      display: none;
    }
  }
`;

export const ApplicantInfoDataList = styled.div({
  padding: '0.4rem 0.8rem 0 0.8rem',
});

export const CategoryText = styled.div(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.colors.textSecondary,
}));

export const EmptyMessage = styled.div(({ theme }) => ({
  padding: '4rem',
  textAlign: 'center',
  color: theme.colors.gray500,
  fontSize: '1.4rem',
}));
