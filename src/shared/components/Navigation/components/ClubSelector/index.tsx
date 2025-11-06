import { useState } from 'react';
import { useClubList } from '@/shared/components/Navigation/hooks/useClubList';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

export const ClubSelector = () => {
  const { clubs, selectedClub, handleSelectClub } = useClubList();
  const [isOpen, setIsOpen] = useState(false);

  if (!clubs || clubs.length === 0) {
    return (
      <S.EmptyWrapper>
        <Text size='sm' color='#bbbbbb'>
          동아리 없음
        </Text>
      </S.EmptyWrapper>
    );
  }

  const hasMultiple = clubs.length > 1;

  return (
    <S.Wrapper>
      <S.Selected onClick={() => hasMultiple && setIsOpen((prev) => !prev)}>
        <span>{selectedClub?.clubName}</span>
        {hasMultiple && <S.ChevronDownIcon size={24} />}
      </S.Selected>

      {isOpen && hasMultiple && (
        <S.DropdownMenu>
          {clubs.map((club) => (
            <S.DropdownItem
              key={club.clubId}
              onClick={() => {
                handleSelectClub(club);
                setIsOpen(false);
              }}
              selected={club.clubId === selectedClub?.clubId}
            >
              {club.clubName}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.Wrapper>
  );
};
