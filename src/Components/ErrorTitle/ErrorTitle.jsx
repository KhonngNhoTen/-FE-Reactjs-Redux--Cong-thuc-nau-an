import React from 'react'

const ErrorTitle = ({ children }) => {
    return (
        <div
            style={{
                fontSize: '10px',
                color: 'red',
                margin: '3px 0'
            }}
        >
            {children}
        </div>
    )
}

export default ErrorTitle