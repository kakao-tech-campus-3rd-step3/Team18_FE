import type { QuestionTypes } from '../constant/questionType';

export type QuestionType = (typeof QuestionTypes)[keyof typeof QuestionTypes];

export type Question =
  | {
      questionNum: number;
      questionType: typeof QuestionTypes.CHECKBOX | typeof QuestionTypes.RADIO;
      question: string;
      required: boolean;
      optionList: string[];
    }
  | {
      questionNum: number;
      questionType: typeof QuestionTypes.TIME_SLOT;
      question: string;
      required: boolean;
      timeSlotOption: InterviewSchedule[];
    }
  | {
      questionNum: number;
      questionType: typeof QuestionTypes.TEXT;
      question: string;
      required: boolean;
    };

export type AvailableTime = {
  start: string;
  end: string;
};

export type InterviewSchedule = {
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

export type PostInterviewSchedule = {
  date: string;
  selectedTimes: string[];
};

export type FormInputs = {
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  answers: object[];
  selectedInterviewSchedule: string[];
};
