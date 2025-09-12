import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';

type Props = {
  questionsAndAnswers: {
    question: string;
    answer: string;
  }[];
};

export const ApplicantQuestionSection = ({ questionsAndAnswers }: Props) => {
  console.log(questionsAndAnswers);
  return (
    <Wrapper>
      {questionsAndAnswers.map((item, index) => {
        return (
          <QuestionWrapper key={index}>
            <QuestionText>
              <Text weight='bold' size='sm'>{`${index + 1}.  ${item.question}`}</Text>
            </QuestionText>
            <AnswerText>
              <Text size='sm'>{item.answer}</Text>
            </AnswerText>
          </QuestionWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.lg,
  padding: '32px',
  backgroundColor: 'white',
}));

const QuestionWrapper = styled.div(({ theme }) => ({
  marginBottom: '40px',
  '&:last-child': {
    marginBottom: 0,
  },
}));

const QuestionText = styled.div(({ theme }) => ({
  marginBottom: '16px',
  lineHeight: '1.6',
}));

const AnswerText = styled.div(({ theme }) => ({
  paddingLeft: '24px',
  lineHeight: '1.8',
  color: theme.colors.gray700,
}));
