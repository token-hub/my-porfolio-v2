import { createBrowserRouter } from 'react-router';
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
                }
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
