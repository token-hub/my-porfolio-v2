import { createContext, useContext, useState } from 'react';

const ToastContext = createContext({
    toasts: [],
    updateToast: () => {},
    removeToast: () => {},
    createToast: () => {}
});

export function useToastContext() {
    return useContext(ToastContext);
}

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    function updateToast(id) {
        setToasts((prevToasts) => {
            return prevToasts.map((toast) => {
                if (toast.id === id) {
                    return { ...toast, shouldClose: true };
                } else {
                    return toast;
                }
            });
        });
    }
    function removeToast(id) {
        setToasts((prevToasts) => {
            return prevToasts.filter((toast) => toast.id !== id);
        });
    }
    function createToast({ headerText, bodyText, isSuccess = true }) {
        setToasts((prevToasts) => {
            const isExist = prevToasts.some((toast) => toast.headerText === headerText && toast.bodyText);

            if (!isExist) {
                return [
                    ...prevToasts,
                    {
                        id: prevToasts.length,
                        headerText,
                        bodyText,
                        isSuccess
                    }
                ];
            }

            return prevToasts;
        });
    }

    const values = { updateToast, removeToast, createToast, toasts };
    return <ToastContext value={values}>{children}</ToastContext>;
}

export default ToastProvider;
