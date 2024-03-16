import React, { useEffect, useState } from "react";
import { setBodyColor } from "../setBodyColor";
import LogInComponent from "./LogInComponent";

function ButtonComponent({onClick}){
  return <button className="text-cyan-500 font-semibold" onClick={onClick}>Log In</button>
}

function SignUpComponent() {
  
  const [logInVar, setLogInVar] = useState(false)

  const handleLogIn = () => {
    setLogInVar(true)
    console.log(logInVar)
  }
  
  if(!logInVar){
    return (
      <>
        {setBodyColor({ color: "white", text: "black" })}
        <div className="w-screen h-screen items-center justify-center block ">
          <div className="sign-up-container border-solid border-2 border-gray-200  mt-8 mx-auto text-center p-9 pt-10">
            <h1 className="instagram-text to-white text-5xl font-thin mb-5">
              Instagram Clone
            </h1>
            <p className="font-sans text-lg font-semibold text-gray-500">
              Sign up to see photos and videos of your friends
            </p>

            <div className="inline-flex justify-center text-gray-500 font-semibold my-3">
              <hr className="hr-width mt-3 mr-5" />
              Or
              <hr className="hr-width mt-3 ml-5" />
            </div>

            <form name="signUpForm" id="signUpForm">
              <label htmlFor="email">
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  className="input"
                  id="email"
                  placeholder="Email"
                  required
                />
              </label>

              <label htmlFor="nickName">
                <input
                  name="nickName"
                  type="text"
                  className="input"
                  id="nickName"
                  placeholder="User Name"
                  required
                />
              </label>

              <label htmlFor="fullName">
                <input
                  autoComplete="name"
                  name="nombre"
                  type="text"
                  className="input"
                  id="fullName"
                  placeholder="Full name"
                  required
                />
              </label>

              <label htmlFor="password">
                <input
                  name="contraseña"
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Password"
                  required
                />
              </label>

              <p className="conditions-text mb-4 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                tenetur deleniti maxime! Tempora.{" "}
                <button className="text-blue-900">More information</button>
              </p>
              <p className="conditions-text mb-4">
                Lorem ipsum dolor sit amet{" "}
                <button className="text-blue-900">Conditions</button>, the{" "}
                <button className="text-blue-900">Privacy policy</button> and the{" "}
                <button className="text-blue-900">Cookies policy</button>
              </p>

              <input
                type="submit"
                value="Submit"
                className="text-white bg-cyan-400 w-full h-8 font-bold text-sm rounded-lg"
                id="submitBtn"
              />
            </form>
          </div>

          <div className="sign-up-container border-solid border-2 border-gray-200 mt-3 mx-auto text-center p-6">
            <div className="">
              <h1>
                ¿Already have an account?{" "}
                <ButtonComponent onClick={handleLogIn}/>
              </h1>
            </div>
          </div>
        </div>
      </>
    )
  }else{
    return <LogInComponent/>
  }
}

export default SignUpComponent;
