export const ROUTE_PATH = {
  USER: {
    APPLICATION: 'clubs/:clubId/apply',
  },

  ADMIN: {
    DASHBOARD: 'clubs/:clubId/dashboard',
    APPLICATION_DETAIL: 'clubs/:clubId/applicants/:applicantId',
    CLUB_EDIT: 'clubs/:clubId/edit',
    APPLICATION_FORM_BUILDER: 'clubs/:clubId/application/form/create',
  },

  COMMON: {
    MAIN: '/',
    CLUB_DETAIL: 'clubs/:clubId',
    LOGIN: 'login',
    CALLBACK: 'login/redirect',
    SIGNUP: 'signup',
    NOTICE_LIST: 'notices',
    NOTICE_DETAIL: 'notices/:noticeId',
  },
};
