import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UI_ROLE_TO_API } from '@/pages/admin/MemberManagement/types/member';
import { addMember } from '../api/addMember';
import { bulkUploadMembers } from '../api/bulkUploadMembers';
import { deleteMember } from '../api/deleteMember';
import { updateMember } from '../api/updateMember';
import { updateMemberRole } from '../api/updateMemberRole';
import type {
  AddMemberFormData,
  ApiRole,
  Member,
  MemberRole,
  UpdateMemberData,
} from '@/pages/admin/MemberManagement/types/member';

export const useMemberMutations = (clubId: string) => {
  const queryClient = useQueryClient();

  const addMemberMutation = useMutation({
    mutationFn: (data: AddMemberFormData) => addMember(clubId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
  });

  const updateRoleMutation = useMutation({
    mutationFn: ({ profileId, role }: { profileId: number; role: ApiRole }) =>
      updateMemberRole(clubId, profileId, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: (memberId: number) => deleteMember(clubId, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
  });

  const updateMemberMutation = useMutation({
    mutationFn: ({ profileId, data }: { profileId: number; data: UpdateMemberData }) =>
      updateMember(clubId, profileId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
  });

  const bulkUploadMutation = useMutation({
    mutationFn: (file: File) => bulkUploadMembers(clubId, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
  });

  const submitAddMember = (data: AddMemberFormData) => {
    addMemberMutation.mutate(data);
  };

  const submitBulkUpload = (file: File) => {
    bulkUploadMutation.mutate(file);
  };

  const handleRoleChange = (memberId: number, newRole: MemberRole) => {
    const apiRole = UI_ROLE_TO_API[newRole];
    updateRoleMutation.mutate({ profileId: memberId, role: apiRole });
  };

  const handleDeleteMember = (memberId: number) => {
    // TODO: 삭제 확인 모달 + API 호출
    console.log(`회원 ${memberId} 삭제`);
    // if (confirm('정말 삭제하시겠습니까?')) {
    //   deleteMemberMutation.mutate(memberId);
    // }
  };

  const handleMemberUpdate = (memberId: number, field: keyof Member, value: string) => {
    updateMemberMutation.mutate({ profileId: memberId, data: { [field]: value } });
  };

  return {
    submitAddMember,
    submitBulkUpload,
    handleRoleChange,
    handleDeleteMember,
    handleMemberUpdate,
    isAddingMember: addMemberMutation.isPending,
    isBulkUploading: bulkUploadMutation.isPending,
    isUpdatingRole: updateRoleMutation.isPending,
    isUpdatingMember: updateMemberMutation.isPending,
    isDeleting: deleteMemberMutation.isPending,
  };
};
