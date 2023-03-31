export interface RequestProductDTO {
    productName: string;
    brand: string;
    taxClass: string;
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
    virtualAt: boolean;
}
