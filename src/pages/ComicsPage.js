import { Helmet } from "react-helmet";

import AppBanner from "../components/appBanner/AppBanner";
import ComicsList from "../components/comicsList/ComicsList";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="This page displays the Marvel comics"
                />
                <title>Marvel | The comics page</title>
            </Helmet>

            <AppBanner />
            <ComicsList />
        </>
    )
}

export default ComicsPage;