import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsername } from "../redux/reducers/userSlice";

const CreateUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleUserName = () => {
    dispatch(addUsername(name));
  };
  return (
    <div className="flex flex-col items-center">
      <p className=" text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your full name"
        className="input my-6 w-72 rounded-full px-4 py-3 text-sm outline-none ring ring-stone-200 duration-300 focus:ring-yellow-500"
      />
      {name && (
        <button
          className="rounded-full bg-yellow-400 px-3 py-3 text-sm font-semibold tracking-wide text-stone-800 outline-none duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          onClick={handleUserName}
        >
          START ORDERING
        </button>
      )}
    </div>
  );
};

export default CreateUser;
