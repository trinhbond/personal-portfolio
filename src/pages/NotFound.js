import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <p>
          This page cannot not found. Back to <Link to="/">Home</Link>.
        </p>
      </div>
    </div>
  );
}
