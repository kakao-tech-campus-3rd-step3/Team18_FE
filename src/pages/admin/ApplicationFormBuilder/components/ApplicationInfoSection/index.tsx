import styled from '@emotion/styled';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { SectionHeading } from '@/shared/components/SectionHeading';

export const ApplicationInfoSection = () => {
  return (
    <>
      <SectionHeading required>동아리 소개란 </SectionHeading>
      <ClubInfoContainer>
        <Wrapper>
          <UnderlineInputField placeholder='ex. 동아리명 10기 신입부원 모집' />
          <UnderlineInputField placeholder='2025.10.1 - 2025.10.13' />
        </Wrapper>
        <UnderlineInputField placeholder='한줄 소개 작성해주세요.' />
      </ClubInfoContainer>
    </>
  );
};

const ClubInfoContainer = styled.div(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.sm,
  padding: '1.5rem ',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  boxSizing: 'border-box',
}));

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
  width: '100%',
});
