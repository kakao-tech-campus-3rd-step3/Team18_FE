import styled from '@emotion/styled';
import { ApplicationFormBuilderHeaderSection } from './components/HeaderSection';
import { ApplicationInfoSection } from './components/ApplicationInfoSection';
import { ApplicationFieldsFormTableSection } from './components/FieldsFormTableSection';
import { useForm } from 'react-hook-form';
import type { ApplicationForm, ApplicationFormData } from './types/fieldType';
import {
  useApplicationForm,
  usePatchApplicationForm,
} from '@/pages/admin/ApplicationFormBuilder/hooks/useApplicationForm';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';

export const ApplicationFormBuilder = () => {
  const clubId = 1;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, error } = useApplicationForm(Number(clubId));
  const { patchForm } = usePatchApplicationForm(Number(clubId));

  const formHandler = useForm<ApplicationFormData>({
    defaultValues: {
      title: '',
      description: '',
      recruitDate: '',
      formQuestions: [],
    },
  });

  const transformDataForForm = (apiData: ApplicationForm) => {
    return {
      ...apiData,
      formQuestions: apiData.formQuestions.map((question) => {
        const rawTimeSlot = question.timeSlotOptions;
        const correctedTimeSlot = Array.isArray(rawTimeSlot) ? rawTimeSlot[0] : rawTimeSlot;

        return {
          ...question,
          optionList:
            question.optionList?.map((option) =>
              typeof option === 'string' ? { value: option } : option,
            ) || [],
          timeSlotOptions: correctedTimeSlot || {
            date: '',
            availableTime: { start: '', end: '' },
          },
        };
      }),
    };
  };

  useEffect(() => {
    if (data) {
      const transformedData = transformDataForForm(data);
      formHandler.reset(transformedData);
    }
  }, [data, formHandler]);

  const handleEdit = () => setIsEditMode(true);
  const handleCancel = () => {
    setIsEditMode(false);
    if (data) {
      const transformedData = transformDataForForm(data);
      formHandler.reset(transformedData);
    }
  };

  const handleSave = formHandler.handleSubmit((formData) => {
    const submissionData = {
      ...formData,
      formQuestions: formData.formQuestions.map((question) => ({
        ...question,
        optionList: question.optionList?.map((option) => option.value) || [],
        timeSlotOptions: question.timeSlotOptions ? [question.timeSlotOptions] : [],
      })),
    };

    patchForm(submissionData, {
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

const ContentContainer = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;
