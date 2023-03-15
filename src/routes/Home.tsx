import React, { useState } from "react";
import Search from "../components/Search";
import { UsreProp } from "../types/user";
import User from "../components/user/User";
import Error from "../components/error/Error";

 const Home = () => {
    const [user, setUser ] = useState<UsreProp | null>(null)
    const [error, setError] = useState(false)

    const loadUser = async(userName: string) => {
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()
        console.log(data)

        if(res.status === 404 ){
            setError(true)
            return;
        }

        const { 
            avatar_url,
            login,
            location ,
            followers,
            following } = data

        const userData: UsreProp = {
            avatar_url,
            login,
            location ,
            followers,
            following
        }

        setUser(userData)

    }

    return(
        <div>
            <Search
                loadUser={loadUser}
            />
            {user && <User {...user}/>}
            {error && <Error/>}
        </div>
    )
}

export default Home;