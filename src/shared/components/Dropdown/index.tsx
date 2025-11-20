import { useState, useEffect, useRef } from 'react';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

type Props<T extends string> = {
  value?: T;
  options: T[];
  placeholder?: string;
  onSelect: (value: T) => void;
  disabled?: boolean;
};

export const Dropdown = <T extends string>({
  value,
  options,
  placeholder,
  onSelect,
  disabled = false,
}: Props<T>) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShowOptions(false);
      }
    };

    if (isShowOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowOptions]);

  const handleToggleOptions = () => {
    if (!disabled) {
      setIsShowOptions(!isShowOptions);
    }
  };

  const handleSelectOption = (option: T) => {
    onSelect(option);
    setIsShowOptions(false);
  };

  return (
    <S.DropdownWrapper ref={dropdownRef}>
      <S.SelectBox onClick={handleToggleOptions} disabled={disabled}>
        <Text color='#757575'>{value || placeholder}</Text>
        {isShowOptions && (
          <S.SelectOptions>
            {options.map((option, index) => (
              <S.Option
                key={index}
                onClick={() => handleSelectOption(option)}
                selected={value === option}
              >
                {option}
              </S.Option>
            ))}
          </S.SelectOptions>
        )}
      </S.SelectBox>
    </S.DropdownWrapper>
  );
};
