import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth';
import { OnboardingPopup } from '@/shared/components/OnboardingPopup';
import { useModal } from '@/shared/hooks/useModal';
import { useOnboardingPopup } from '@/shared/hooks/useOnboardingPopup';
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
  const { user } = useAuth();

  // Modal states
  const addMemberModal = useModal();
  const bulkUploadModal = useModal();
  const deleteModal = useModal();
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; name: string } | null>(null);

  const { isOpen: isMembersPopupOpen, confirm: confirmMembersPopup } = useOnboardingPopup(
    'members',
    { triggerMode: 'pageVisit' },
  );

  const members = useMembers(clubId || '');

  const { searchText, sortBy, filteredMembers, setSearchText, setSortBy } =
    useMemberFilter(members);

  const {
    submitAddMember,
    submitBulkUpload,
    handleRoleChange,
    handleDeleteMember,
    handleMemberUpdate,
  } = useMemberMutations(clubId || '');

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
    submitAddMember(data);
  };

  const handleSubmitBulkUpload = (file: File) => {
    submitBulkUpload(file);
  };

  return (
    <>
      <OnboardingPopup
        isOpen={isMembersPopupOpen}
        images={[1, 2].map((n) => `/assets/onboarding/members/${n}.webp`)}
        imageAlt='동아리원 관리 가이드'
        title='동아리원 관리 기능 안내'
        onConfirm={confirmMembersPopup}
      />
      <S.Container>
        <S.ContentWrapper>
          <MemberHeaderSection
            clubName={user?.clubName ?? ''}
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
