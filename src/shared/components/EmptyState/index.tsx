import * as S from './index.styled';

export const EmptyState = () => {
  return (
    <S.Container>
      <S.Logo src='/assets/logo.png' alt='Dongari-um 로고' />
      <S.Message>선택된 동아리가 없어요.</S.Message>
      <S.SubText>동아리를 등록하려면 아래 메일로 문의해주세요.</S.SubText>
      <S.MailLink href='mailto:jnupole004@gmail.com'>jnupole004@gmail.com</S.MailLink>
    </S.Container>
  );
};
