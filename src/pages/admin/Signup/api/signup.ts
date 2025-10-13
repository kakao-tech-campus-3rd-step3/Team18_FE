import type { SignupFormInputs } from '../type/signup';

export const postSignupForm = async (formData: SignupFormInputs): Promise<SignupFormInputs> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/auth/register`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error('회원 가입 양식을 제출하지 못했습니다.');
  return await response.json();
};
