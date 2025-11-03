import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as bootstrap from 'bootstrap';
import './scss/style.scss';

import { RouterProvider } from 'react-router';
import router from './router.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
