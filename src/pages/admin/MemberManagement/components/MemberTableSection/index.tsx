import * as S from './index.styled';
import { MemberTableRow } from './MemberTableRow';
import type { Member, MemberRole } from '@/pages/admin/MemberManagement/types/member';

type MemberTableProps = {
  members: Member[];
  onRoleChange: (memberId: number, newRole: MemberRole) => void;
  onDelete: (memberId: number, memberName: string) => void;
  onMemberUpdate: (memberId: number, field: keyof Member, value: string) => void;
};

export const MemberTableSection = ({
  members,
  onRoleChange,
  onDelete,
  onMemberUpdate,
}: MemberTableProps) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHead>
          <tr>
            <S.Th>이름</S.Th>
            <S.Th>학번</S.Th>
            <S.Th>학과</S.Th>
            <S.ThPhone>전화번호</S.ThPhone>
            <S.ThJoinDate>등록일</S.ThJoinDate>
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
              onMemberUpdate={onMemberUpdate}
            />
          ))}
        </tbody>
      </S.Table>

      {members.length === 0 && <S.EmptyMessage>동아리원이 없습니다.</S.EmptyMessage>}
    </S.TableWrapper>
  );
};
