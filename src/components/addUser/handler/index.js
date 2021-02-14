import is from 'is_js';

export const validateControl = (value, validation) => {
    if(!validation){
        return true
    }
    let isValid = true;

    if(validation.required){
        isValid = value.trim() !== '' && isValid
    }
    if(validation.minLength){
        isValid = value.length >= validation.minLength && isValid
    }
    if(validation.email){
        isValid = is.email(value) && isValid;
    }
    if(validation.phone){
        isValid = is.nanpPhone(value) && isValid;
    }

    return isValid;
}