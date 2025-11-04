import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { postSignupForm, type RegisterSuccessResponse } from '@/pages/admin/Signup/api/signup';
import * as S from '@/pages/admin/Signup/components/SignupForm/index.styled';
import { useAuth } from '@/providers/auth';
import { getTemporaryToken, removeTemporaryToken } from '@/shared/auth/token';
import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { theme } from '@/styles/theme';
import type { SignupFormInputs } from '@/pages/admin/Signup/type/signup';

export const SignupForm = () => {
  const navigate = useNavigate();
  const { completeSignup } = useAuth();
  const methods = useForm<SignupFormInputs>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      studentId: '',
      department: '',
      phoneNumber: '',
    },
  });
  const { errors, isSubmitting } = methods.formState;

  const onSubmit = async (signupFormValue: SignupFormInputs) => {
    const temporaryToken = getTemporaryToken();

    if (!temporaryToken) {
      toast.error('회원가입을 위한 토큰이 존재하지 않습니다.');
      return;
    }

    try {
      const response: RegisterSuccessResponse = await postSignupForm(
        signupFormValue,
        temporaryToken,
      );

      completeSignup(response.accessToken);
      toast.success('회원가입 완료!', {
        style: { backgroundColor: theme.colors.primary, color: 'white' },
        duration: 1000,
        onAutoClose: () => navigate('/'),
      });
      removeTemporaryToken();
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message, {
          duration: 1000,
          style: {
            backgroundColor: 'white',
            color: theme.colors.error,
          },
        });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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

            <S.FormField>
              <S.Label>이메일</S.Label>
              <OutlineInputField
                placeholder='이메일을 입력하세요.'
                {...methods.register('email', {
                  required: '이메일을 입력하세요.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                })}
                invalid={!!errors.email}
                message={errors.email?.message}
              />
            </S.FormField>

            <S.FormRow>
              <S.FormField>
                <S.Label>학번</S.Label>
                <OutlineInputField
                  placeholder='학번을 입력하세요.'
                  {...methods.register('studentId', {
                    required: '학번을 입력하세요.',
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
          </S.UserInfoWrapper>
          <Button type='submit'>{isSubmitting ? '제출중...' : '회원가입'}</Button>
        </S.FormContainer>
      </form>
    </FormProvider>
  );
};
