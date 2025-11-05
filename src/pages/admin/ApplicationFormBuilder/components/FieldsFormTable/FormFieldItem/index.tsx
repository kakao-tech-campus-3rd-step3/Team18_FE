import styled from '@emotion/styled';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Dropdown } from '@/shared/components/Dropdown';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { CheckboxOptionsBuilder } from './Builders/CheckboxOptionsBuilder';
import { RadioOptionsBuilder } from './Builders/RadioOptionsBuilder';
import { TextOptionsBuilder } from './Builders/TextOptionsBuilder';
import { TimeslotFieldBuilder } from './Builders/TimeslotFieldBuilder';
import type { QuestionType } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

const fieldTypes: QuestionType[] = ['텍스트', '라디오', '체크박스', '타임슬롯'];

export const FormFieldItem = () => {
  const [title, setTitle] = useState('');
  const [currentOption, setCurrentOption] = useState<QuestionType>('텍스트');

  const renderOptionsBuilder = () => {
    switch (currentOption) {
      case '텍스트':
        return <TextOptionsBuilder />;
      case '라디오':
        return <RadioOptionsBuilder />;
      case '체크박스':
        return <CheckboxOptionsBuilder />;
      case '타임슬롯':
        return <TimeslotFieldBuilder />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <CommonHeader>
        <Wrapper>
          <IoCloseOutline size={'2rem'} color='#757575' />
        </Wrapper>
        <Wrapper>
          <OutlineInputField
            placeholder='질문 내용을 입력하세요.'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Dropdown
            value={currentOption}
            onSelect={(newOption) => setCurrentOption(newOption)}
            options={fieldTypes}
          />
        </Wrapper>
      </CommonHeader>

      <OptionsWrapper>{renderOptionsBuilder()}</OptionsWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 1rem;
`;

const CommonHeader = styled.div(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray200}`,
  paddingTop: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const OptionsWrapper = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;
