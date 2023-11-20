export interface CustomResponseType<T> {
    data: T;
    message: string;
    status: number;
}