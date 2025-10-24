import styled from '@emotion/styled';
import { useState } from 'react';
import { Text } from '@/shared/components/Text';

export type Props = {
  options: Array<'텍스트' | '라디오' | '체크박스' | '타임슬롯'>;
};

export const FieldTypeSelector = ({ options }: Props) => {
  const [currentValue, setCurrentValue] = useState('텍스트');
  const [isShowOptions, setIsShowOptions] = useState(false);

  return (
    <>
      <SelectBox
        onClick={() => {
          setIsShowOptions(!isShowOptions);
        }}
      >
        <Text color='#757575'>{currentValue}</Text>
        {isShowOptions && (
          <SelectOptions>
            {options.map((option, index) => (
              <Option
                key={index}
                onClick={() => setCurrentValue(option)}
                selected={currentValue === option}
              >
                {option}
              </Option>
            ))}
          </SelectOptions>
        )}
      </SelectBox>
    </>
  );
};

const SelectBox = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '13rem',
  height: '1.4rem',
  padding: '10px',
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bg,
  alignSelf: 'center',
  border: `1px solid ${theme.colors.gray200}`,
  cursor: 'pointer',

  '&::before': {
    content: '"⌵"',
    position: 'absolute',
    top: '6px',
    right: '13px',
    color: theme.colors.textSecondary,
    fontSize: '22px',
    fontWeight: 'bold',
  },
}));

const SelectOptions = styled.ul(({ theme }) => ({
  padding: '0.5rem',
  position: 'absolute',
  top: '50px',
  left: '0',
  width: '90%',
  maxHeight: '12.5rem',
  overflowY: 'auto',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.md,
  backgroundColor: `${theme.colors.bg}`,
}));

const Option = styled.li<{ selected: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.colors.primary : theme.colors.textSecondary,
  padding: '0.625rem',
  transition: 'background-color 0.2s ease-in',

  '&:hover': {
    borderRadius: theme.radius.md,
    background: theme.colors.gray100,
  },
}));
