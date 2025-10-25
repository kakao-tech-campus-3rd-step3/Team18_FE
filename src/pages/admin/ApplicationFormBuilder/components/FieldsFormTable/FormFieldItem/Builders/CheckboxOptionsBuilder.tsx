import styled from '@emotion/styled';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { IoCheckboxOutline } from 'react-icons/io5';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { Text } from '@/shared/components/Text';

export const CheckboxOptionsBuilder = () => {
  const [options, setOptions] = useState('옵션');

  return (
    <Layput>
      <OptionFieldWrapper>
        <CheckboxIcon />
        <OutlineInputField
          value={options}
          placeholder='옵션'
          onChange={(e) => setOptions(e.target.value)}
        />
        <AiOutlineCloseCircle size={'1.5rem'} color='#757575' />
      </OptionFieldWrapper>
      <AddOptionButton>
        <FiPlus /> <Text size='sm'>옵션 추가</Text>
      </AddOptionButton>
    </Layput>
  );
};

const Layput = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const OptionFieldWrapper = styled.div({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

const CheckboxIcon = styled(IoCheckboxOutline)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

const AddOptionButton = styled.div(({ theme }) => ({
  marginTop: '1rem',
  backgroundColor: theme.colors.gray100,
  padding: '0.4rem',
  width: '5.8rem',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
}));
