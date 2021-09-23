import { Template, TemplateConfig } from './Template';
export interface PointOfInterestItem {
    id: string;
    location: {
        latitude: number;
        longitude: number;
    };
    title: string;
    subtitle?: string;
    summary?: string;
    detailTitle?: string;
    detailSubtitle?: string;
    detailSummary?: string;
}
export interface PointOfInterestTemplateConfig extends TemplateConfig {
    title: string;
    items: PointOfInterestItem[];
}
export declare class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
    get type(): string;
}
