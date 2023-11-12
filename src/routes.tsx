import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Products from "./pages/Products"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    { 
        path: '/',
        errorElement: <NotFound />,
        children: [
            { path: '', element: <Products /> },
            { path: 'product/:id', element: <Product /> },
            { path: 'checkout', element: <Checkout /> },
        ]
    },
])

export default function Routes() {
    return <RouterProvider router={router} />
}