import styled from '@emotion/styled';

export const HeaderTitle = () => {
  return (
    <TextWrapper>
      <Title>관리자 등록</Title>
    </TextWrapper>
  );
};
const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem 0 1rem 0',
});

const Title = styled.h1(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: theme.font.weight.medium,
  lineHeight: 1.3,
  color: theme.colors.gray900,
}));
