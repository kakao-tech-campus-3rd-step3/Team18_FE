import styled from '@emotion/styled';

export const UploadContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1rem 0',
});

export const Description = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.gray800,
  textAlign: 'center',
  margin: 0,
}));

export const FileInputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

export const FileInput = styled.input({
  display: 'none',
});

export const FileInputLabel = styled.label(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: theme.colors.gray100,
  color: theme.colors.gray900,
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  borderRadius: theme.radius.md,
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: theme.colors.gray200,
  },
}));

export const FileName = styled.p(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray700,
  textAlign: 'center',
  margin: 0,
  fontWeight: theme.font.weight.medium,
}));

export const Notice = styled.p(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray600,
  textAlign: 'center',
  margin: 0,
  lineHeight: 1.5,
}));

export const DownloadLink = styled.button(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
  transition: 'color 0.2s, transform 0.2s',

  '&:hover': {
    color: theme.colors.blue700,
    transform: 'translateY(-2px)',
  },
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
