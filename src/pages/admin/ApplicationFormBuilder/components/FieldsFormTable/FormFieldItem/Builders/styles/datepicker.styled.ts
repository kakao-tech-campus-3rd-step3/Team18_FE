import { css } from '@emotion/react';

export const datePickerStyles = css`
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end {
    background-color: #00782c !important;
    color: #fff !important;
  }

  .react-datepicker__day--in-range {
    background-color: rgba(0, 120, 44, 0.2) !important;
    color: #333 !important;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--range-start:hover,
  .react-datepicker__day--range-end:hover {
    background-color: #005a21 !important;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: rgba(0, 120, 44, 0.3) !important;
  }
  .react-datepicker__day:hover {
    background-color: rgba(0, 120, 44, 0.15) !important;
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: rgba(0, 120, 44, 0.3) !important;
  }

  .react-datepicker__day--selecting-range-start,
  .react-datepicker__day--selecting-range-end {
    background-color: #00782c !important;
    color: #fff !important;
  }
`;
