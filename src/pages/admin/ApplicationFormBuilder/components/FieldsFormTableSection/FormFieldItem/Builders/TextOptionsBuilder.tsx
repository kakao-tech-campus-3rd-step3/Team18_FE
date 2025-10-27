import styled from '@emotion/styled';
import { useState } from 'react';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';

export const TextOptionsBuilder = () => {
  const [placeholder, setPlaceholder] = useState('');

  return (
    <Layout>
      <OutlineTextareaField
        placeholder='텍스트를 작성해주세요.'
        value={placeholder}
        onChange={(e) => setPlaceholder(e.target.value)}
      />
    </Layout>
  );
};

const Layout = styled.div`
  width: 97%;
`;
