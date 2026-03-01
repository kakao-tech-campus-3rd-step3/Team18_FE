import { useState, useMemo } from 'react';
import type { Member, MemberRole, SortOption } from '../types/member';

const ROLE_PRIORITY: Record<MemberRole, number> = {
  회장: 0,
  운영팀: 1,
  동아리원: 2,
};

export const useMemberFilter = (members: Member[]) => {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('이름순');

  const filteredAndSortedMembers = useMemo(() => {
    // 1. 검색 필터링
    const filtered = members.filter((member) =>
      [member.name, member.studentId, member.department].some((field) =>
        field.includes(searchText),
      ),
    );

    // 2. 정렬 (역할 우선, 같은 역할 내에서 이름순/등록순)
    const sorted = [...filtered].sort((a, b) => {
      const roleDiff = ROLE_PRIORITY[a.role] - ROLE_PRIORITY[b.role];
      if (roleDiff !== 0) return roleDiff;

      if (sortBy === '이름순') {
        return a.name.localeCompare(b.name, 'ko');
      }
      return new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime();
    });

    return sorted;
  }, [members, searchText, sortBy]);

  return {
    searchText,
    sortBy,
    filteredMembers: filteredAndSortedMembers,
    setSearchText,
    setSortBy,
  };
};
