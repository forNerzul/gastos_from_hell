import { CustomError } from ".";

enum FirebaseAuthErrorCode {
    INVALID_EMAIL = "auth/invalid-email",
    INVALID_PASSWORD = "auth/invalid-password",
    USER_EXISTS = "auth/user-exists",
    WEAK_PASSWORD = "auth/weak-password",
    EMAIL_TAKEN = "auth/email-already-in-use",
    NO_ACCOUNT = "auth/no-account",
    UNKNOWN_ERROR = "auth/unknown",
}

const firebaseAuthErrorMessages: Record<FirebaseAuthErrorCode, string> = {
    [FirebaseAuthErrorCode.INVALID_EMAIL]: "Invalid email",
    [FirebaseAuthErrorCode.INVALID_PASSWORD]: "Invalid password",
    [FirebaseAuthErrorCode.USER_EXISTS]: "User already exists",
    [FirebaseAuthErrorCode.WEAK_PASSWORD]: "Weak password",
    [FirebaseAuthErrorCode.EMAIL_TAKEN]: "Email already in use",
    [FirebaseAuthErrorCode.NO_ACCOUNT]: "No account",
    [FirebaseAuthErrorCode.UNKNOWN_ERROR]: "Unknown error",
};

class FirebaseAuthError extends CustomError {
    constructor(public code: FirebaseAuthErrorCode) {
        super(firebaseAuthErrorMessages[code]);
        this.name = "FirebaseAuthError";
    }

    formatErrors() {
        return [{ message: firebaseAuthErrorMessages[this.code] }];
    }
}

export default FirebaseAuthError;
