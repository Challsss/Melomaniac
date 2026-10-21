export type FormatType = 'LP' | 'CASSETTE' | 'CD';
export type FormatFilter = 'all' | FormatType;

export type ConditionType = 'M' | 'NM' | 'VG+';
export type ConditionFilter = 'all' | ConditionType;

export type StickerType = 'star' | 'pill';

export interface Track {
  num: string;
  name: string;
  time: string;
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  label: string;
  format: FormatType;
  formatLabel: string;
  condition: ConditionType;
  conditionLabel: string;
  price: number;
  stickerText: string;
  stickerType: StickerType;
  stickerBg: string;
  discColor: string;
  labelColor: string;
  coverBg: string;
  coverAccent: string;
  bpm: number;
  baseFreq: number;
  tracks: Track[];
}

export interface CartItem extends Album {
  qty: number;
}

export interface ToastData {
  title: string;
  message: string;
  visible: boolean;
}

export interface FormatDepartmentInfo {
  format: FormatType;
  sectionTitle: string;
  characterName: string;
  characterRole: string;
  tagline: string;
  description: string;
  badgeText: string;
  accentBg: string;
  activeBg: string;
}
