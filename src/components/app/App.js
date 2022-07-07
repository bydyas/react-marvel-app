import {Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from '../../routes';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const App = () => {
        
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            {routes.map((route, i) => (<Route key={i} {...route} />))}
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;