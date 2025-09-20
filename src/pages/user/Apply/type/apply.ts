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
