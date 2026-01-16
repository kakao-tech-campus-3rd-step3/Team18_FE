import type { QuestionType } from '../types/fieldType';

export const typeMapping: Record<QuestionType, 'TEXT' | 'RADIO' | 'CHECKBOX'> = {
  텍스트: 'TEXT',
  라디오: 'RADIO',
  체크박스: 'CHECKBOX',
};

export const reverseTypeMapping: Record<'TEXT' | 'RADIO' | 'CHECKBOX', QuestionType> = {
  TEXT: '텍스트',
  RADIO: '라디오',
  CHECKBOX: '체크박스',
};
