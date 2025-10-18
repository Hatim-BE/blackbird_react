import { validate as email_validator } from 'email-validator';

export function validateEmail(email){
    if (!email) return false;
    return email_validator(email); 
}

export function validatePassword(password) {
    var password_tester = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!password) return false;
    var valid = password_tester.test(password);
    if (!valid) return false;
    return true;
}

export function validatePasswordHelper(password) {
    if (!password) { 
        return "Password is required"
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must include at least one uppercase letter (A–Z)";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must include at least one lowercase letter (a–z)";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must include at least one number (0–9)";
    }

    if (!/[#?!@$%^&*\-]/.test(password)) {
        return "Password must include at least one special character (#?!@$%^&*-)";
    }
}
