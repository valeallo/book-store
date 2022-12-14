import React, { useState } from "react";

const FormLogin = () => {
  const [formValue, setFormValue] = useState({});

  const saveToLocalstorage = () => {
    localStorage.setItem("Faty", JSON.stringify(formValue));
  };
  return (
    <form className=" bg-[#FFF9B0] w-[500px] h-[300px] rounded-lg flex items-center">
      <div className="container flex flex-col items-center justify-center">
        <div>
          <input
            className="p-2 rounded-lg mb-4"
            type="email"
            placeholder="e-mail"
            onChange={(e) =>
              setFormValue({
                ...formValue,
                email: e.target.value,
              })
            }
          ></input>
        </div>
        <div>
          <input
            className="p-2 rounded-lg mb-4"
            type="password"
            placeholder="password"
            onChange={(e) =>
              setFormValue({
                ...formValue,
                password: e.target.value,
              })
            }
          ></input>
        </div>
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 p-2 rounded-lg mb-2 bg-purple-100 "
          onClick={() => saveToLocalstorage()}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
