import { useToastContext } from '../../contexts/toastContext';
import Toast from './toast';

function Toasts() {
    const { toasts } = useToastContext();

    return (
        <>
            <div aria-live="polite" aria-atomic="true" className="position-fixed w-100 z-3">
                <div className="toast-container top-0 end-0 mt-4 me-md-3">
                    {toasts.length > 0 &&
                        toasts.map((toast) => {
                            return <Toast key={toast.id} toast={toast} />;
                        })}
                </div>
            </div>
        </>
    );
}

export default Toasts;
