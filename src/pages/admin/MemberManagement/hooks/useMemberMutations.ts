import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UI_ROLE_TO_API } from '@/pages/admin/MemberManagement/types/member';
import { toast } from '@/shared/utils/toast';
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
    onError: () => {
      toast.error('동아리원 직책 변경은 회장만 가능합니다.');
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: (memberId: number) => deleteMember(clubId, memberId),
    onSuccess: () => {
      toast.success('동아리원이 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '동아리원 삭제에 실패했습니다.');
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
      toast.success('엑셀 일괄 등록이 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['members', clubId] });
    },
    onError: (error: unknown) => {
      const data = (
        error as {
          response?: { data?: { message?: string; detail?: string | string[] } };
        }
      ).response?.data;

      const detail = data?.detail;
      const EXCEL_ERROR_DURATION = 3000;

      if (Array.isArray(detail)) {
        detail.forEach((item) => toast.error(item, EXCEL_ERROR_DURATION));
        return;
      }

      if (typeof detail === 'string') {
        if (detail.startsWith('[') && detail.endsWith(']')) {
          const inner = detail.slice(1, -1);
          const items = inner.split(/,\s*(?=\d+행:|학번)/).map((s) => s.trim());
          if (items.length > 1) {
            items.forEach((item) => toast.error(item, EXCEL_ERROR_DURATION));
            return;
          }
        }
        toast.error(detail, EXCEL_ERROR_DURATION);
        return;
      }

      toast.error(data?.message || '일괄 등록에 실패했습니다.');
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
    deleteMemberMutation.mutate(memberId);
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
