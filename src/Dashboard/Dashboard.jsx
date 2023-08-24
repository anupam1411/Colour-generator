import { React, useState } from "react";
import Values from "values.js";
import SingleColor from "../EventList/SingleColor";
import { IoColorPalette } from "react-icons/io5";

function Dashboard() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ff00ff").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: color }}>
      <div className="grid grid-cols-3 gap-x-[250px]  pb-2 pt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div class="text-2xl font-medium leading-tight  pt-1 pl-4 text-gray-800 inline-block">
          <IoColorPalette className="inline-block" />{" "}
          <div className="inline-block">COLOUR GENERATOR</div>
        </div>

        <div></div>

        <section className="flex-col">
          <form>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#ff00ff"
              className={`${error ? "error" : null}`}
              //   eslint-disable-next-line react/jsx-no-duplicate-props
              className="w-[200px]
              px-4
              py-2
              text-gray-700
              bg-white bg-clip-padding
               border-solid
              rounded-l-lg
              m-0
              focus:text-gray-700 focus:bg-white border-2 border-r-0 border-gray-800"
            />
            <button
              className=" px-4
              py-2 bg-transparent hover:bg-gray-800 text-gray-700 hover:text-white border-2 border-l-1 border-gray-800 hover:border-transparent rounded-r-lg "
              type="submit"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </form>
        </section>
      </div>
      <section className="pt-10 grid grid-rows-3 h-[700px] w-full grid-flow-col gap-4">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Dashboard;
