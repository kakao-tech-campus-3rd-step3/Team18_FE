import styled from '@emotion/styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage width={90} height={30} src='/assets/logo.png' />
    </LogoWrapper>
  );
};

export const LogoWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  height: '100%',
});

export const LogoImage = styled.img`
  max-height: 32px;
  height: auto;
  width: auto;
  object-fit: contain;
`;
