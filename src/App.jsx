import { useContext } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Users from "./components/Users";
import { usercontext } from "./context/DataContext";

const App = () => {
    const { toggler } = useContext(usercontext);
    return (
        <div className="flex w-screen h-screen p-10 bg-gray-800 text-white">
            <div className="w-[70%]">{toggler ? <Signup /> : <Signin />}</div>
            <Users />
        </div>
    );
};

export default App;
