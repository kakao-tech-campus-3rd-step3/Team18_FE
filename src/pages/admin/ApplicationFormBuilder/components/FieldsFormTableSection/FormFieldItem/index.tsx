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
  isEditMode: boolean;
};
const fieldTypes: QuestionType[] = ['텍스트', '라디오', '체크박스', '타임슬롯'];

export const FormFieldItem = ({ formHandler, index, onRemove, isEditMode }: Props) => {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = formHandler;

  const questionType = watch(`formQuestions.${index}.fieldType`);

  const currentDisplayType = reverseTypeMapping[questionType] || '텍스트';

  const renderOptionsBuilder = () => {
    switch (currentDisplayType) {
      case '텍스트':
        return <TextOptionsBuilder />;
      case '라디오':
        return (
          <RadioOptionsBuilder
            formHandler={formHandler}
            questionIndex={index}
            isEditMode={isEditMode}
          />
        );
      case '체크박스':
        return (
          <CheckboxOptionsBuilder
            formHandler={formHandler}
            questionIndex={index}
            isEditMode={isEditMode}
          />
        );
      case '타임슬롯':
        return (
          <TimeslotFieldBuilder
            formHandler={formHandler}
            questionIndex={index}
            isEditMode={isEditMode}
          />
        );
      default:
        return null;
    }
  };

  const handleTypeSelect = (newOption: QuestionType) => {
    const newType = typeMapping[newOption];
    setValue(`formQuestions.${index}.fieldType`, newType);

    if (newType === 'RADIO' || newType === 'CHECKBOX') {
      setValue(`formQuestions.${index}.optionList`, []);
    }
    setValue(`formQuestions.${index}.question`, '');
  };

  return (
    <Layout>
      <CommonHeader>
        <Wrapper>
          {isEditMode && (
            <IoCloseOutline
              size={'2rem'}
              color='#757575'
              onClick={onRemove}
              style={{ cursor: 'pointer' }}
            />
          )}
        </Wrapper>
        <Wrapper>
          <OutlineInputField
            placeholder='질문 내용을 입력하세요.'
            {...register(`formQuestions.${index}.question`, {
              required: '질문 내용을 입력해주세요.',
              minLength: { value: 1, message: '질문 내용은 최소 한 글자 이상 입력해야 합니다.' },
            })}
            invalid={!!errors.formQuestions?.[index]?.question}
            message={errors.formQuestions?.[index]?.question?.message}
            disabled={!isEditMode}
          />
          <Dropdown
            value={currentDisplayType}
            onSelect={handleTypeSelect}
            options={fieldTypes}
            disabled={!isEditMode}
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
