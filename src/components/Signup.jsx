import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { usercontext } from "../context/DataContext";

const Signup = () => {
    const { toggler, settoggler, users, setusers } = useContext(usercontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (data) => {
        data.id = nanoid();

        let copyusers = [...users];
        copyusers.push(data);
        setusers(copyusers);

        reset();
    };
    return (
        <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="w-[50%] m-auto mt-10"
        >
            <h1 className="text-5xl mb-10 font-thin">
                Signup yourself to get start your journey
            </h1>
            <input
                {...register("name")}
                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="text"
                placeholder="John Doe"
            />
            <input
                {...register("email")}
                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="email"
                placeholder="john@example.com"
            />
            <input
                {...register("password")}
                className="block mb-7 w-full outline-0 border-b font-thin text-2xl"
                type="password"
                placeholder="*******"
            />
            <button className="mt-5 text-lg px-8 py-2 border rounded">
                Sign Up
            </button>
            <p className="mt-3 font-thin text-sm">
                Already have an account ?{" "}
                <button
                    onClick={() => settoggler(!toggler)}
                    className="text-blue-400"
                >
                    Singin
                </button>
            </p>
        </form>
    );
};

export default Signup;
