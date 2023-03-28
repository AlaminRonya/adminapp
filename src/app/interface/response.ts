
export interface Response {
    timeStamp: Date;
    statusCode: number;
    status: number;
    reason: string;
    message: string;
    developerMessage: string;
    data: Map<string, string>;
}
