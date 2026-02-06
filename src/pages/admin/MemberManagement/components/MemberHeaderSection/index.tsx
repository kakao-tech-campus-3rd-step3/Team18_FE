import { FiSearch } from 'react-icons/fi';
import { Dropdown } from '@/shared/components/Dropdown';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';
import type { SortOption } from '../../types/member';

type Props = {
  clubName: string;
  searchText: string;
  sortBy: SortOption;
  onSearchChange: (text: string) => void;
  onSortChange: (sort: SortOption) => void;
  onAddMember: () => void;
  onBulkUpload: () => void;
};

const SORT_OPTIONS: SortOption[] = ['이름순', '등록순'];

export const MemberHeaderSection = ({
  clubName,
  searchText,
  sortBy,
  onSearchChange,
  onSortChange,
  onAddMember,
  onBulkUpload,
}: Props) => {
  return (
    <S.Header>
      <S.LeftGroup>
        <Text size='xl' weight='medium'>
          {clubName} 회원 명단
        </Text>
        <S.AddButton onClick={onAddMember}>단건 추가</S.AddButton>
        <S.AddButton onClick={onBulkUpload}>엑셀로 일괄 등록</S.AddButton>
      </S.LeftGroup>

      <S.RightGroup>
        <S.SearchInputWrapper>
          <S.SearchIcon>
            <FiSearch />
          </S.SearchIcon>
          <S.SearchInput
            type='text'
            placeholder='검색'
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </S.SearchInputWrapper>

        <Dropdown
          value={sortBy}
          options={SORT_OPTIONS}
          placeholder='정렬 기준'
          onSelect={onSortChange}
        />
      </S.RightGroup>
    </S.Header>
  );
};
