import { useState } from "react";

import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from '../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);

    const onSelectedChar = (id) => {
        setChar(id);
    }
    
    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList onSelectedChar={onSelectedChar}/>
                <CharInfo charId={selectedChar}/>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;