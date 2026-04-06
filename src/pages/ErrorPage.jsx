import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
        
        <h1 className="text-7xl font-bold text-error">404</h1>
        
        <h2 className="text-2xl font-semibold">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;
