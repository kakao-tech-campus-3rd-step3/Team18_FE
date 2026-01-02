import ReactGA from 'react-ga4';

interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
