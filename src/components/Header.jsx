import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-20 flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 sm:px-6">
      <Link to="/" className="font-thin tracking-widest">
        FAST REACT PIZZA CO.
      </Link>
      <input
        type="text"
        placeholder="Search order #"
        className=" w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm outline-none duration-300 placeholder:text-stone-400  focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </div>
  );
};

export default Header;
