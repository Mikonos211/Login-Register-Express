
export function checkPassword(passwordId, repPasswordId) {
    const passwordInput = document.getElementById(passwordId).value;
    const passwordRepeated = document.getElementById(repPasswordId).value;

    if (passwordInput !== passwordRepeated) {
        console.log("Hasła nie są takie same");
        return false;
    } else {
        console.log("Hasła są poprawne");
        return true;
    }
}

export function checkEmail(emailId) {
    const emailInput = document.getElementById(emailId).value;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(emailInput)) {
        console.log("Nieprawidłowy email");
        return false;
    } else {
        console.log("Email jest poprawny");
        return true;
    }
}