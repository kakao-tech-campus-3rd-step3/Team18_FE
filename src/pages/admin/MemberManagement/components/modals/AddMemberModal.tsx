import { useState, useMemo } from 'react';
import { Button } from '@/shared/components/Button';
import { Dropdown } from '@/shared/components/Dropdown';
import { UnderlineInputField } from '@/shared/components/Form/InputField/UnderlineInputField';
import { Modal } from '@/shared/components/Modal';
import * as S from './AddMemberModal.styled';
import type {
  AcademicStatus,
  AddMemberFormData,
  ApiRole,
} from '@/pages/admin/MemberManagement/types/member';

type AddMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddMemberFormData) => void;
};

const ACADEMIC_STATUS_OPTIONS: AcademicStatus[] = [
  'ENROLLED',
  'LEAVE_OF_ABSENCE',
  'GRADUATED',
  'COMPLETED',
  'EXPELLED',
];

const ACADEMIC_STATUS_LABELS: Record<AcademicStatus, string> = {
  ENROLLED: '재학',
  LEAVE_OF_ABSENCE: '휴학',
  GRADUATED: '졸업',
  COMPLETED: '수료',
  EXPELLED: '제적',
};

const ROLE_OPTIONS: ApiRole[] = ['CLUB_MEMBER', 'CLUB_EXECUTIVE', 'CLUB_ADMIN'];

const ROLE_LABELS: Record<ApiRole, string> = {
  CLUB_MEMBER: '동아리원',
  CLUB_EXECUTIVE: '운영팀',
  CLUB_ADMIN: '회장',
};

const getCurrentYearMonth = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

export const AddMemberModal = ({ isOpen, onClose, onSubmit }: AddMemberModalProps) => {
  const [formData, setFormData] = useState<AddMemberFormData>({
    name: '',
    studentId: '',
    phoneNumber: '',
    college: '',
    department: '',
    academicStatus: 'ENROLLED',
    role: 'CLUB_MEMBER',
    joinDate: getCurrentYearMonth(),
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AddMemberFormData, string>>>({});

  // 필수 필드가 모두 채워졌는지 확인
  const isFormValid = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      formData.studentId.length === 6 &&
      /^010-\d{4}-\d{4}$/.test(formData.phoneNumber) &&
      formData.college.trim().length > 0 &&
      formData.department.trim().length > 0
    );
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof AddMemberFormData, string>> = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = '이름은 최소 2자 이상이어야 합니다.';
    }

    if (formData.studentId.length !== 6) {
      newErrors.studentId = '학번은 정확히 6자리여야 합니다.';
    }

    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = '전화번호는 010-XXXX-XXXX 형식이어야 합니다.';
    }

    if (formData.college.trim().length === 0) {
      newErrors.college = '단과대를 입력해주세요.';
    }

    if (formData.department.trim().length === 0) {
      newErrors.department = '학과를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      studentId: '',
      phoneNumber: '',
      college: '',
      department: '',
      academicStatus: 'ENROLLED',
      role: 'CLUB_MEMBER',
      joinDate: getCurrentYearMonth(),
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='동아리원 추가' size='lg'>
      <S.ScrollableBody>
        <S.Field>
          <S.Label>이름</S.Label>
          <UnderlineInputField
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder='홍길동'
          />
          {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
        </S.Field>

        <S.Field>
          <S.Label>학번</S.Label>
          <UnderlineInputField
            value={formData.studentId}
            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            placeholder='202601'
            maxLength={6}
          />
          {errors.studentId && <S.ErrorMessage>{errors.studentId}</S.ErrorMessage>}
        </S.Field>

        <S.Field>
          <S.Label>전화번호</S.Label>
          <UnderlineInputField
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder='010-1234-5678'
          />
          {errors.phoneNumber && <S.ErrorMessage>{errors.phoneNumber}</S.ErrorMessage>}
        </S.Field>

        <S.Field>
          <S.Label>단과대</S.Label>
          <UnderlineInputField
            value={formData.college}
            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            placeholder='인문대학'
          />
          {errors.college && <S.ErrorMessage>{errors.college}</S.ErrorMessage>}
        </S.Field>

        <S.Field>
          <S.Label>학과</S.Label>
          <UnderlineInputField
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            placeholder='영어영문학과'
          />
          {errors.department && <S.ErrorMessage>{errors.department}</S.ErrorMessage>}
        </S.Field>

        <S.FieldRow>
          <S.Field>
            <S.Label>학적상태</S.Label>
            <Dropdown
              value={ACADEMIC_STATUS_LABELS[formData.academicStatus]}
              options={ACADEMIC_STATUS_OPTIONS.map((status) => ACADEMIC_STATUS_LABELS[status])}
              onSelect={(label) => {
                const status = Object.entries(ACADEMIC_STATUS_LABELS).find(
                  ([, l]) => l === label,
                )?.[0] as AcademicStatus;
                if (status) setFormData({ ...formData, academicStatus: status });
              }}
            />
          </S.Field>

          <S.Field>
            <S.Label>역할</S.Label>
            <Dropdown
              value={ROLE_LABELS[formData.role]}
              options={ROLE_OPTIONS.map((role) => ROLE_LABELS[role])}
              onSelect={(label) => {
                const role = Object.entries(ROLE_LABELS).find(
                  ([, l]) => l === label,
                )?.[0] as ApiRole;
                if (role) setFormData({ ...formData, role });
              }}
            />
          </S.Field>
        </S.FieldRow>

        <S.Field>
          <S.Label>등록일</S.Label>
          <S.ReadOnlyText>{formData.joinDate}</S.ReadOnlyText>
        </S.Field>
      </S.ScrollableBody>

      <S.ButtonWrapper>
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          등록하기
        </Button>
      </S.ButtonWrapper>
    </Modal>
  );
};
