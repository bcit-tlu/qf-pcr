import { useParams, useNavigate, useLocation } from 'react-router-dom';

/**
 * Shim that injects react-router-dom v5-style `match`, `history`, and
 * `location` props into class components so they don't need to be rewritten
 * for react-router-dom v7 hooks.
 */
export function withRouterV7(Component) {
    function WithRouterWrapper(props) {
        const params = useParams();
        const navigate = useNavigate();
        const location = useLocation();
        return (
            <Component
                {...props}
                match={{ params }}
                history={{
                    push: (path) => navigate(path),
                    replace: (path) => navigate(path, { replace: true }),
                    location,
                }}
                location={location}
            />
        );
    }
    WithRouterWrapper.displayName = `withRouterV7(${Component.displayName || Component.name})`;
    return WithRouterWrapper;
}
