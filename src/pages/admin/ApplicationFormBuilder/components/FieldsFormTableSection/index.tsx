import type { UseFormReturn } from 'react-hook-form';
import styled from '@emotion/styled';
import { useFieldArray } from 'react-hook-form';
import { AddFieldButton } from './AddFieldButton';
import { FormFieldItem } from './FormFieldItem';
import type { ApplicationFormData } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type Props = {
  formHandler: UseFormReturn<ApplicationFormData>;
  isEditMode: boolean;
};

export const ApplicationFieldsFormTableSection = ({ formHandler, isEditMode }: Props) => {
  const { control } = formHandler;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'formQuestions',
  });

  const handleAddFormField = () => {
    append({
      questionNum: fields.length + 1,
      fieldType: 'TEXT',
      displayOrder: fields.length + 1,
      question: '',
      isRequired: true,
      optionList: [],
      timeSlotOptions: { date: '', availableTime: { start: '07:00:00', end: '07:00:00' } },
    });
  };

  return (
    <>
      {fields.map((data, index) => (
        <div key={data.id}>
          {index !== 0 && <Divider />}
          <FormFieldItem
            index={index}
            formHandler={formHandler}
            onRemove={() => remove(index)}
            isEditMode={isEditMode}
          />
        </div>
      ))}
      {isEditMode && <AddFieldButton onClick={handleAddFormField} />}
    </>
  );
};

const Divider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray200}`,
  width: '100%',
  margin: '2rem 0 1.3rem 0',
}));
