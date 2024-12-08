import { Fragment, useState } from "react";
import { FaUserCircle, FaPhone, FaVideo, FaPaperPlane, FaRegEnvelope } from "react-icons/fa";
import s from "./chatbody.module.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Message {
    id: number;
    content: string;
    sender: string;
    isUser: boolean;
}

interface User {
    id: number;
    name: string;
    messagePreview: string;
    phoneNumber: string;
    email: string;
}

const Chatbody: React.FC = () => {
    // État pour les messages
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, content: "Welcome to group everyone!", sender: "user", isUser: true },
        { id: 2, content: "Lorem ipsum dolor sit amet.", sender: "other", isUser: false },
        { id: 3, content: "How is everyone?", sender: "user", isUser: true },
        { id: 4, content: "I'm good, thanks!", sender: "other", isUser: false },
        { id: 5, content: "Great to hear!", sender: "user", isUser: true },
        { id: 6, content: "What's the agenda for today?", sender: "other", isUser: false },
    ]);

    
    const [searchUsers, setSearchUsers] = useState<string>("");

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: Yup.object({
            message: Yup.string().required('Le message est requis'),
        }),
        onSubmit: (values) => {

            // ajout de message
            setMessages([...messages, { id: messages.length + 1, content: values.message, sender: "user", isUser: true }]);
            formik.resetForm();
        },
    });

   
    const [users] = useState<User[]>([
        { id: 1, name: "John Doe", messagePreview: "Hey, how are you?", phoneNumber: "(+261) 34 123 4567", email: "john@example.com" },
        { id: 2, name: "Jane Smith", messagePreview: "I'm available for the meeting.", phoneNumber: "(+261) 34 234 5678", email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", messagePreview: "Let's work on the project.", phoneNumber: "(+261) 34 345 6789", email: "alice@example.com" },
        { id: 4, name: "Michael Brown", messagePreview: "I'll join the call soon.", phoneNumber: "(+261) 34 456 7890", email: "michael@example.com" },
        { id: 5, name: "Emily Davis", messagePreview: "Looking forward to it.", phoneNumber: "(+261) 34 567 8901", email: "emily@example.com" },
        { id: 6, name: "Kely", messagePreview: "See you later!", phoneNumber: "(+261) 34 678 9012", email: "kely@example.com" },
        { id: 7, name: "Koto", messagePreview: "See you later!", phoneNumber: "(+261) 34 678 9012", email: "koto@example.com" },
        { id: 8, name: "Kala", messagePreview: "See you later!", phoneNumber: "(+261) 34 678 9012", email: "kala@example.com" },
    ]);

    const [selectedUser, setSelectedUser] = useState<User | null>(users[0]);

    
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchUsers.toLowerCase())
    );

   
    const handleUserClick = (user: User) => {
        setSelectedUser(user);
    };

    return (
        <Fragment>
            <div className="mx-auto shadow-lg rounded-lg h-full">
                {/* Chatting */}
                <div className="flex flex-row h-full justify-between bg-white">
                    {/* Liste des utilisateurs et recherche */}
                    <div className={`${s.boxmessage} flex flex-col w-2/5 border-r-2 overflow-y-auto h-full`}>
                        {/* Barre de recherche */}
                        <div className="border-b-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chatting"
                                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                                value={searchUsers}
                                onChange={(e) => setSearchUsers(e.target.value)}
                            />
                        </div>

                        {/* Liste des utilisateurs filtrée */}
                        <div className="flex flex-col">
                            {filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex flex-row py-4 px-2 items-center border-b-2 cursor-pointer"
                                    onClick={() => handleUserClick(user)}
                                >
                                    <div className="w-1/4">
                                        <FaUserCircle size={48} className="text-gray-400" />
                                    </div>
                                    <div className="w-full">
                                        <div className="text-lg font-semibold">{user.name}</div>
                                        <span className="text-gray-500">{user.messagePreview}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Messages */}
                    <div className={`mx-auto shadow-lg w-full rounded-lg h-full`}>
                        <div className="flex flex-row h-full justify-between bg-white">
                            {/* Liste des messages */}
                            <div className={`${s.message} w-full flex flex-col justify-between h-full`}>
                                {/* Profil utilisateur et nom */}
                                <div className="w-full p-4 bg-gray-100 shadow-md">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <FaUserCircle size={40} className="text-gray-400" />
                                            <div className="ml-3">
                                                <div className="text-lg font-semibold">
                                                    {selectedUser ? selectedUser.name : "Sélectionnez un utilisateur"}
                                                </div>
                                                <span className="text-gray-500 text-sm">
                                                    {selectedUser ? "En ligne" : ""}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Icônes de téléphone et appel vidéo */}
                                        <div className="flex space-x-4">
                                            <FaPhone size={24} className="text-gray-500 cursor-pointer hover:text-gray-700" />
                                            <FaVideo size={24} className="text-gray-500 cursor-pointer hover:text-gray-700" />
                                        </div>
                                    </div>
                                </div>

                                {/* Liste des messages */}
                                <div className={`${s.boxmessage} px-5 flex flex-col mt-5 overflow-y-auto h-[75vh]`}>
                                    {messages.map((message: Message) => (
                                        <div key={message.id} className={`flex mb-4 ${message.isUser ? "justify-end" : "justify-start"}`}>
                                            {message.isUser ? (
                                                <>
                                                    <div className="mr-2 py-3 px-4 bg-[#22C55E] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                                        {message.content}
                                                    </div>
                                                    <FaUserCircle size={32} className="text-gray-400" />
                                                </>
                                            ) : (
                                                <>
                                                    <FaUserCircle size={32} className="text-gray-400" />
                                                    <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                                        {message.content}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Champ de saisie de message */}
                                <form onSubmit={formik.handleSubmit} className="py-5 px-5 relative">
                                    <input
                                        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                        type="text"
                                        placeholder="type your message here..."
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                    />
                                    <button type="submit" className={`${s.iconenvoyer} absolute`}>
                                        <FaPaperPlane size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/*  Info user */}
                    <div className="w-2/5 border-l-2 h-full bg-white">
                        {selectedUser && (
                            <>
                                <div className="flex flex-col items-center py-4">
                                    <FaUserCircle size={100} className="text-gray-500 mb-2" />
                                    <h2 className="text-2xl font-semibold">{selectedUser.name}</h2>
                                    <div className="text-gray-700">{selectedUser.phoneNumber}</div>
                                    <div className="text-gray-700">{selectedUser.email}</div>
                                </div>
                                <div className="py-4 px-5">
                                    <h3 className="font-semibold">Actions</h3>
                                    <div className="flex flex-col space-y-2">
                                        <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Call</button>
                                        <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">Message</button>
                                        <button className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Block</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Chatbody;
