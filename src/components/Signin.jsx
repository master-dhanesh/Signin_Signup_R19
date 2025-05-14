import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Signin = (props) => {
    const { toggler, settoggler, users } = props;
    const { register, handleSubmit } = useForm();
    const SubmitHandler = (data) => {
        const isUser = users.find(
            (user) => data.email == user.email && data.password == user.password
        );
        if (isUser) toast.success("User Exists!");
        else toast.error("User Not Found!");
    };
    return (
        <form
            className="w-[50%] m-auto mt-10"
            onSubmit={handleSubmit(SubmitHandler)}
        >
            <h1 className="text-5xl mb-10 font-thin">
                Signin and Check if you are registed!
            </h1>
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
