import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  useAdaptedApplicationForm,
  useAdaptedPatchApplicationForm,
} from '@/pages/admin/ApplicationFormBuilder/hooks/useApplicationFormAdapter';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicationInfoSection } from './components/ApplicationInfoSection';
import { ApplicationFieldsFormTableSection } from './components/FieldsFormTableSection';
import { ApplicationFormBuilderHeaderSection } from './components/HeaderSection';
import type { ApplicationFormData } from './types/fieldType';

export const ApplicationFormBuilderPage = () => {
  const { clubId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const { data, isLoading, error } = useAdaptedApplicationForm(Number(clubId));
  const { adaptedPatchForm } = useAdaptedPatchApplicationForm(Number(clubId));

  const formHandler = useForm<ApplicationFormData>({
    defaultValues: {
      title: '',
      description: '',
      recruitDate: '',
      interviewRequired: false,
      formQuestions: [],
    },
  });

  useEffect(() => {
    if (data) {
      formHandler.reset(data);
    }
  }, [data, formHandler]);

  const handleEdit = () => setIsEditMode(true);
  const handleCancel = () => {
    setIsEditMode(false);
    if (data) {
      formHandler.reset(data);
    }
  };

  const handleSave = formHandler.handleSubmit((formData) => {
    adaptedPatchForm(formData, {
      onSuccess: () => {
        setIsEditMode(false);
      },
    });
  });

  const isInterviewMode = formHandler.watch('interviewRequired');
  const handleInterviewChange = (checked: boolean) => {
    formHandler.setValue('interviewRequired', checked);

    const currentQuestions = formHandler.getValues('formQuestions');

    if (checked) {
      formHandler.setValue('formQuestions', [
        {
          questionNum: 1,
          fieldType: 'TIME_SLOT',
          displayOrder: 1,
          question: '면접 가능한 시간을 선택해주세요',
          isRequired: true,
          optionList: [],
          timeSlotOptions: {
            date: '',
            availableTime: { start: '09:00:00', end: '18:00:00' },
          },
        },
        ...currentQuestions.map((q, i) => ({ ...q, questionNum: i + 2, displayOrder: i + 2 })),
      ]);
    } else {
      const filtered = currentQuestions.filter((q) => q.fieldType !== 'TIME_SLOT');
      formHandler.setValue(
        'formQuestions',
        filtered.map((q, i) => ({ ...q, questionNum: i + 1, displayOrder: i + 1 })),
      );
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

  return (
    <Layout>
      <ContentContainer>
        <ApplicationFormBuilderHeaderSection
          isEditMode={isEditMode}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          isInterviewMode={isInterviewMode}
          onInterviewChange={handleInterviewChange}
        />
        <ApplicationInfoSection formHandler={formHandler} isEditMode={isEditMode} />

        <ApplicationFieldsFormTableSection formHandler={formHandler} isEditMode={isEditMode} />
      </ContentContainer>
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto 4rem auto',
  padding: '0 1.5rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '1.5rem',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1rem',
  },
}));

const ContentContainer = styled.div(({ theme }) => ({
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    width: '100%',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '0.75rem',
  },
}));
