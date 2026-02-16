import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { MemberHeaderSection } from './components/MemberHeaderSection';
import { MemberTableSection } from './components/MemberTableSection';
import { useMemberFilter } from './hooks/useMemberFilter';
import { useMemberMutations } from './hooks/useMemberMutations';
import * as S from './index.styled';
import type { Member } from './types/member';

// TODO: API 연동 시 삭제
const MOCK_MEMBERS: Member[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `홍길동${i + 1}`,
  studentId: `2026${String(i + 1).padStart(2, '0')}`,
  department: '영어영문학과',
  phoneNumber: '010-1234-5678',
  role: ['회장단', '운영팀', '동아리원'][i % 3] as Member['role'],
  joinDate: `2026-${String((i % 12) + 1).padStart(2, '0')}`,
}));

export const MemberManagementPage = () => {
  const { clubId } = useParams<{ clubId: string }>();

  // TODO: API 연동
  // const { data: members = [], isLoading, error } = useQuery({
  //   queryKey: ['members', clubId],
  //   queryFn: () => fetchMembers(clubId!),
  //   enabled: !!clubId,
  // });
  const members = MOCK_MEMBERS;
  const isLoading = false;
  const error = null;

  const { searchText, sortBy, filteredMembers, setSearchText, setSortBy } =
    useMemberFilter(members);

  const { handleRoleChange, handleDeleteMember, handleMemberUpdate } = useMemberMutations(
    clubId || '',
  );

  const handleAddMember = () => {
    // TODO: 단건 추가 모달 열기
    console.log('단건 추가 모달 열기');
  };

  const handleBulkUpload = () => {
    // TODO: 엑셀 업로드 모달 열기
    console.log('엑셀 업로드 모달 열기');
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러 발생</div>;

  return (
    <S.Container>
      <S.ContentWrapper>
        <MemberHeaderSection
          clubName='인터엑스'
          searchText={searchText}
          sortBy={sortBy}
          onSearchChange={setSearchText}
          onSortChange={setSortBy}
          onAddMember={handleAddMember}
          onBulkUpload={handleBulkUpload}
        />

        <MemberTableSection
          members={filteredMembers}
          onRoleChange={handleRoleChange}
          onDelete={handleDeleteMember}
          onMemberUpdate={handleMemberUpdate}
        />
      </S.ContentWrapper>
    </S.Container>
  );
};
