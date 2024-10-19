import { createBrowserRouter } from 'react-router-dom';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import App from './App';
import WishList from './pages/WishList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
      },
      {
        path: '/wishlist',
        element: <WishList />,
      },
    ],
  },
]);
