export interface Brand {
    id: number;
    brandName: string;
    slug: string;
    isActive: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
}
