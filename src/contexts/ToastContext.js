import React, {createContext, useCallback, useEffect, useState} from "react"

const ToastContext = createContext([]);

export default ToastContext

export function ToastContextProvider ({children}) {
    const [toasts, setToasts] = useState([])

    useEffect(()=>{
        if(toasts.length > 0) {
            const timer = setTimeout(()=>{
                setToasts(toasts => toasts.slice(1))
            },3500)
            return () => clearTimeout(timer)
        }
    },[toasts])
    
    const addToast = useCallback(function (toast){
        setToasts(toasts=>[...toasts, toast])
    }, [setToasts])

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="toast-wrapper">
                {toasts.map(toast => (
                    <div className='toast' key={toasts.indexOf(toast)}> {toast}</div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}