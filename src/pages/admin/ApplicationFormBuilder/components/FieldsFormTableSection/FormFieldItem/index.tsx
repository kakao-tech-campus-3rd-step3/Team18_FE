import styled from '@emotion/styled';
import { IoCloseOutline } from 'react-icons/io5';
import { Dropdown } from '@/shared/components/Dropdown';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { CheckboxOptionsBuilder } from './Builders/CheckboxOptionsBuilder';
import { RadioOptionsBuilder } from './Builders/RadioOptionsBuilder';
import { TextOptionsBuilder } from './Builders/TextOptionsBuilder';
import { TimeslotFieldBuilder } from './Builders/TimeslotFieldBuilder';
import type { QuestionType } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';
import type { UseFormReturn } from 'react-hook-form';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';
import {
  reverseTypeMapping,
  typeMapping,
} from '@/pages/admin/ApplicationFormBuilder/utils/typeMapping';

type Props = {
  formHandler: UseFormReturn<ApplicationForm>;
  index: number;
  onRemove?: () => void;
};
const fieldTypes: QuestionType[] = ['텍스트', '라디오', '체크박스', '타임슬롯'];

export const FormFieldItem = ({ formHandler, index, onRemove }: Props) => {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = formHandler;

  const questionType = watch(`questions.${index}.questionType`);

  const currentDisplayType = reverseTypeMapping[questionType] || '텍스트';

  const renderOptionsBuilder = () => {
    switch (currentDisplayType) {
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

  const handleTypeSelect = (newOption: QuestionType) => {
    setValue(`questions.${index}.questionType`, typeMapping[newOption]);
  };

  return (
    <Layout>
      <CommonHeader>
        <Wrapper>
          <IoCloseOutline size={'2rem'} color='#757575' onClick={onRemove} />
        </Wrapper>
        <Wrapper>
          <OutlineInputField
            placeholder='질문 내용을 입력하세요.'
            {...register(`questions.${index}.question`, {
              required: '질문 내용을 입력해주세요.',
              minLength: { value: 1, message: '질문 내용은 최소 한 글자 이상 입력해야 합니다.' },
            })}
            invalid={!!errors.questions?.[index]?.question}
            message={errors.questions?.[index]?.question?.message}
          />
          <Dropdown value={currentDisplayType} onSelect={handleTypeSelect} options={fieldTypes} />
        </Wrapper>
      </CommonHeader>

      <OptionsWrapper>{renderOptionsBuilder()}</OptionsWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 1rem;
`;

const CommonHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

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
