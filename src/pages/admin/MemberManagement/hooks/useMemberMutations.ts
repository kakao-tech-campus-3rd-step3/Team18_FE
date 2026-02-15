import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMemberRole, deleteMember } from '../api/member';
import type { MemberRole } from '@/pages/admin/MemberManagement/types/member';

export const useMemberMutations = (clubId: string) => {
  const queryClient = useQueryClient();

  const updateRoleMutation = useMutation({
    mutationFn: ({ memberId, role }: { memberId: number; role: MemberRole }) =>
      updateMemberRole(clubId, memberId, role),
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

  const handleRoleChange = (memberId: number, newRole: MemberRole) => {
    // TODO: API 연동 시 주석 해제
    console.log(`회원 ${memberId}의 역할을 ${newRole}로 변경`);
    // updateRoleMutation.mutate({ memberId, role: newRole });
  };

  const handleDeleteMember = (memberId: number) => {
    // TODO: 삭제 확인 모달 + API 호출
    console.log(`회원 ${memberId} 삭제`);
    // if (confirm('정말 삭제하시겠습니까?')) {
    //   deleteMemberMutation.mutate(memberId);
    // }
  };

  return {
    handleRoleChange,
    handleDeleteMember,
    isUpdatingRole: updateRoleMutation.isPending,
    isDeleting: deleteMemberMutation.isPending,
  };
};
