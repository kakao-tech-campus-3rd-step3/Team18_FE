import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { PageHeader } from '@/shared/components/PageHeader';
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

export const MemberManagementPage = () => {
  //   const { clubId } = useParams<{ clubId: string }>();
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'generation'>('name');

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
    if (sortBy === 'name') {
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
      <PageHeader clubName={clubName} category='ALL' />

      <S.ContentWrapper>
        <S.Header>
          <S.Title>{clubName} 회원 명단</S.Title>
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
            <S.SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'generation')}
            >
              <option value='name'>이름순</option>
              <option value='generation'>기수순</option>
            </S.SortSelect>
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
