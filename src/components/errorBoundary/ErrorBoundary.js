import { Component } from "react";

import decoration from '../../resources/img/vision.png';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // logErrorToServer(error, info); 
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>
                        Something<br />
                        went<br />
                        wrong
                    </h1>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;