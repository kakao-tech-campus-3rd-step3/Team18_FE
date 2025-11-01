export type QuestionType = '텍스트' | '라디오' | '체크박스' | '타임슬롯';

type TimeSlotOption = {
  date: string;
  availableTime: {
    start: string;
    end: string;
  };
};

export type Question = {
  questionNum: number;
  fieldType: 'RADIO' | 'TEXT' | 'TIME_SLOT' | 'CHECKBOX';
  question: string;
  isRequired: boolean;
  optionList?: { value: string }[];
  timeSlotOptions?: TimeSlotOption;
};

export type ApplicationForm = {
  title: string;
  description: string;
  recruitDate: string;
  formQuestions: Question[];
};
