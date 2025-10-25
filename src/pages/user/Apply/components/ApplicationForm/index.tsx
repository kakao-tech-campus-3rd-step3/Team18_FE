import { useForm, FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { QuestionTypes } from '@/pages/user/Apply/constant/questionType';
import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import * as S from './index.styled';
import { InterviewScheduleSelector } from './InterviewScheduleSelector';
import { useApplicationSubmit } from '../../hook/useApplicationSubmit';
import type { FormInputs, InterviewSchedule, Question } from '@/pages/user/Apply/type/apply';

type Props = {
  questions: Question[];
};

export const ApplicationForm = ({ questions }: Props) => {
  const methods = useForm<FormInputs>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      studentId: '',
      department: '',
      phoneNumber: '',
      email: '',
      answers: [],
      selectedInterviewSchedule: [],
    },
  });
  const { errors, isSubmitting } = methods.formState;

  const { clubId } = useParams<{ clubId: string }>();
  const clubIdNumber = Number(clubId);
  const questionArray = questions.map((e) => e.question);
  const { handleSubmit } = useApplicationSubmit(clubIdNumber, questionArray);

  const questionsWithIndex = questions.map((q, i) => ({ ...q, originalIndex: i }));
  const timeSlotQuestions = questionsWithIndex.filter(
    (q) => q.questionType === QuestionTypes.TIME_SLOT,
  );
  const otherQuestions = questionsWithIndex.filter(
    (q) => q.questionType !== QuestionTypes.TIME_SLOT,
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <S.FormContainer>
          <S.UserInfoWrapper>
            <S.FormField>
              <S.Label>이름</S.Label>
              <OutlineInputField
                placeholder='이름을 입력하세요.'
                {...methods.register('name', { required: '이름을 입력하세요.' })}
                invalid={!!errors.name}
                message={errors.name?.message}
              />
            </S.FormField>
            <S.FormRow>
              <S.FormField>
                <S.Label>학번</S.Label>
                <OutlineInputField
                  placeholder='학번을 입력하세요.'
                  {...methods.register('studentId', {
                    required: '학번을 입력하세요.',
                    maxLength: { value: 6, message: '학번은 최대 6자리까지 입력 가능합니다.' },
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: '학번은 숫자 6자리여야 합니다.',
                    },
                  })}
                  invalid={!!errors.studentId}
                  message={errors.studentId?.message}
                />
              </S.FormField>
              <S.FormField>
                <S.Label>학과</S.Label>
                <OutlineInputField
                  placeholder='학과를 입력하세요.'
                  {...methods.register('department', { required: '학과를 입력하세요.' })}
                  invalid={!!errors.department}
                  message={errors.department?.message}
                />
              </S.FormField>
            </S.FormRow>
            <S.FormField>
              <S.Label>전화번호</S.Label>
              <OutlineInputField
                placeholder='010-0000-0000'
                {...methods.register('phoneNumber', {
                  required: '전화번호를 입력하세요.',
                  pattern: {
                    value: /^\d{2,3}-\d{3,4}-\d{4}$/,
                    message: '올바른 전화번호 형식이 아닙니다.',
                  },
                })}
                invalid={!!errors.phoneNumber}
                message={errors.phoneNumber?.message}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>이메일</S.Label>
              <OutlineInputField
                placeholder='이메일을 입력하세요.'
                {...methods.register('email', {
                  required: '이메일을 입력하세요.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: '올바른 이메일 형식이 아닙니다. 예: example@email.com',
                  },
                })}
                invalid={!!errors.email}
                message={errors.email?.message}
              />
            </S.FormField>
          </S.UserInfoWrapper>

          <S.QuestionWrapper>
            {otherQuestions.map((field) => (
              <S.ChoiceFormFiled key={field.questionNum}>
                <S.Label>{field.question}</S.Label>

                {field.questionType === QuestionTypes.CHECKBOX &&
                  field.optionList?.map((option, optIndex) => (
                    <S.Label key={optIndex}>
                      <S.OptionInput
                        type='checkbox'
                        value={option}
                        {...methods.register(`answers.${field.originalIndex}`)}
                      />
                      {option}
                    </S.Label>
                  ))}

                {field.questionType === QuestionTypes.RADIO &&
                  field.optionList?.map((option, optIndex) => (
                    <S.Label key={optIndex}>
                      <S.OptionInput
                        type='radio'
                        value={option}
                        {...methods.register(`answers.${field.originalIndex}`)}
                      />
                      {option}
                    </S.Label>
                  ))}

                {field.questionType === QuestionTypes.TEXT && (
                  <OutlineTextareaField
                    placeholder='1000자 미만으로 입력하세요.'
                    {...methods.register(`answers.${field.originalIndex}`)}
                  />
                )}
              </S.ChoiceFormFiled>
            ))}
          </S.QuestionWrapper>

          {timeSlotQuestions.length > 0 && (
            <S.QuestionWrapper>
              {timeSlotQuestions.map((field) => (
                <S.ChoiceFormFiled key={field.questionNum}>
                  <S.Label>{field.question}</S.Label>
                  {field.timeSlotOptions?.map(
                    (interviewSchedule: InterviewSchedule, idx: number) => (
                      <InterviewScheduleSelector
                        key={idx}
                        availableTime={interviewSchedule.availableTime}
                        date={interviewSchedule.date}
                      />
                    ),
                  )}
                </S.ChoiceFormFiled>
              ))}
            </S.QuestionWrapper>
          )}

          <Button type='submit'>{isSubmitting ? '제출중...' : '제출하기'}</Button>
        </S.FormContainer>
      </form>
    </FormProvider>
  );
};
