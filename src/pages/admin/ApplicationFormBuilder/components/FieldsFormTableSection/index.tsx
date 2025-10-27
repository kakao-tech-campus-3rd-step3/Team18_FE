import styled from '@emotion/styled';
import { AddFieldButton } from './AddFieldButton';
import { FormFieldItem } from './FormFieldItem';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';
import type { UseFormReturn } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';

type Props = {
  formHandler: UseFormReturn<ApplicationForm>;
};

export const ApplicationFieldsFormTableSection = ({ formHandler }: Props) => {
  const { control } = formHandler;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const handleAddFormField = () => {
    append({
      questionNum: fields.length + 1,
      questionType: 'TEXT',
      question: '',
      required: true,
      optionList: [],
      timeSlotOptions: [],
    });
  };

  return (
    <>
      {fields.map((data, index) => (
        <div key={data.id}>
          {index !== 0 && <Divider />}
          <FormFieldItem index={index} formHandler={formHandler} onRemove={() => remove(index)} />
        </div>
      ))}
      <AddFieldButton onClick={handleAddFormField} />
    </>
  );
};

const Divider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray200}`,
  width: '100%',
  margin: '2rem 0 1.3rem 0',
}));
