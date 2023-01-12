import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { useEffect } from "react";

const Register = () => {
 const isAuth = useSelector(selectIsAuth);
 const dispatch = useDispatch();
 const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isValid },
 } = useForm({
  defaultValues: {
   fullName: "",
   email: "",
   password: "",
   avatarUrl: "",
  },
  mode: "onChange",
 });
 useEffect(() => {
  document.title = "Register";
 }, []);

 const onSubmit = async (values) => {
  const data = await dispatch(fetchRegister(values));
  if (!data.payload) {
   return alert("Unable to register");
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
    <div className="my-5 text-2xl">Register</div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <input
      type="text"
      placeholder="Your email..."
      {...register("email", { required: "Укажите пароль" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.password?.message) ? "text-red-600" : "text-blue-600"
      } ${
       Boolean(errors.password?.message)
        ? "border-red-600"
        : "border-violet-400"
      } my-5 outline-none focus:border-blue-600`}
     ></input>
     <input
      type="text"
      placeholder="Nickname..."
      {...register("login", { required: "Укажите логин" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.password?.message) ? "text-red-600" : "text-blue-600"
      } ${
       Boolean(errors.password?.message)
        ? "border-red-600"
        : "border-violet-400"
      } my-5 outline-none focus:border-blue-600`}
     ></input>
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
      } my-5 outline-none focus:border-violet-800`}
     ></input>
     <input
      type="text"
      placeholder="Avatar URL..."
      {...register("avatarUrl", { required: "Укажите пароль" })}
      className={`bg-slate-100 w-full border-b-2 ${
       Boolean(errors.password?.message) ? "text-red-600" : "text-blue-600"
      } ${
       Boolean(errors.password?.message)
        ? "border-red-600"
        : "border-violet-400"
      } my-5 outline-none focus:border-blue-600`}
     ></input>
     <button
      type="submit"
      className="bg-blue-600 text-slate-50 p-2 px-5 my-5 w-full ease-in duration-200 text-center rounded-full cursor-pointer hover:bg-transparent hover:text-blue-600 border-2 border-blue-600"
     >
      Register account
     </button>
    </form>
   </div>
  </div>
 );
};

export default Register;
