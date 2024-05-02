import HomePage from "./pages/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import HeaderMobile from "./components/header/HeaderMobile.jsx";

export default function App() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <main>
        <HomePage />
      </main>
    </>
  );
}
