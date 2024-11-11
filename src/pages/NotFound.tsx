import { ContentContainer } from "../components/ContentContainer";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <ContentContainer>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. You might have mistyped the address
          or the page may have moved.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </ContentContainer>
  );
};
