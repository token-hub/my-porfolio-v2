import { useFetcher } from 'react-router';
import { useToastContext } from '../contexts/toastContext';
import { useEffect } from 'react';

export function useEmailFetcher() {
    const fetcher = useFetcher();
    const { createToast } = useToastContext();

    useEffect(() => {
        if (fetcher.state === 'idle') {
            if (fetcher?.data?.error) {
                createToast({ headerText: 'Server Error', bodyText: fetcher?.data?.error, isSuccess: false });
            }

            if (fetcher?.data?.result) {
                createToast({
                    headerText: 'Email Send',
                    bodyText: fetcher?.data?.result || 'Email successfully sent to John :)'
                });
            }

            fetcher.unstable_reset();
        }
    }, [fetcher, createToast]);

    return { fetcher };
}
