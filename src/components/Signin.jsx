import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usercontext } from "../context/DataContext";
const Signin = () => {
    const { toggler, settoggler, users } = useContext(usercontext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const SubmitHandler = (data) => {
        const isUser = users.find(
            (user) => data.email == user.email && data.password == user.password
        );
        if (isUser) {
            toast.success("User Exists!");
            reset();
        } else toast.error("User Not Found!");
    };
    console.log(errors);
    return (
        <form
            className="w-[50%] m-auto mt-10"
            onSubmit={handleSubmit(SubmitHandler)}
        >
            <h1 className="text-5xl mb-10 font-thin">
                Signin and Check if you are registed!
            </h1>
            <input
                {...register("email", {
                    required: "Email can not be empty!",
                })}
                className="block w-full outline-0 border-b font-thin text-2xl"
                type="email"
                placeholder="john@example.com"
            />
            <small className=" text-red-400 block mb-4">
                {errors?.email?.message}
            </small>
            <input
                {...register("password", {
                    required: "password can not be empty!",
                })}
                className="block w-full outline-0 border-b font-thin text-2xl"
                type="password"
                placeholder="*******"
            />
            <small className=" text-red-400 block mb-4">
                {errors?.password?.message}
            </small>
            <button className="mt-5 text-lg px-8 py-2 border rounded">
                Sign Up
            </button>
            <p className="mt-3 font-thin text-sm">
                Don't have an account ?{" "}
                <button
                    onClick={() => settoggler(!toggler)}
                    className="text-blue-400"
                >
                    Singup
                </button>
            </p>
        </form>
    );
};

export default Signin;
