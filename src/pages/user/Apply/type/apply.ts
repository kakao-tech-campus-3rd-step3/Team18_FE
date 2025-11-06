import type { QuestionTypes } from '../constants/questionType';

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
      timeSlotOptions: InterviewSchedule[];
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
  value?: SelectedInterviewValue | null;
  onChange?: (value: SelectedInterviewValue) => void;
};

export type SelectedInterviewValue = {
  date: string;
  selectedTimes: string[];
};

export type ApplicationForm = {
  title: string;
  description: string;
  formQuestions: Question[];
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
  selectedInterviewSchedule: PostInterviewSchedule[];
  answers: Answer[];
};

export type Answer = {
  value: string | SelectedInterviewValue | null;
  questionType: (typeof QuestionTypes)[keyof typeof QuestionTypes];
};

export type DragState = {
  startIndex: number;
  lastHoveredIndex: number;
  currentSelectedIndex: number;
  isSelectionMode: boolean;
  isSelectedStates: boolean[];
  isMouseDown: boolean;
  isDragging: boolean;
  previousIndexDiffSign: null | number;
};

export type DragAction =
  | { type: 'mouseDown'; index: number; isSelectionMode: boolean }
  | { type: 'mouseMove'; index: number; indexDiffSign: number }
  | { type: 'mouseUp' };
