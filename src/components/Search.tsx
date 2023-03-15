import React, { useState, KeyboardEvent } from "react"
import { BsSearch } from "react-icons/bs"

import style from "./Search.module.css"
type SerchProp = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SerchProp) =>{
    const [ userName, setUserName ] = useState("") 

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return(
        <div className={style.search}>
            <h2>Busque por um usuario</h2>
            <p>Conheça seus melhores rpositorios</p>
            <div className={style.search_container}>
                <input 
                    type="text"
                    placeholder="Digite o nome do usuario"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={() => loadUser(userName)}
                >
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search