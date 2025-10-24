import { useForm, Controller } from 'react-hook-form';
import * as S from '@/pages/admin/ApplicationDetail/components/CommentSection/CommentItem.styles';
import { Button } from '@/shared/components/Button';
import { UnderlineTextareaField } from '@/shared/components/Form/TextAreaField/UnderlineTextareaField';
import { Text } from '@/shared/components/Text';
import { ApplicantStarRating } from './ApplicantStarRating';

export type CommentFormData = {
  content: string;
  rating: number;
};

type CommentEditFormProps = {
  content: string;
  rating: number;
  onSave: (data: CommentFormData) => void;
  onCancel: () => void;
};

export const CommentEditForm = ({ content, rating, onSave, onCancel }: CommentEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CommentFormData>({
    defaultValues: {
      content,
      rating,
    },
  });

  const handleCancel = () => {
    reset({ content, rating });
    onCancel();
  };

  return (
    <S.EditMode onSubmit={handleSubmit(onSave)}>
      <Controller
        name='rating'
        control={control}
        rules={{
          required: '별점을 선택해주세요.',
          min: { value: 1, message: '별점을 선택해주세요.' },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <ApplicantStarRating rating={value} onRatingChange={onChange} />
            {error && (
              <Text size='xs' color='#fa342c'>
                {error.message}
              </Text>
            )}
          </>
        )}
      />
      <UnderlineTextareaField
        {...register('content', {
          required: '댓글을 입력해주세요.',
          maxLength: { value: 500, message: '500자 이하로 입력해주세요.' },
        })}
        invalid={!!errors.content}
        message={errors.content?.message}
      />
      <S.EditButtonContainer>
        <Button type='submit'>저장</Button>
        <Button variant='outline' onClick={handleCancel}>
          취소
        </Button>
      </S.EditButtonContainer>
    </S.EditMode>
  );
};
