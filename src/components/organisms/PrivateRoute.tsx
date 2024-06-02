import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores";
import { Loading } from "../atoms";
import React from "react";

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { user, loading } = useAuthStore();
    const location = useLocation();
    const [showLoading, setShowLoading] = React.useState(true);

    React.useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setShowLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    if (loading || showLoading) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;
