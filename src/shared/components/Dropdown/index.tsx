import { useState } from 'react';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

type Props<T extends string> = {
  value: T;
  options: T[];
  onSelect: (value: T) => void;
  width?: string;
};

export const Dropdown = <T extends string>({
  value,
  options,
  onSelect,
  width = '12rem',
}: Props<T>) => {
  const [isShowOptions, setIsShowOptions] = useState(false);

  return (
    <>
      <S.SelectBox
        width={width}
        onClick={() => {
          setIsShowOptions(!isShowOptions);
        }}
      >
        <Text color='#757575'>{value}</Text>
        {isShowOptions && (
          <S.SelectOptions>
            {options.map((option, index) => (
              <S.Option key={index} onClick={() => onSelect(option)} selected={value === option}>
                {option}
              </S.Option>
            ))}
          </S.SelectOptions>
        )}
      </S.SelectBox>
    </>
  );
};
