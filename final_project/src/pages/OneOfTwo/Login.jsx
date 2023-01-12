import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { useEffect } from "react";

const Login = () => {
 const isAuth = useSelector(selectIsAuth);
 const dispatch = useDispatch();
 const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isValid },
 } = useForm({
  defaultValues: {
   email: "",
   password: "",
  },
  mode: "onChange",
 });

 useEffect(() => {
  document.title = "Login";
 }, []);

 const onSubmit = async (values) => {
  const data = await dispatch(fetchAuth(values));
  if (!data.payload) {
   return alert("Unable to login");
  }
  if ("token" in data.payload) {
   window.localStorage.setItem("token", data.payload.token);
  }
 };

 if (isAuth) {
  return <Navigate to="/1of2" />;
 }

 return (
  <div className="absolute top-0 bg-gradient-to-r from-cyan-500 to-blue-600 w-screen h-screen">
   <div className="flex flex-col px-10 w-11/12 md:w-1/3 left-[50%] top-[50%] absolute bg-slate-100 translate-y-[-50%] items-center translate-x-[-50%] text-xl rounded-xl">
    <div className="my-5 text-2xl">Sing In</div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <input
      type="text"
      placeholder="Your email..."
      {...register("email", { required: "Укажите почту" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.email?.message) ? "text-red-600" : "text-blue-600"
      } ${
       Boolean(errors.email?.message) ? "border-red-600" : "border-violet-400"
      } my-5 outline-none focus:border-blue-600`}
     />

     <input
      type="password"
      placeholder="Password..."
      {...register("password", { required: "Укажите пароль" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.password?.message) ? "text-red-600" : "text-blue-600"
      } ${
       Boolean(errors.password?.message)
        ? "border-red-600"
        : "border-violet-400"
      } my-5 outline-none focus:border-blue-600`}
     />

     <div className="text-blue-600 cursor-pointer hover:text-black self-start">
      Forgot password?
     </div>
     <button
      type="submit"
      className="bg-blue-600 text-slate-50 p-2 px-5 my-5 w-full ease-in duration-200 text-center rounded-full cursor-pointer hover:bg-transparent hover:text-blue-600 border-2 border-blue-600"
     >
      Login
     </button>
    </form>
   </div>
  </div>
 );
};

export default Login;
