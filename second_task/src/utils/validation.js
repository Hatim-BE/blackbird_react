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