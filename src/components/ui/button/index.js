import React from 'react'

const Button = ({title, type, onChange, disabled}) => {
    let classes = [
        'btn btn-outline-',
        type
    ]
    return(
        <>
            <button type="button"
                    className={classes.join('')}
                    onClick={onChange}
                    disabled={disabled}
            >
                {title}
            </button>
        </>
    )
}

export default Button