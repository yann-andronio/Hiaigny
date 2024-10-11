import { Fragment } from "react/jsx-runtime"
import s from "./homeuser.module.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import FeaturesSection from "../../components/featuresection/FeaturesSection"
import Pub2 from "../../components/pub2/Pub2"
import Footers from "../../components/footers/Footers"

const HomeUser: React.FC = () => {
    return (
        <Fragment>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="header pt-16 ">
                <Header />
            </div>
            <main className={`${s.mains} `}>
                <div className="pub1 p-5">
                    <FeaturesSection />
                </div>
                <div className="pub2 p-5">
                    <Pub2 />
                </div>
                <div className="pub2 ">
                    <Footers />
                </div>

            </main>




        </Fragment>
    )
}
export default HomeUser