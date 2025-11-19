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

export const ApplicationFormBuilder = () => {
  const { clubId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, error } = useAdaptedApplicationForm(Number(clubId));
  const { adaptedPatchForm } = useAdaptedPatchApplicationForm(Number(clubId));

  const formHandler = useForm<ApplicationFormData>({
    defaultValues: {
      title: '',
      description: '',
      recruitDate: '',
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

  '@media (max-width: 48rem)': {
    width: '100%',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '0.75rem',
  },
}));
