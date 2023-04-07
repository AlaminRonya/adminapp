export interface Attachment {
    id: number;
    userEmail: string;
    filename: string;
    disk: string;
    path: string;
    extension: string;
    mime: string;
    size: string;
    createdAt: Date;
    updatedAt: Date;
}
