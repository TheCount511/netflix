import { Route, Redirect } from 'react-router-dom';

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return (user) ? <Redirect to={{ pathname: loggedInPath }} /> : (!user) ? children : null;
            }
            }
        />
    );
}

export const ProtectedRoute = ({ user, children, ...rest }) => {
    return (
        <Route
            {...rest}

            render={({ location }) => {
                return (user) ? children : (!user) ?

                    <Redirect to={{
                        pathname: 'signin', state: { from: location },
                    }} /> : null;
            }} />
    )
}