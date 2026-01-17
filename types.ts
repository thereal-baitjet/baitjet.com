
export interface SiteIdentity {
  brand_name: string;
  title_tag: string;
  meta_description: string;
}

export interface Single {
  title: string;
  technical_description: string;
  bpm: number;
  key: string;
}

export interface AuthoritativeContent {
  about_section: string;
  music_catalog: Single[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GeoOptimization {
  json_ld_schema: string;
  ai_faq: FAQItem[];
}

export interface BaitjetData {
  site_identity: SiteIdentity;
  authoritative_content: AuthoritativeContent;
  geo_optimization: GeoOptimization;
}
