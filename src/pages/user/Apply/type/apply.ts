import type { QuestionTypes } from '../constant/questionType';

export type Question =
  | {
      questionNum: number;
      questionType: normalQuestionType;
      question: string;
      required: boolean;
      optionList?: string[];
    }
  | {
      questionNum: number;
      questionType: ScheduleQuestionType;
      question: string;
      required: boolean;
      timeSlotOption?: interviewSchedule[];
    };

export type AvailableTime = {
  start: string;
  end: string;
};

export type interviewSchedule = {
  date: string;
  availableTime: AvailableTime;
};

export type ApplicationForm = {
  title: string;
  description: string;
  questions: Question[];
};

export type ApplicationFormRequest = {
  email: string;
  name: string;
  studentId: number;
  phoneNumber: string;
  department: string;
  answers: {
    questionNum: number;
    question: string;
    answer: string;
  }[];
};

export type FormInputs = {
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  answers: { answer: string | string[] }[];
  questions: string[];
};

export type QuestionType = (typeof QuestionTypes)[keyof typeof QuestionTypes];

export type normalQuestionType = Omit<QuestionType, 'TIME_SLOT'>;
export type ScheduleQuestionType = Extract<QuestionType, 'TIME_SLOT'>;
