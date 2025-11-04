import type { QuestionType } from '../types/fieldType';

export const typeMapping: Record<QuestionType, 'TEXT' | 'RADIO' | 'CHECKBOX' | 'TIME_SLOT'> = {
  텍스트: 'TEXT',
  라디오: 'RADIO',
  체크박스: 'CHECKBOX',
  타임슬롯: 'TIME_SLOT',
};

export const reverseTypeMapping: Record<'TEXT' | 'RADIO' | 'CHECKBOX' | 'TIME_SLOT', QuestionType> =
  {
    TEXT: '텍스트',
    RADIO: '라디오',
    CHECKBOX: '체크박스',
    TIME_SLOT: '타임슬롯',
  };
