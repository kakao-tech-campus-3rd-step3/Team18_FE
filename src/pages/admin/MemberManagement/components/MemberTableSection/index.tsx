import { FiX } from 'react-icons/fi';
import * as S from './index.styled';
import type { Member, MemberRole } from '@/pages/admin/MemberManagement/types/member';

type MemberTableProps = {
  members: Member[];
  onRoleChange: (memberId: number, newRole: MemberRole) => void;
  onDelete: (memberId: number) => void;
};

type MemberTableRowProps = {
  member: Member;
  onRoleChange: (memberId: number, newRole: MemberRole) => void;
  onDelete: (memberId: number) => void;
};

const ROLES: MemberRole[] = ['회장단', '운영팀', '동아리원'];

const MemberTableRow = ({ member, onRoleChange, onDelete }: MemberTableRowProps) => {
  return (
    <S.TableRow>
      <S.TdName>{member.name}</S.TdName>
      <S.Td>{member.generation}</S.Td>
      <S.Td>{member.department}</S.Td>
      <S.Td>{member.phoneNumber}</S.Td>
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
        <S.DeleteButton onClick={() => onDelete(member.id)}>
          <FiX />
        </S.DeleteButton>
      </S.Td>
    </S.TableRow>
  );
};

export const MemberTableSection = ({ members, onRoleChange, onDelete }: MemberTableProps) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHead>
          <tr>
            <S.Th>이름</S.Th>
            <S.Th>기수</S.Th>
            <S.Th>학과</S.Th>
            <S.Th>전화번호</S.Th>
            <S.ThRole>역할 (권한)</S.ThRole>
            <S.Th width='30px'></S.Th>
          </tr>
        </S.TableHead>
        <tbody>
          {members.map((member) => (
            <MemberTableRow
              key={member.id}
              member={member}
              onRoleChange={onRoleChange}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </S.Table>

      {members.length === 0 && <S.EmptyMessage>동아리원이 없습니다.</S.EmptyMessage>}
    </S.TableWrapper>
  );
};
