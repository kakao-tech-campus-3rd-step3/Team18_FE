import { useForm } from 'react-hook-form';
import type { FormInputs, Question } from '@/pages/user/Apply/type/apply';
import { Button } from '@/shared/components/Button';
import { useParams } from 'react-router-dom';
import { postApplicationForm } from '@/pages/user/Apply/api/apply';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import * as S from './index.styled';
import { QuestionType } from '@/pages/user/Apply/constant/questionType';
import { InterviewSchedule } from './Schedule';

type Props = {
  questions: Question[];
};

export const ApplicationForm = ({ questions }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      studentId: '',
      department: '',
      phoneNumber: '',
      email: '',
      answers: [],
      questions: [],
    },
  });

  const { id } = useParams<{ id: string }>();
  const clubId = Number(id);
  const questionArray = questions.map((e) => e.question);

  const onSubmit = (data: FormInputs) => {
    postApplicationForm(clubId, data, questionArray);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.FormContainer>
        <S.UserInfoWrapper>
          <S.FormFiled>
            <S.Label>이름</S.Label>
            <OutlineInputField
              placeholder='이름을 입력하세요.'
              {...register('name', { required: true })}
            />
            {errors.name && <S.ErrorMessage>이름을 입력하세요</S.ErrorMessage>}
          </S.FormFiled>
          <S.FormFiled>
            <S.Label>학번</S.Label>
            <OutlineInputField
              placeholder='학번을 입력하세요.'
              {...register('studentId', {
                required: '학번을 입력하세요.',
                maxLength: { value: 6, message: '학번은 최대 6자리까지 입력 가능합니다.' },
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: '학번은 숫자 6자리여야 합니다.',
                },
              })}
            />
            {<S.ErrorMessage>{errors.studentId?.message}</S.ErrorMessage>}
          </S.FormFiled>
          <S.FormFiled>
            <S.Label>학과</S.Label>
            <OutlineInputField
              placeholder='학과를 입력하세요.'
              {...register('department', { required: '학과를 입력하세요.' })}
            />
            {<S.ErrorMessage>{errors.department?.message}</S.ErrorMessage>}
          </S.FormFiled>
          <S.FormFiled>
            <S.Label>전화번호</S.Label>
            <OutlineInputField
              placeholder='010-0000-0000'
              {...register('phoneNumber', {
                required: '전화번호를 입력하세요.',
                pattern: {
                  value: /^\d{2,3}-\d{3,4}-\d{4}$/,
                  message: '올바른 전화번호 형식이 아닙니다.',
                },
              })}
            />
            {errors.phoneNumber?.message && (
              <S.ErrorMessage>{errors.phoneNumber.message}</S.ErrorMessage>
            )}
          </S.FormFiled>
          <S.FormFiled>
            <S.Label>이메일</S.Label>
            <OutlineInputField
              placeholder='이메일을 입력하세요.'
              {...register('email', {
                required: '이메일을 입력하세요.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '올바른 이메일 형식이 아닙니다. 예: example@email.com',
                },
              })}
            />
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.FormFiled>
        </S.UserInfoWrapper>
        <S.QuestionWrapper>
          {questions.map((field, index) => (
            <S.ChoiceFormFiled key={field.questionNum}>
              <S.Label>{field.question}</S.Label>

              {field.questionType === QuestionType.TIME_SLOT &&
                field.timeSlotOption?.map((option, idx) => (
                  <InterviewSchedule
                    key={idx}
                    availableTime={option.availableTime}
                    date={option.date}
                  />
                ))}

              {field.questionType === QuestionType.CHECKBOX &&
                field.optionList?.map((option, optIndex) => (
                  <S.Label key={optIndex}>
                    <S.OptionInput
                      type='checkbox'
                      value={option}
                      {...register(`answers.${index}`)}
                    />
                    {option}
                  </S.Label>
                ))}

              {field.questionType === QuestionType.RADIO &&
                field.optionList?.map((option, optIndex) => (
                  <S.Label key={optIndex}>
                    <S.OptionInput type='radio' value={option} {...register(`answers.${index}`)} />
                    {option}
                  </S.Label>
                ))}

              {field.questionType === QuestionType.TEXT && (
                <OutlineTextareaField
                  placeholder='1000자 미만으로 입력하세요.'
                  {...register(`answers.${index}`)}
                />
              )}
            </S.ChoiceFormFiled>
          ))}
        </S.QuestionWrapper>

        <Button type='submit'>{isSubmitting ? '제출중...' : '제출하기'}</Button>
        {/* 제출 완료 후 toast 알림 적용 부분*/}
        {isSubmitSuccessful && <span>제출 성공!</span>}
      </S.FormContainer>
    </form>
  );
};
