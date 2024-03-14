import { Route, RouteProps, Navigate } from 'react-router-dom';
import { useContext } from 'react';
// import AuthContext from '../context/AuthContext';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    // const { user }: any = useContext(AuthContext);
    
    return (
        <Route
            {...rest}
            element={false ? children : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
