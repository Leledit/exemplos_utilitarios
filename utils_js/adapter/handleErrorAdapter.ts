import { IApiResponse } from "@interface/api";

export function handleErrorAdapter(message: string, error: unknown): IApiResponse<any> {
    if (error instanceof Error) {
        console.log(`${message} ${error.message}`);
        return {
            success: false,
            status: 500,
            messageError: error.message,
        };
    } else {
        return {
            success: false,
            status: 500,
        };
    }
}