export function formRender(){
    return {
        firstName: {
            label: 'firstName',
            value: '',
            type: 'text',
            errorMessage: 'Не менее двух символов',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 2
            }
        },
        lastName: {
            label: 'lastName',
            value: '',
            type: 'text',
            errorMessage: 'Не менее двух символов',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 2
            }
        },
        email: {
            label: 'email',
            value: '',
            type: 'email',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        phone: {
            label: 'phone',
            value: '',
            type: 'tel',
            mask: "(999) 999-9999",
            errorMessage: 'введите корректный номер',
            valid: false,
            touched: false,
            validation: {
                required: true,
                phone: true
            }
        },
    }
}