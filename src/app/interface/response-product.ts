import { Product } from "./product";

export interface ResponseProduct {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { products?: Product[], product?: Product };
}
