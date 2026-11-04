export type InquiryOption = {
  value: string;
  label: string;
  goal: string;
  package: string;
  group: 'Pakete' | 'Leistungen';
};

export const inquiryOptions: InquiryOption[] = [
  {
    value: 'nine-start',
    label: 'Nine Start',
    goal: 'neu',
    package: 'nine-start',
    group: 'Pakete',
  },
  {
    value: 'nine-launch',
    label: 'Nine Launch',
    goal: 'neu',
    package: 'nine-launch',
    group: 'Pakete',
  },
  {
    value: 'nine-growth',
    label: 'Nine Growth',
    goal: 'neu',
    package: 'nine-growth',
    group: 'Pakete',
  },
  {
    value: 'unsicher',
    label: 'Nine X / Individuelles Projekt',
    goal: 'individuell',
    package: 'unsicher',
    group: 'Pakete',
  },
  {
    value: 'platform-discovery',
    label: 'Platform Discovery',
    goal: 'plattform',
    package: 'platform-discovery',
    group: 'Pakete',
  },
  {
    value: 'custom-platform',
    label: 'Custom Platform',
    goal: 'plattform',
    package: 'custom-platform',
    group: 'Pakete',
  },
  {
    value: 'nine-scale',
    label: 'Nine Scale',
    goal: 'ads',
    package: 'nine-scale',
    group: 'Pakete',
  },
  {
    value: 'automation-sprint',
    label: 'Automation Sprint',
    goal: 'automation',
    package: 'automation-sprint',
    group: 'Pakete',
  },
  {
    value: 'website',
    label: 'Website',
    goal: 'neu',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'relaunch',
    label: 'Bestehende Website überarbeiten',
    goal: 'relaunch',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'plattform',
    label: 'Web-App oder Buchungsplattform',
    goal: 'plattform',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'crm',
    label: 'CRM oder Backoffice',
    goal: 'crm',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'automation',
    label: 'KI und Automatisierung',
    goal: 'automation',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'ads',
    label: 'Google Ads und Betreuung',
    goal: 'ads',
    package: 'unsicher',
    group: 'Leistungen',
  },
  {
    value: 'allgemein',
    label: 'Noch offen / Persönlich besprechen',
    goal: 'individuell',
    package: 'unsicher',
    group: 'Leistungen',
  },
];

export function resolveInquiryInterest(packageValue = '', service = '') {
  const requested = packageValue === 'nine-x' ? 'unsicher' : packageValue;
  if (inquiryOptions.some((option) => option.value === requested))
    return requested;
  const services: Record<string, string> = {
    Website: 'website',
    Plattform: 'plattform',
    CRM: 'crm',
    'KI & Automation': 'automation',
    Growth: 'ads',
    'Noch unklar': 'allgemein',
  };
  const interest = services[service] ?? service;
  return inquiryOptions.some((option) => option.value === interest)
    ? interest
    : 'allgemein';
}

export function isValidInquiryPhone(phone: string) {
  const value = phone.trim();
  const digits = value.replace(/\D/g, '');
  return (
    /^[+()\d ./-]+$/.test(value) && digits.length >= 6 && digits.length <= 20
  );
}

export function inquiryHrefForPath(path: string) {
  const service = path.startsWith('/ki-automation')
    ? 'automation'
    : path.startsWith('/google-ads-growth')
      ? 'ads'
      : path.startsWith('/plattformen-web-apps/kundenportale')
        ? 'crm'
        : path.startsWith('/plattformen-web-apps')
          ? 'plattform'
          : path.startsWith('/websites')
            ? 'website'
            : '';
  return '/projekt-starten' + (service ? '?service=' + service : '');
}
