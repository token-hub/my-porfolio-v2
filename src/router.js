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
                    Component: async () => (await import('./app')).default
                }
            }
        ]
    }
]);
export default router;
