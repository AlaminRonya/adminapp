export interface Category {
    id: number;
    parent: number | null;
    slug: string;
    position: number;
    isSearchable: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
