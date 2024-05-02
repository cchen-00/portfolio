import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import HeaderMobile from "./components/HeaderMobile.jsx";

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
