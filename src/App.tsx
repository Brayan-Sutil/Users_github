import {Outlet} from "react-router-dom"
import style from "./App.module.css"

function App() {

  return (
    <div className={style.app}>
     <h1>Ola Etou aqui</h1>
     <Outlet />
    </div>
  )
}

export default App
