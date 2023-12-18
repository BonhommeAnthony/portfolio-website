export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
};

export const getErrorMessage = (error: unknown): string => {
    let errorMessage: string;
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = (error as { message: string }).message;
    } else if (error && typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Something went wrong";
    }
    return errorMessage;
};
