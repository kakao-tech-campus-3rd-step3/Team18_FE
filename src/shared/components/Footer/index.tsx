import { CONTACT_EMAIL } from '@/shared/constants/email';
import { Copyright, Email, FooterContainer } from './index.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Email href='mailto:jnupole004@gmail.com'>Contact : {CONTACT_EMAIL}</Email>
      <Copyright>© {new Date().getFullYear()} Dongarium. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
