import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NoMatch = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel | Page not found</title>
            </Helmet>
            <ErrorMessage />
            <p style={
                {
                    'textAlign': 'center',
                    'fontWeight': 'bold',
                    'fontSize': '24px'
                }}
            >
                Page doesn't exist
            </p>
            <Link style={
                {
                    'display': 'block',
                    'textAlign': 'center',
                    'fontWeight': 'bold',
                    'fontSize': '24px',
                    'color': '#9f0013'
                }}
                to="/"
            >
                Back to main page
            </Link>
        </div>
    )
}

export default NoMatch;