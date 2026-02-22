import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { toast } from '@/shared/utils/toast';

type EditableCellProps = {
  value: string;
  maxWidth?: string;
  onSave: (newValue: string) => void;
};

const InputWrapper = styled.div<{ maxWidth?: string }>(({ maxWidth }) => ({
  width: '100%',
  maxWidth: maxWidth ?? '100%',
  margin: '0 auto',
}));

const CellContent = styled.div(({ theme }) => ({
  cursor: 'pointer',
  padding: '0.5rem',
  borderRadius: theme.radius.sm,
  transition: 'background-color 0.2s',
  minHeight: '29px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: theme.colors.gray00,
  },
}));

export const EditableCell = ({ value, maxWidth, onSave }: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  useEffect(() => {
    if (!isEditing) {
      setEditValue(value);
    }
  }, [value, isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = editValue.trim();

    if (trimmed === '') {
      toast.error('빈 값은 입력할 수 없습니다.');
      setEditValue(value);
      setIsEditing(false);
      return;
    }

    if (trimmed !== value.trim()) {
      onSave(trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <InputWrapper maxWidth={maxWidth}>
        <UnderlineInputField
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </InputWrapper>
    );
  }

  return <CellContent onClick={handleClick}>{value}</CellContent>;
};
