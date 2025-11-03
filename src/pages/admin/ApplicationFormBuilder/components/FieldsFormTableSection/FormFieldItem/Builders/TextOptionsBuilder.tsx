import styled from '@emotion/styled';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';

export const TextOptionsBuilder = () => {
  return (
    <Layout>
      <OutlineTextareaField
        placeholder='지원자가 작성할 텍스트 창입니다. 작성하지 마세요.'
        disabled={true}
      />
    </Layout>
  );
};

const Layout = styled.div`
  width: 97%;
`;
