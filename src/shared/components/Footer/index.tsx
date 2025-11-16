import { CONTACT_EMAIL } from '@/app/constants/email';
import * as S from './index.styled';

const Footer = () => {
  return (
    <S.Container>
      <S.Email href='mailto:jnupole004@gmail.com'>Contact : {CONTACT_EMAIL}</S.Email>
      <S.Copyright>© {new Date().getFullYear()} Dongarium. All rights reserved.</S.Copyright>
    </S.Container>
  );
};

export default Footer;
