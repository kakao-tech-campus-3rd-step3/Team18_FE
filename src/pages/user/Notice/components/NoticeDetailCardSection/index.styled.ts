import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.sm,
  padding: '40px 60px',
  border: `1px solid ${theme.colors.border}`,
}));

export const Title = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '32px',
}));

export const MetaWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '40px',
  marginBottom: '16px',
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
}));

export const MetaItem = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  minWidth: '250px',
  flex: '1 1 auto',
});

export const Label = styled.span(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  marginRight: '6px',
  color: theme.colors.textPrimary,
}));

export const FileList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  lineHeight: 1.0,
});

export const FileItem = styled.li(({ theme }) => ({
  marginBottom: '4px',
  a: {
    display: 'inline-block',
    maxWidth: '220px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: theme.colors.primary,
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.colors.primary700,
    },
  },
}));

export const Content = styled.pre(({ theme }) => ({
  marginTop: '56px',
  fontSize: theme.font.size.sm,
  lineHeight: 1.6,
  color: theme.colors.textPrimary,
  whiteSpace: 'pre-wrap',
}));

export const Button = styled.button(({ theme }) => ({
  display: 'block',
  marginLeft: 'auto',
  marginTop: '40px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  border: 'none',
  borderRadius: theme.radius.sm,
  padding: '6px 14px',
  fontSize: theme.font.size.xs,
  cursor: 'pointer',
  transition: '0.2s ease',
  '&:hover': {
    backgroundColor: theme.colors.primary700,
    transform: 'translateY(-1px)',
  },
}));

export const ErrorBox = styled.div`
  padding: 120px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: 160%;
`;
