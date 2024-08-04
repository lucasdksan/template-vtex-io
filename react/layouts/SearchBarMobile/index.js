import React, { useState } from "react";
import { classGenerator } from "../../utils/classGenerator";

import styles from "./styles.module.css";

const SearchBarMobile = ({ SearchBar, SearchBarIcon, SearchBarContainer }) => {
    const [show, setShow] = useState(false);
    const classButton = classGenerator("search-bar-mobile", "button");

    const handleToggle = () => setShow(prev => !prev);

    return(
        <>  
            { show && (
                <SearchBarContainer>
                    <SearchBar />
                    <button className={`${classButton} ${styles.btn}`} onClick={handleToggle}>Fechar</button>
                </SearchBarContainer>
            ) }
            <button className={`${classButton} ${styles.btn}`} onClick={handleToggle}><SearchBarIcon /></button>
        </>
    );
}

export default SearchBarMobile;