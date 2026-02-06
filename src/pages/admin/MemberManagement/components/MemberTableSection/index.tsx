import * as S from './index.styled';

type Member = {
  id: number;
  name: string;
  generation: string;
  department: string;
  phoneNumber: string;
  role: '회장단' | '운영팀' | '동아리원';
};

type MemberTableProps = {
  members: Member[];
  onRoleChange: (memberId: number, newRole: string) => void;
  onDelete: (memberId: number) => void;
};

const ROLES = ['회장단', '운영팀', '동아리원'] as const;

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
            <S.Th>역할</S.Th>
            <S.Th width='50px'></S.Th>
          </tr>
        </S.TableHead>
        <tbody>
          {members.map((member) => (
            <S.TableRow key={member.id}>
              <S.TdName>{member.name}</S.TdName>
              <S.Td>{member.generation}</S.Td>
              <S.Td>{member.department}</S.Td>
              <S.Td>{member.phoneNumber}</S.Td>
              <S.Td>
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
              </S.Td>
              <S.Td>
                <S.DeleteButton onClick={() => onDelete(member.id)}>×</S.DeleteButton>
              </S.Td>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      {members.length === 0 && <S.EmptyMessage>동아리원이 없습니다.</S.EmptyMessage>}
    </S.TableWrapper>
  );
};
