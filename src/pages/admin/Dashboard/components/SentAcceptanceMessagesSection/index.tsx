import styled from '@emotion/styled';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { useForm } from 'react-hook-form';
import { useSentMessage } from '@/pages/admin/Dashboard/hooks/useSentMessage';

export const SentAcceptanceMessagesSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ acceptanceMessage: string }>({
    defaultValues: { acceptanceMessage: '' },
  });

  const { mutate: sendMessage } = useSentMessage(2);

  const handleSubmitMessage = (data: { acceptanceMessage: string }) => {
    sendMessage(data.acceptanceMessage);
  };

  return (
    <Container>
      <Text size='lg'>합격자에게 전송될 메세지</Text>
      <OutlineTextareaField
        placeholder='결과 전송하기를 누르면 합격자에게 이 메세지가 전달됩니다. 차후 면접이 있거나 오픈채팅 주소가 있는 경우 전달할 수 있습니다.'
        {...register('acceptanceMessage', {
          required: '메시지를 입력해주세요.',
          minLength: { value: 1, message: '메시지를 입력해주세요.' },
        })}
        invalid={!!errors.acceptanceMessage}
        message={errors.acceptanceMessage?.message}
      />
      <ButtonWrapper>
        <Button width={'15rem'} onClick={handleSubmit(handleSubmitMessage)}>
          결과 전송하기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div({
  margin: '3rem 1.7rem 0 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  width: '100%',
});
