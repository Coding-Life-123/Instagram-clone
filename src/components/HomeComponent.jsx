import React, { useState } from "react";
import { setBodyColor } from "../setBodyColor";
import { event } from "jquery";

//Componente Modal

function LocalModalComponent({ onClose }) {
  const [isEmpty, setIsEmpty] = useState(true)
  const [password, setPassword] = useState("Hola")

  function handleInputOnChange(event){
    if (event && event.target && event.target.value) {
      const { value } = event.target;
      if(value.trim() === ""){
        setIsEmpty(true)
      }else{
        setIsEmpty(false)
      }
    }
    
  }

  return (
    <>
      <dialog className="items-center flex top-0 left-0 right-0 bottom-0 justify-center bg-black/60 h-full w-full">
        <dialog
          className="bg-none absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out bg-black/60 duration-300 flex items-center justify-center"
          id="modal"
        >
          <button
            className="text-xl font-light bg-none absolute top-5 right-5 h-6 w-6 z-50 cursor-pointer"
            id="exitButton"
            onClick={onClose}
          >
            x
          </button>
          <div className="m-auto w-96 h-96 text-center bg-neutral-800 border-4 border-solid border-black rounded-2xl pt-14">
            <h1 className="instagram-text text-white text-6xl font-thin mb-11">
              Instagram Clone
            </h1>

            <div className="block center justify-center items-center">
              <form className="m-1" action="" method="get">
                <input
                  name="emailInput"
                  placeholder="Phone number, user or email"
                  id="emailFormInput"
                  className="form-inputs"
                  onChange={handleInputOnChange}
                />
              </form>

              <form className="m-1" action="" method="get">
                <input
                  name="passwordInput"
                  type="text"
                  placeholder="Password"
                  className="form-inputs"
                  onChange={handleInputOnChange}
                />
              </form>
            </div>

            <button
              className={
                isEmpty ? "log-in-button bgb" : "log-in-button"
              }
              id="logInButton"
            >
              Log In
            </button>
          </div>
        </dialog>
      </dialog>
    </>
  );
}

function HomeComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {setBodyColor({ color: "black", text: "white" })}
      <div className="stories-container"></div>

      <div id="content" className="ml-48 h-screen"></div>

      <div className="block ml-3 mt-12 items-end min-w-96 h-48 fixed top-0 right-0">
        <div className="inline-flex w-72">
          <img className="my-story" src="img-source/user-image.jpg" alt="" />
          <div className="to-white h-3">
            <h4 className="m-1 font-sans font-bold">welldoneotp</h4>
            <h3 className="m-1 font-sans font-extralight to-gray-500">David</h3>
          </div>
          <div className="items-end">
            <button
              className="text-cyan-500 text-sm bg-none border-none fixed w-1/6 mt-6 cursor-pointer"
              id="changeAccount"
              onClick={handleModalToggle}
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {showModal && <LocalModalComponent onClose={handleModalToggle} />}
    </>
  );
}

export default HomeComponent;
