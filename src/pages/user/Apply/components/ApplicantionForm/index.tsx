import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { FormInputs, Question } from '@/pages/user/Apply/type/apply';
import { Button } from '@/shared/components/Button';
import { OptionInput } from './index.styled';
import { useParams } from 'react-router-dom';
import { postApplicationForm } from '@/pages/user/Apply/api/apply';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';

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
      <FormContainer>
        <UserInfoWrapper>
          <FormFiled>
            <Label>이름</Label>
            <OutlineInputField
              placeholder='이름을 입력하세요.'
              {...register('name', { required: true })}
            />
            {errors.name && <ErrorMessage>이름을 입력하세요</ErrorMessage>}
          </FormFiled>
          <FormFiled>
            <Label>학번</Label>
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
            {<ErrorMessage>{errors.studentId?.message}</ErrorMessage>}
          </FormFiled>
          <FormFiled>
            <Label>학과</Label>
            <OutlineInputField
              placeholder='학과를 입력하세요.'
              {...register('department', { required: '학과를 입력하세요.' })}
            />
            {<ErrorMessage>{errors.department?.message}</ErrorMessage>}
          </FormFiled>
          <FormFiled>
            <Label>전화번호</Label>
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
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </FormFiled>
          <FormFiled>
            <Label>이메일</Label>
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
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormFiled>
        </UserInfoWrapper>
        <QuestionWrapper>
          {questions.map((field, index) => (
            <ChoiceFormFiled key={field.questionNum}>
              <Label>{field.question}</Label>

              {field.questionType === 'CHECKBOX' &&
                field.optionList?.map((option, optIndex) => (
                  <Label key={optIndex}>
                    <OptionInput type='checkbox' value={option} {...register(`answers.${index}`)} />
                    {option}
                  </Label>
                ))}

              {field.questionType === 'RADIO' &&
                field.optionList?.map((option, optIndex) => (
                  <Label key={optIndex}>
                    <OptionInput type='radio' value={option} {...register(`answers.${index}`)} />
                    {option}
                  </Label>
                ))}

              {field.questionType === 'TEXT' && (
                <OutlineTextareaField
                  placeholder='1000자 미만으로 입력하세요.'
                  {...register(`answers.${index}`)}
                />
              )}
            </ChoiceFormFiled>
          ))}
        </QuestionWrapper>

        <Button type='submit'>{isSubmitting ? '제출중...' : '제출하기'}</Button>
        {/* 제출 완료 후 toast 알림 적용 부분*/}
        {isSubmitSuccessful && <span>제출 성공!</span>}
      </FormContainer>
    </form>
  );
};

const UserInfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 60,
  padding: 40,
  border: `1px none ${theme.colors.gray200}`,
  borderRadius: '1rem',
  boxShadow: theme.shadow.md,
});

const FormFiled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

const Label = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: theme.font.weight.medium,
}));

const QuestionWrapper = styled.div({
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 60,
  padding: 40,
  border: `1px none ${theme.colors.gray200}`,
  borderRadius: '1rem',
  boxShadow: theme.shadow.md,
});

const ChoiceFormFiled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 40,
  gap: 10,
  border: `1px none ${theme.colors.gray200}`,
  borderRadius: '1rem',
  boxShadow: theme.shadow.md,
});

const FormContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  alignItems: 'center',
});

const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.colors.warning,
  fontSize: theme.font.size.xs,
  padding: 0,
}));
