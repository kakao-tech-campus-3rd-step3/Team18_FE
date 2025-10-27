import styled from '@emotion/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { IoRadioButtonOffOutline } from 'react-icons/io5';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { Text } from '@/shared/components/Text';
import type { UseFormReturn } from 'react-hook-form';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';
import { useFieldArray } from 'react-hook-form';

type Props = {
  formHandler: UseFormReturn<ApplicationForm>;
  questionIndex: number;
};

export const RadioOptionsBuilder = ({ formHandler, questionIndex }: Props) => {
  const {
    register,
    control,
    formState: { errors },
  } = formHandler;

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.optionList`,
  });

  const handleAddOption = () => {
    append({ option: '' });
  };

  return (
    <Layout>
      {fields.map((field, optionIndex) => (
        <OptionFieldWrapper key={field.id}>
          <RadioIcon />
          <OutlineInputField
            placeholder='옵션을 입력해주세요.'
            {...register(`questions.${questionIndex}.optionList.${optionIndex}.option`, {
              required: '옵션을 입력해주세요',
              minLength: { value: 1, message: '옵션을 입력해주세요.' },
            })}
            invalid={!!errors.questions?.[questionIndex]?.optionList?.[optionIndex]?.option}
            message={errors.questions?.[questionIndex]?.optionList?.[optionIndex]?.option?.message}
          />
          <AiOutlineCloseCircle
            size={'1.5rem'}
            color='#757575'
            onClick={() => remove(optionIndex)}
          />
        </OptionFieldWrapper>
      ))}

      <AddOptionButton onClick={handleAddOption}>
        <FiPlus /> <Text size='sm'>옵션 추가</Text>
      </AddOptionButton>
    </Layout>
  );
};

const Layout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const OptionFieldWrapper = styled.div({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

const RadioIcon = styled(IoRadioButtonOffOutline)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

const AddOptionButton = styled.div(({ theme }) => ({
  marginTop: '1rem',
  backgroundColor: theme.colors.gray100,
  padding: '0.4rem',
  width: '5.8rem',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: theme.radius.sm,
}));
