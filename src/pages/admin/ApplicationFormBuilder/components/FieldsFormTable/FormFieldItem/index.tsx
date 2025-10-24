import styled from '@emotion/styled';
import { useState } from 'react';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { FieldTypeSelector } from './FieldTypeSelector';
import type { QuestionType } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

const fieldTypes: QuestionType[] = ['텍스트', '라디오', '체크박스', '타임슬롯'];

export const FormFieldItem = () => {
  const [title, setTitle] = useState('');
  const [currentOption, setCurrentOption] = useState<QuestionType>('텍스트');

  return (
    <Layout>
      <CommonHeader>
        <OutlineInputField
          placeholder='질문 내용을 입력하세요.'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FieldTypeSelector
          value={currentOption}
          onClick={(newOption) => setCurrentOption(newOption)}
          options={fieldTypes}
        />
      </CommonHeader>
    </Layout>
  );
};

const Layout = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const CommonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
