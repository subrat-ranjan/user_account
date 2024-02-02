import React from 'react'
//alrt component to show alerts;
function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            word = "Error"
        }
        const lower = word && word.toLowerCase();
        return lower ? lower.charAt(0).toUpperCase() + lower.slice(1) : "";
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert- ${props.alert.type} alert-dismissible fade show`} role='alert'>
                <strong>{capitalize(props.alert.type)}</strong>:
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert
