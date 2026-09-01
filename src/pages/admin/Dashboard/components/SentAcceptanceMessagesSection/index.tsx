import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSentMessage } from '@/pages/admin/Dashboard/hooks/useSentMessage';
import { CHANNEL_LABEL } from '@/pages/admin/Dashboard/utils/labelMap';
import { Button } from '@/shared/components/Button';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';
import type {
  ApplicationStage,
  NotificationChannel,
} from '@/pages/admin/Dashboard/types/dashboard';

interface SentAcceptanceMessagesSectionProps {
  stage: ApplicationStage;
}

type FormValues = {
  acceptanceMessage: string;
  channels: NotificationChannel[];
};

export const MESSAGE_MAX_LENGTH = 800;
export const CHANNEL_REQUIRED_MESSAGE = '알림 채널을 하나 이상 선택해주세요.';
export const SMS_NOTICE = '문자는 한 번에 최대 50명까지 발송할 수 있습니다.';

const CHANNEL_OPTIONS = Object.keys(CHANNEL_LABEL) as NotificationChannel[];

export const SentAcceptanceMessagesSection = ({ stage }: SentAcceptanceMessagesSectionProps) => {
  const { clubId } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { acceptanceMessage: '', channels: ['EMAIL'] },
  });

  const { mutate: sendMessage, isLoading } = useSentMessage(Number(clubId), stage);

  const selectedChannels = watch('channels');
  const isSmsSelected = selectedChannels.includes('SMS');

  const handleSubmitMessage = (data: FormValues) => {
    sendMessage({ message: data.acceptanceMessage, channels: data.channels });
  };

  return (
    <S.Container>
      <Text size='lg'>합격자에게 전송될 메세지</Text>
      <OutlineTextareaField
        placeholder='결과 전송하기를 누르면 합격자에게 이 메세지가 전달됩니다. 차후 면접이 있거나 오픈채팅 주소가 있는 경우 전달할 수 있습니다.'
        {...register('acceptanceMessage', {
          required: '메시지를 입력해주세요.',
          minLength: { value: 1, message: '메시지를 입력해주세요.' },
          maxLength: {
            value: MESSAGE_MAX_LENGTH,
            message: `메시지는 ${MESSAGE_MAX_LENGTH}자 이내로 입력해주세요.`,
          },
        })}
        invalid={!!errors.acceptanceMessage}
        message={errors.acceptanceMessage?.message}
        disabled={isLoading}
      />

      <S.ChannelField disabled={isLoading}>
        <S.ChannelLegend>알림 채널</S.ChannelLegend>
        <S.ChannelOptions>
          {CHANNEL_OPTIONS.map((channel) => (
            <S.ChannelLabel key={channel} disabled={isLoading}>
              <S.ChannelCheckbox
                type='checkbox'
                value={channel}
                {...register('channels', {
                  validate: (value) => value.length > 0 || CHANNEL_REQUIRED_MESSAGE,
                })}
              />
              {CHANNEL_LABEL[channel]}
            </S.ChannelLabel>
          ))}
        </S.ChannelOptions>
        {errors.channels && <S.HelperText tone='error'>{errors.channels.message}</S.HelperText>}
        {isSmsSelected && <S.HelperText>{SMS_NOTICE}</S.HelperText>}
      </S.ChannelField>

      <S.ButtonWrapper>
        <Button width={'15rem'} onClick={handleSubmit(handleSubmitMessage)} disabled={isLoading}>
          결과 전송하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
