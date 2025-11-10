import { useForm } from 'react-hook-form';
import { Button } from '@/shared/components/Button';
import { UnderlineTextareaField } from '@/shared/components/Form/TextAreaField/UnderlineTextareaField';
import * as S from './CommentItem.styles';
import type { CommentFormData } from '@/pages/admin/ApplicationDetail/types/comments';

type CommentEditFormProps = {
  content: string;
  onSave: (data: Pick<CommentFormData, 'content'>) => void;
  onCancel: () => void;
};

export const CommentEditForm = ({ content, onSave, onCancel }: CommentEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Pick<CommentFormData, 'content'>>({
    defaultValues: {
      content,
    },
  });

  const handleCancel = () => {
    reset({ content });
    onCancel();
  };

  return (
    <S.EditMode onSubmit={handleSubmit(onSave)}>
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
