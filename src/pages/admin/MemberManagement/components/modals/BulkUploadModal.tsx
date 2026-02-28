import { useState } from 'react';
import { downloadRegistrationForm } from '@/pages/admin/MemberManagement/api/downloadRegistrationForm';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';
import { toast } from '@/shared/utils/toast';
import * as S from './BulkUploadModal.styled';

type BulkUploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
};

export const BulkUploadModal = ({ isOpen, onClose, onUpload }: BulkUploadModalProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const isExcel = selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls');

      if (isExcel) {
        setFile(selectedFile);
      } else {
        alert('엑셀 파일(.xlsx, .xls)만 업로드 가능합니다.');
      }
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      await downloadRegistrationForm();
    } catch {
      toast.error('양식 파일 다운로드에 실패했습니다.');
    }
  };

  const handleSubmit = () => {
    if (file) {
      onUpload(file);
      setFile(null);
      onClose();
    }
  };

  const handleClose = () => {
    setFile(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='엑셀로 일괄 등록' size='lg'>
      <S.UploadContainer>
        <S.Description>엑셀 파일을 업로드하세요.</S.Description>

        <S.FileInputWrapper>
          <S.FileInput
            type='file'
            accept='.xlsx,.xls'
            onChange={handleFileChange}
            id='excel-upload'
          />
          <S.FileInputLabel htmlFor='excel-upload'>📎 파일 선택</S.FileInputLabel>
        </S.FileInputWrapper>

        {file && <S.FileName>선택된 파일: {file.name}</S.FileName>}

        <S.Notice>※ 주의: 엑셀 파일의 첫번째 줄(헤더)는 정해진 양식을 따라야 합니다.</S.Notice>
        <S.DownloadLink type='button' onClick={handleDownloadTemplate}>
          양식 다운로드하기!
        </S.DownloadLink>

        <S.ButtonWrapper>
          <Button onClick={handleSubmit} disabled={!file}>
            업로드하기
          </Button>
        </S.ButtonWrapper>
      </S.UploadContainer>
    </Modal>
  );
};
