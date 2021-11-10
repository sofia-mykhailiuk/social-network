import {useEffect, useState} from "react";
import {useToastContext} from "../hooks/useToastContext";

export const withFormControls = Element => ({input, meta, ...props}) => {
    let elementStyle = null;

    if (Element === 'input') {
        elementStyle = {
            boxSizing: "border-box",
            height: "35px",
            width: "260px",
            borderRadius: "8px",
            marginBottom: "8px",
            padding: "0px 5px"
        }
    }

    const [text, setText] = useState(null)
    const addToast = useToastContext()

    const hasError = meta.touched && meta.error

    useEffect(() => {
        if (hasError && meta.error !== '') {
            setText(meta.error)
        }

    }, [meta.error, meta.touched])

    useEffect(() => {
        if (text && text !== '') {
            addToast(text)
        }
    }, [text])

    return (
        <Element
            style={hasError ? {
                ...elementStyle,
                background: '#bcbdc2',
                marginTop: "0px",
                color: '#FFFFFF'
            } : elementStyle} {...input} {...props}/>
    )
}