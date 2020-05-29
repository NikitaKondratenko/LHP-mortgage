import {
  analytics,
  calculator,
  chatboxEllipses,
  clipboard,
  documents, folderOpen,
  home,
  phonePortraitOutline,
  statsChart,
} from 'ionicons/icons';

const TEST_OFFICER_ID = 1;

const MENU_ITEMS = [
  {
    label: 'My Loan Status',
    icon: home,
  },
  {
    label: 'Loan Application',
    icon: clipboard,
  },
  {
    label: 'Documents',
    icon: documents,
  },
  {
    label: 'Messages',
    icon: chatboxEllipses,
  },
  {
    label: 'Mortgage Tools',
    icon: statsChart,
  },
  {
    label: 'Calculators',
    icon: calculator,
  },
  {
    label: 'My Loan Team',
    icon: analytics,
  },
];

const FEATURES = [
  {
    label: 'calls',
    icon: phonePortraitOutline,
  },
  {
    label: 'files',
    icon: folderOpen,
  },
  {
    label: 'todo',
    icon: clipboard,
  },
  {
    label: 'calc',
    icon: calculator,
  },
  {
    label: 'messenger',
    icon: chatboxEllipses,
  },
];

export {
  TEST_OFFICER_ID,
  MENU_ITEMS,
  FEATURES,
};
