import { UsreProp } from "../../types/user";
import {MdLocationPin} from "react-icons/md"
import { Link } from "react-router-dom";
import style from "./User.module.css"

const User = ({login, avatar_url, followers, following, location}: UsreProp) => {
    return( 
        <div className={style.user}>
            <img
                src={avatar_url}
                alt={login}
            />
            <h2>{login}</h2>
            {location && (
                <p className={style.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={style.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={style.number}>{followers}</p>
                </div>
                <div>
                    <p>seguindo:</p>
                    <p className={style.number}>{following}</p>
                </div>
            </div>
            <Link to={`https://github.com/${login}?tab=repositories`}>Ver melhores os Projetos</Link>
        </div>
    )
}

export default User;