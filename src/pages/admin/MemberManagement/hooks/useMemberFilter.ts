import { useState, useMemo } from 'react';
import type { Member, SortOption } from '../types/member';

export const useMemberFilter = (members: Member[]) => {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('이름순');

  const filteredAndSortedMembers = useMemo(() => {
    // 1. 검색 필터링
    const filtered = members.filter(
      (member) =>
        member.name.includes(searchText) ||
        member.generation.includes(searchText) ||
        member.department.includes(searchText),
    );

    // 2. 정렬
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === '이름순') {
        return a.name.localeCompare(b.name, 'ko');
      }
      // 등록순 (joinDate 기준)
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
