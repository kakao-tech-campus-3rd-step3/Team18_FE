export type Question = {
  questionNum: number;
  questionType: string;
  question: string;
  required: boolean;
  optionList?: string[];
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
