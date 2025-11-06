import { createBrowserRouter } from 'react-router';
import { sendEmailAction } from './actions/sendEmailAction';
const router = createBrowserRouter([
    {
        lazy: {
            Component: async () => (await import('./layouts/base')).default
        },
        children: [
            {
                path: '/',
                lazy: {
                    Component: async () => (await import('./pages/home')).default
                },
                action: sendEmailAction
            },
            {
                path: '/:project',
                lazy: {
                    Component: async () => (await import('./pages/project')).default
                }
            }
        ]
    }
]);
export default router;
