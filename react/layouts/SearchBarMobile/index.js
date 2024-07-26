import React, { useState } from "react";

const SearchBarMobile = ({ SearchBar, SearchBarIcon, SearchBarContainer }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(prev => !prev);;

    return show
        ? (
            <SearchBarContainer>
                <SearchBar />
                <button className={styles["SearchBar--button-close"]} onClick={handleToggle}>Fechar</button>
            </SearchBarContainer>
        )
        : <button className={styles["SearchBar--button"]} onClick={handleToggle}><SearchBarIcon /></button>
}

export default SearchBarMobile;