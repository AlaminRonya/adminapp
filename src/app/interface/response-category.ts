import { Category } from "./category";

export interface ResponseCategory {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { categories?: Category[], category?: Category };
}
