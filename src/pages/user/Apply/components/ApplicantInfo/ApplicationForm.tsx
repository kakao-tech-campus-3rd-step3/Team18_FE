import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import Input from './Input';

type FormInputs = {
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
};

export const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const onSubmit = (data: FormInputs) => {
    alert(`Name: ${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <FormFiled>
          <Label>이름</Label>
          <Input
            type='text'
            placeholder='이름을 입력하세요.'
            width='12rem'
            {...register('name', { required: true })}
          />
          {errors.name && <span>이름을 입력하세요</span>}
        </FormFiled>
        <FormFiled>
          <Label>학번</Label>
          <Input
            type='text'
            width='12rem'
            placeholder='학번을 입력하세요.'
            {...register('studentId', {
              required: '학번을 입력하세요.',
              maxLength: { value: 6, message: '학번은 최대 6자리까지 입력 가능합니다.' },
            })}
          />
          {<span>{errors.studentId?.message}</span>}
        </FormFiled>
        <FormFiled>
          <Label>학과</Label>
          <Input
            type='text'
            placeholder='학과를 입력하세요.'
            width='12rem'
            {...register('department', { required: '학과를 입력하세요.' })}
          />
          {<span>{errors.department?.message}</span>}
        </FormFiled>
        <FormFiled>
          <Label>전화번호</Label>
          <Input
            type='text'
            placeholder='010-0000-0000'
            width='24rem'
            {...register('phoneNumber', {
              required: '전화번호를 입력하세요.',
              pattern: {
                value: /^\d{2,3}-\d{3,4}-\d{4}$/,
                message: '올바른 전화번호 형식이 아닙니다.',
              },
            })}
          />
          {errors.phoneNumber?.message && <span>{errors.phoneNumber.message}</span>}
        </FormFiled>
        <FormFiled>
          <Label>이메일</Label>
          <Input
            type='text'
            placeholder='이메일을 입력하세요.'
            width='24rem'
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '올바른 이메일 형식이 아닙니다. 예: example@gmail.com',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </FormFiled>
      </UserInfoWrapper>
      <button type='submit'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      {isSubmitSuccessful && <span>Form submitted successfully!</span>}
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
  fontWeight: theme.font.weight.medium,
}));
