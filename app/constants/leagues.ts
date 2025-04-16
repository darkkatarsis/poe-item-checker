export interface League {
  value: string;
  label: string;
  urlPrefix?: string;
}

export const LEAGUES: League[] = [
  {
    value: 'Standard',
    label: 'Standard'
  },
  {
    value: 'Dawn of the Hunt',
    label: 'Dawn of the Hunt (PoE2)',
    urlPrefix: 'poe2'
  },
  {
    value: 'Crucible',
    label: 'Crucible'
  },
  {
    value: 'Hardcore Crucible',
    label: 'Hardcore Crucible'
  },
  {
    value: 'Hardcore',
    label: 'Hardcore'
  }
]; 