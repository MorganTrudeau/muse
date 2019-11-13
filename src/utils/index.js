export function loginErrorToMessage(error) {
    switch (error.code) {
        case "auth/user-not-found":
            return "There is no account with this email.";
        case "auth/wrong-password":
            return "Password is incorrect.";
        case "auth/invalid-email":
            return "Email address is badly formatted.";
        case "auth/weak-password":
            return "Password must be at least 6 characters.";
        case "auth/email-already-in-use":
            return "Email address is already in use by another account.";
        default:
            return error.message;
    }
}
