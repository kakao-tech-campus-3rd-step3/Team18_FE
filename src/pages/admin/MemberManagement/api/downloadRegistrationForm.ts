const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const downloadRegistrationForm = () => {
  window.open(`${API_BASE_URL}/clubs/members/registration-form`, '_blank');
};
