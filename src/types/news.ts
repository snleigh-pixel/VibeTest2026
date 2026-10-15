export interface Article {
  id: string;
  title: string;
  deck: string;
  kicker: string;
  subKicker?: string;
  bylines: string[];
  timestamp: string;
  publishedAt: string;
  readingTime: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  photoCredit?: string;
  section: string;
  category: 'lead' | 'secondary' | 'opinion' | 'analysis' | 'feature' | 'recipe';
  highlights?: string[];
  content: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  metrics?: {
    shares: number;
    comments: number;
  };
  authorPhotoUrl?: string;
  authorRole?: string;
  rating?: string;
  reviewCount?: string;
}

export interface LiveUpdate {
  id: string;
  timestamp: string;
  timeAgo: string;
  headline: string;
  content: string;
  author: string;
  location: string;
  category: 'diplomatic' | 'military' | 'economic';
}

export type SectionType =
  | 'all'
  | 'world'
  | 'us'
  | 'politics'
  | 'new-york'
  | 'business'
  | 'tech'
  | 'science'
  | 'health'
  | 'sports'
  | 'arts'
  | 'books'
  | 'style'
  | 'food'
  | 'travel'
  | 'magazine'
  | 't-magazine'
  | 'real-estate'
  | 'video'
  | 'games'
  | 'cooking'
  | 'wirecutter'
  | 'the-athletic'
  | 'opinion';
