import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import HeaderMobile from "./components/header/HeaderMobile.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProgectPage from "./pages/ProgectPage.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/project/:id", element: <ProgectPage /> },
]);

export default function App() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}
