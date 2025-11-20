import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  padding: '40px 60px',
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    width: '90%',
    padding: '32px 32px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
    padding: '24px 20px',
  },
}));

export const Title = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '32px',
  paddingBottom: '24px',
  lineHeight: 1.4,
  borderBottom: `1px solid ${theme.colors.border}`,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: theme.font.size.lg,
    marginBottom: '24px',
    paddingBottom: '20px',
  },
}));

export const MetaWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '40px',
  marginBottom: '16px',
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    gap: '24px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '12px',
    fontSize: theme.font.size.sm,
    marginBottom: '12px',
  },
}));

export const MetaItem = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  minWidth: '250px',
  flex: '1 1 auto',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    minWidth: '100%',
    width: '100%',
  },
}));

export const Label = styled.span(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  marginRight: '6px',
  color: theme.colors.textPrimary,
  minWidth: '60px',
  display: 'inline-block',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    minWidth: '56px',
  },
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
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      maxWidth: '180px',
      fontSize: theme.font.size.xs,
    },
  },
}));

export const Content = styled.pre(({ theme }) => ({
  marginTop: '56px',
  fontSize: theme.font.size.base,
  lineHeight: 1.7,
  color: theme.colors.textPrimary,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '32px',
    fontSize: theme.font.size.base,
    lineHeight: 1.7,
  },
}));

export const Button = styled.button(({ theme }) => ({
  display: 'block',
  marginLeft: 'auto',
  marginTop: '40px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  border: 'none',
  borderRadius: theme.radius.sm,
  padding: '10px 24px',
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  cursor: 'pointer',
  transition: '0.2s ease',
  '&:hover': {
    backgroundColor: theme.colors.primary700,
    transform: 'translateY(-1px)',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '32px',
    padding: '10px 20px',
    fontSize: theme.font.size.sm,
  },
}));

export const ErrorBox = styled.div(({ theme }) => ({
  padding: '120px 0',
  textAlign: 'center',
  color: theme.colors.gray600,
  fontSize: theme.font.size.lg,
  lineHeight: '160%',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '80px 20px',
    fontSize: theme.font.size.base,
  },
}));
