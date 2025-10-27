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
  questionType: 'RADIO' | 'TEXT' | 'TIME_SLOT' | 'CHECKBOX';
  question: string;
  required: boolean;
  optionList?: string[];
  timeSlotOptions?: TimeSlotOption[];
};

export type ApplicationForm = {
  title: string;
  description: string;
  recruitDate: string;
  questions: Question[];
};
