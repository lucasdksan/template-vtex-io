import React, { useState } from "react";
import { classGenerator } from "../../utils/classGenerator";

const SearchBarMobile = ({ SearchBar, SearchBarIcon, SearchBarContainer }) => {
    const [show, setShow] = useState(false);
    const classButton = classGenerator("search-bar-mobile", "button");

    const handleToggle = () => setShow(prev => !prev);

    return show
        ? (
            <SearchBarContainer>
                <SearchBar />
                <button className={classButton} onClick={handleToggle}>Fechar</button>
            </SearchBarContainer>
        )
        : <button className={classButton} onClick={handleToggle}><SearchBarIcon /></button>;
}

export default SearchBarMobile;