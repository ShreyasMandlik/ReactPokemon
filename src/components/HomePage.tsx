import React, { FormEvent, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [inputText, setInputText] = useState("");

  const nav = useNavigate();

  function inputHandler(e: FormEvent<HTMLInputElement>) {
    setInputText((e.currentTarget as HTMLInputElement).value);
  }

  function buttonHandler() {
    nav(`/pokemons/${inputText}`);
  }

  return (
    <>
      <div>
        <span className="my-4 mx-3">PokeApi</span>
        <input
          type="text"
          className="input1 my-4 mx-3"
          onChange={inputHandler}
        ></input>
        <button className="search my-4 mx-3" onClick={buttonHandler}>
          Search
        </button>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default HomePage;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
