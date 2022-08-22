import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { allCompleted, clearCompleted } from "../redux/todos/actions";

export default function Header() {
  const dispatch = useDispatch();

  const complatedAll = () => {
    dispatch(allCompleted());
  };

  const handleClearComplated = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-10 h-8 bg-no-repeat bg-contain`}
        >
          <img src={plusImage} alt="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={complatedAll}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearComplated}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
