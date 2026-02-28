import { FiX } from 'react-icons/fi';
import { EditableCell } from './EditableCell';
import * as S from './MemberTableRow.styled';
import type { Member, MemberRole } from '@/pages/admin/MemberManagement/types/member';

type MemberTableRowProps = {
  member: Member;
  onRoleChange: (memberId: number, newRole: MemberRole) => void;
  onDelete: (memberId: number, memberName: string) => void;
  onMemberUpdate: (memberId: number, field: keyof Member, value: string) => void;
};

const ROLES: MemberRole[] = ['회장', '운영팀', '동아리원'];

export const MemberTableRow = ({
  member,
  onRoleChange,
  onDelete,
  onMemberUpdate,
}: MemberTableRowProps) => {
  const handleFieldUpdate = (field: keyof Member, value: string) => {
    onMemberUpdate(member.id, field, value);
  };

  return (
    <S.TableRow>
      <S.TdName>
        <EditableCell
          value={member.name}
          maxWidth='60px'
          onSave={(val) => handleFieldUpdate('name', val)}
        />
      </S.TdName>
      <S.Td>
        <EditableCell
          value={member.studentId}
          maxWidth='80px'
          onSave={(val) => handleFieldUpdate('studentId', val)}
        />
      </S.Td>
      <S.Td>
        <EditableCell
          value={member.department}
          maxWidth='120px'
          onSave={(val) => handleFieldUpdate('department', val)}
        />
      </S.Td>
      <S.TdPhone>
        <EditableCell
          value={member.phoneNumber}
          maxWidth='120px'
          onSave={(val) => handleFieldUpdate('phoneNumber', val)}
        />
      </S.TdPhone>
      <S.TdJoinDate>{member.joinDate}</S.TdJoinDate>
      <S.TdRole>
        <S.RoleButtonGroup>
          {ROLES.map((role) => (
            <S.RoleButton
              key={role}
              active={member.role === role}
              onClick={() => onRoleChange(member.id, role)}
            >
              {role}
            </S.RoleButton>
          ))}
        </S.RoleButtonGroup>
      </S.TdRole>
      <S.Td>
        <S.DeleteButton onClick={() => onDelete(member.id, member.name)}>
          <FiX />
        </S.DeleteButton>
      </S.Td>
    </S.TableRow>
  );
};
