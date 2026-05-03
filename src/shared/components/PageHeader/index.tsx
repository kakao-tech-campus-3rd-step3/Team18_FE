import { FaInstagram } from 'react-icons/fa';
import { GuideIconButton } from '@/shared/components/GuideIconButton';
import { engToKorCategory } from '@/shared/utils/formatting';
import * as S from './index.styled';
import type { ClubCategoryEng } from '@/shared/types/club';

type Props = {
  clubName: string;
  category?: ClubCategoryEng;
  instagramUrl?: string;
  clubId?: number;
  onOpenGuide?: () => void;
};

export const PageHeader = ({ clubName, category, instagramUrl, clubId, onOpenGuide }: Props) => {
  const korCategory = category && engToKorCategory[category];

  return (
    <S.Container>
      <S.TitleRow>
        <S.TitleGroup>
          <S.Title>{clubName}</S.Title>
          {onOpenGuide && <GuideIconButton onClick={onOpenGuide} />}
        </S.TitleGroup>
        {instagramUrl && (
          <S.InstagramLink
            href={instagramUrl}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => {
              window.dataLayer?.push({ event: 'club_instagram_click', clubId, clubName });
            }}
          >
            <FaInstagram />
          </S.InstagramLink>
        )}
      </S.TitleRow>
      <S.Category>{korCategory}</S.Category>
    </S.Container>
  );
};
