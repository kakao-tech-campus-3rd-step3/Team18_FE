import type { UseFormReturn } from 'react-hook-form';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { AddFieldButton } from './AddFieldButton';
import { DeleteQuestionModal } from './DeleteQuestionModal';
import { FormFieldItem } from './FormFieldItem';
import { TimeslotFieldBuilder } from './FormFieldItem/Builders/TimeslotFieldBuilder';
import type { ApplicationFormData } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

type Props = {
  formHandler: UseFormReturn<ApplicationFormData>;
};

export const ApplicationFieldsFormTableSection = ({ formHandler }: Props) => {
  const { control, getValues } = formHandler;
  const [deleteTargetIndex, setDeleteTargetIndex] = useState<number | null>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'formQuestions',
  });

  // 작성된 내용이 없는 질문은 확인 없이 바로 삭제한다.
  const isEmptyQuestion = (index: number) => {
    const question = getValues(`formQuestions.${index}`);
    return !question.question && (question.optionList ?? []).every((option) => !option.value);
  };

  const handleRemoveRequest = (index: number) => {
    if (isEmptyQuestion(index)) {
      remove(index);
      return;
    }
    setDeleteTargetIndex(index);
  };

  const handleConfirmRemove = () => {
    if (deleteTargetIndex !== null) {
      remove(deleteTargetIndex);
    }
    setDeleteTargetIndex(null);
  };

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
          {data.fieldType === 'TIME_SLOT' ? (
            <TimeslotFieldBuilder formHandler={formHandler} questionIndex={index} />
          ) : (
            <FormFieldItem
              index={index}
              formHandler={formHandler}
              onRemove={() => handleRemoveRequest(index)}
            />
          )}
        </div>
      ))}
      <AddFieldButton onClick={handleAddFormField} />

      <DeleteQuestionModal
        isOpen={deleteTargetIndex !== null}
        onClose={() => setDeleteTargetIndex(null)}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
};

const Divider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray200}`,
  width: '100%',
  margin: '2rem 0 1.3rem 0',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    margin: '1.5rem 0 1rem 0',
  },
}));
