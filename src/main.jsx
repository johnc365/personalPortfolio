import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavTabs from './components/navTabs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMePage from './pages/aboutMePage.jsx'
import PortfolioPage from './pages/portfolioPage.jsx'
import ContactPage from './pages/contactPage.jsx'
import ResumePage from './pages/resumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'Contact',
        element: <ContactPage />,
      },
      {
        path: 'Resume',
        element: <ResumePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
