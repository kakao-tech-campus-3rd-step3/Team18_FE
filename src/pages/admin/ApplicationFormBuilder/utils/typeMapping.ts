import type { QuestionType } from '../types/fieldType';

export const typeMapping: Record<QuestionType, 'TEXT' | 'RADIO' | 'CHECKBOX'> = {
  서술형: 'TEXT',
  '1개 선택': 'RADIO',
  '복수 선택': 'CHECKBOX',
};

export const reverseTypeMapping: Record<'TEXT' | 'RADIO' | 'CHECKBOX', QuestionType> = {
  TEXT: '서술형',
  RADIO: '1개 선택',
  CHECKBOX: '복수 선택',
};
