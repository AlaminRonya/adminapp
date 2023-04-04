import { TaxClassesDTO } from "./tax-classes-dto";

export interface ResponseTaxClassesDTO {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { taxClasses?: TaxClassesDTO[], taxClass?: TaxClassesDTO };
}
