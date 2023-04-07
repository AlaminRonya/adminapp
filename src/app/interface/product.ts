import { Attachment } from "./attachment";

export interface Product {
    id: number;
    productName: string;
    brand: string;
    taxClassId: number;
    slug: string;
    price: number;
    specialPrice: number;
    specialPriceType: string;
    specialPriceStart: Date;
    specialPriceEnd: Date;
    sellingPrice: number;
    sku: string;
    manageStock: boolean;
    qty: number;
    inStock: boolean;
    viewed: number;
    isActive: boolean;
    newFrom: Date;
    newTo: Date;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    virtualAt: boolean;
    attachmentDTOList: Attachment[];
}
