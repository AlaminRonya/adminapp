import { Brand } from "./brand";

export interface ResponseBrand {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { brands?: Brand[], brand?: Brand };
}
