import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useModal } from '@/shared/hooks/useModal';
import { MemberHeaderSection } from './components/MemberHeaderSection';
import { MemberTableSection } from './components/MemberTableSection';
import { AddMemberModal } from './components/modals/AddMemberModal';
import { BulkUploadModal } from './components/modals/BulkUploadModal';
import { DeleteConfirmModal } from './components/modals/DeleteConfirmModal';
import { useMemberFilter } from './hooks/useMemberFilter';
import { useMemberMutations } from './hooks/useMemberMutations';
import { useMembers } from './hooks/useMembers';
import * as S from './index.styled';
import type { AddMemberFormData } from './types/member';

export const MemberManagementPage = () => {
  const { clubId } = useParams<{ clubId: string }>();

  // Modal states
  const addMemberModal = useModal();
  const bulkUploadModal = useModal();
  const deleteModal = useModal();
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; name: string } | null>(null);

  const { data: members, isLoading, error } = useMembers(clubId || '');

  const { searchText, sortBy, filteredMembers, setSearchText, setSortBy } =
    useMemberFilter(members);

  const { handleRoleChange, handleMemberUpdate } = useMemberMutations(clubId || '');

  const handleDeleteMember = (memberId: number) => {
    console.log(`회원 ${memberId} 삭제`);
    // TODO: API 호출
  };

  const handleDeleteClick = (memberId: number, memberName: string) => {
    const shouldSkip = sessionStorage.getItem('skipDeleteConfirmation') === 'true';

    if (shouldSkip) {
      handleDeleteMember(memberId);
    } else {
      setDeleteTarget({ id: memberId, name: memberName });
      deleteModal.openModal();
    }
  };

  const handleAddMember = () => {
    addMemberModal.openModal();
  };

  const handleBulkUpload = () => {
    bulkUploadModal.openModal();
  };

  const handleSubmitAddMember = (data: AddMemberFormData) => {
    console.log('동아리원 추가:', data);
    // TODO: API 호출
  };

  const handleSubmitBulkUpload = (file: File) => {
    console.log('엑셀 업로드:', file);
    // TODO: API 호출
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러 발생</div>;

  return (
    <>
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
            onDelete={handleDeleteClick}
            onMemberUpdate={handleMemberUpdate}
          />
        </S.ContentWrapper>
      </S.Container>

      <AddMemberModal
        isOpen={addMemberModal.isOpen}
        onClose={addMemberModal.closeModal}
        onSubmit={handleSubmitAddMember}
      />

      <BulkUploadModal
        isOpen={bulkUploadModal.isOpen}
        onClose={bulkUploadModal.closeModal}
        onUpload={handleSubmitBulkUpload}
      />

      {deleteTarget && (
        <DeleteConfirmModal
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.closeModal}
          onConfirm={() => handleDeleteMember(deleteTarget.id)}
          memberName={deleteTarget.name}
        />
      )}
    </>
  );
};
