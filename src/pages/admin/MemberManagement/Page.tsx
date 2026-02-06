import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Dropdown } from '@/shared/components/Dropdown';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { Text } from '@/shared/components/Text';
import { MemberTable } from './components/MemberTableSection';
import * as S from './index.styled';

// TODO: API 연동 시 실제 데이터로 교체
const MOCK_MEMBERS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: '홍길동',
  generation: '2기',
  department: '영어영문학과',
  phoneNumber: '010-1234-5678',
  role: ['회장단', '운영팀', '동아리원'][i % 3] as '회장단' | '운영팀' | '동아리원',
}));

const SORT_OPTIONS = ['이름순', '기수순'] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

export const MemberManagementPage = () => {
  //   const { clubId } = useParams<{ clubId: string }>();
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('이름순');

  // TODO: API 연동
  const clubName = '인터렉스'; // 실제로는 club 정보에서 가져와야 함
  const isLoading = false;
  const error = null;

  // 검색 및 정렬 로직
  const filteredMembers = MOCK_MEMBERS.filter(
    (member) =>
      member.name.includes(searchText) ||
      member.generation.includes(searchText) ||
      member.department.includes(searchText),
  );

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortBy === '이름순') {
      return a.name.localeCompare(b.name, 'ko');
    }
    return a.generation.localeCompare(b.generation);
  });

  const handleAddMember = () => {
    // TODO: 단건 추가 모달 열기
    console.log('단건 추가 모달 열기');
  };

  const handleBulkUpload = () => {
    // TODO: 엑셀 업로드 모달 열기
    console.log('엑셀 업로드 모달 열기');
  };

  const handleRoleChange = (memberId: number, newRole: string) => {
    // TODO: 역할 변경 API 호출
    console.log(`회원 ${memberId}의 역할을 ${newRole}로 변경`);
  };

  const handleDeleteMember = (memberId: number) => {
    // TODO: 삭제 확인 모달 + API 호출
    console.log(`회원 ${memberId} 삭제`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Header>
          <Text size='xl' weight='medium'>
            {clubName} 회원 명단
          </Text>
          <S.ActionGroup>
            <S.AddButton onClick={handleAddMember}>단건 추가</S.AddButton>
            <S.AddButton onClick={handleBulkUpload}>엑셀로 일괄 등록</S.AddButton>
          </S.ActionGroup>
          <S.ControlGroup>
            <S.SearchWrapper>
              <S.SearchInput
                type='text'
                placeholder='검색'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <S.SearchIcon>🔍</S.SearchIcon>
            </S.SearchWrapper>
            <Dropdown
              value={sortBy}
              options={[...SORT_OPTIONS]}
              placeholder='정렬 기준'
              onSelect={setSortBy}
            />
          </S.ControlGroup>
        </S.Header>

        <MemberTable
          members={sortedMembers}
          onRoleChange={handleRoleChange}
          onDelete={handleDeleteMember}
        />
      </S.ContentWrapper>
    </S.Container>
  );
};
