import "../styles/404.css";

function PageNotFound() {
    document.title = "Page Not Found | Bond Trinh";
  
    return (
    <div className="Error">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
    )
  }

  export default PageNotFound;