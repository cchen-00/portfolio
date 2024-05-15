import notFoundImg from "../assets/images/page-not-found.png";

function NotFoundPage() {
  return (
    <div className="notFound">
      <img src={notFoundImg} alt="Page not found" width="400px" />
    </div>
  );
}

export default NotFoundPage;
