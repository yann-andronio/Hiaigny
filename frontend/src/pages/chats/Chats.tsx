import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/navbar/Navbar";
import Chatbody from "../../components/chatbody/Chatbody";
import s from "./chats.module.css";

const Chats: React.FC = () => {
    return (
        <Fragment>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="chatbody flex justify-center items-center pt-16 h-screen w-screen">
                <div className="  w-full h-full">
                    <Chatbody />
                </div>
            </div>
        </Fragment>
    );
};

export default Chats;
