
export interface Response {
    timeStamp: Date;
    statusCode: number;
    status: any;
    reason: string;
    message: string;
    developerMessage: string;
    data: Map<any, any>;
}
