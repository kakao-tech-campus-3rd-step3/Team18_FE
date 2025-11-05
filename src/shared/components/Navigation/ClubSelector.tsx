import styled from '@emotion/styled';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useClubList } from './hooks/useClubList';

export const ClubSelector = () => {
  const { clubs, selectedClub, handleSelectClub } = useClubList();
  const [isOpen, setIsOpen] = useState(false);

  if (!clubs || clubs.length === 0) return null;
  const hasMultiple = clubs.length > 1;

  return (
    <Wrapper>
      <Selected onClick={() => hasMultiple && setIsOpen((prev) => !prev)}>
        <span>{selectedClub?.clubName}</span>
        {hasMultiple && <FiChevronDown size={16} />}
      </Selected>

      {isOpen && hasMultiple && (
        <DropdownMenu>
          {clubs.map((club) => (
            <DropdownItem
              key={club.clubId}
              onClick={() => {
                handleSelectClub(club);
                setIsOpen(false);
              }}
              selected={club.clubId === selectedClub?.clubId}
            >
              {club.clubName}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Wrapper>
  );
};

//todo: 에러 해결 하면 테마적용
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  min-width: 120px;
  z-index: 10;
`;

const DropdownItem = styled.li<{ selected?: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#f3f3f3' : 'white')};
  &:hover {
    background-color: #f5f5f5;
  }
`;
