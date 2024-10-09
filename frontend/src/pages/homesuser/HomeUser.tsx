import { Fragment } from "react/jsx-runtime"
import s from "./homeuser.module.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"

const HomeUser: React.FC = () => {
    return (
        <Fragment>
            <div className="navbar">
            <Navbar />
            </div>
            <div className="header pt-16">
                <Header/>
            </div>
          
         
        
        </Fragment>
    )
}
export default HomeUser