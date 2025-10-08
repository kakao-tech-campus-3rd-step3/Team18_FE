import styled from '@emotion/styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage width={325} height={200} src='/assets/logo.png' />
    </LogoWrapper>
  );
};

export const LogoWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',
  cursor: 'pointer',
});

type ImageWrapperProps = {
  width?: number;
  height?: number;
};

export const LogoImage = styled.img<ImageWrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  object-fit: contain;
`;
