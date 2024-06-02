abstract class CustomError extends Error {
    abstract code: string;

    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    abstract formatErrors(): { message: string; field?: string }[];
}

export default CustomError;
