import React from 'react'

const Input = ({type, label, value, errorMessage, onChange, valid, touched, shouldValidate}) => {

    const isInvalid = (valid, touched, shouldValidate) => {
        return !valid && touched && shouldValidate;
    }
    return(
        <div className="m-1">
            <label className="form-label">{label}</label>
            <input
                value={value}
                type={type}
                onChange={onChange}
                className="form-control"
            />
            {
                isInvalid(valid, touched, shouldValidate)
                    ? <div className="form-text">{errorMessage}</div>
                    : null

            }
        </div>
    )
}

export default Input