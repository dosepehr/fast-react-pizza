import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsername } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUserName = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(addUsername(name));
      navigate("/menu");
    } else {
      setWarning(true);
    }
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => handleUserName(e)}
    >
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
        <button className="rounded-full bg-yellow-400 px-3 py-3 text-sm font-semibold tracking-wide text-stone-800 outline-none duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2">
          START ORDERING
        </button>
      )}
      {!name && warning && <span>please provide us your name😅</span>}
    </form>
  );
};

export default CreateUser;
