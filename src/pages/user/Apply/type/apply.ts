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
      timeSlotOption?: InterviewSchedule[];
    };

type normalQuestionType = 'CHECKBOX' | 'RADIO' | 'TEXT';
type ScheduleQuestionType = 'TIME_SLOT';

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
