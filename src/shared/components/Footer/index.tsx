import { Copyright, FooterContainer } from './index.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()} Dongarium. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
