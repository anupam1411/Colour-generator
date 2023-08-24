import { React, useState, useEffect } from "react";
import rgbToHex from "../Utils/Utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color${
        index > 10
      } && color-light rounded-lg border-2 border-gray-500`}
      style={{
        background: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="color-value pl-1 text-lg">{hexValue}</p>
      <p className="percent-value text-center ">{weight}%</p>
      <div className="right-0 w-[200px] text-center bottom-0 ">
        {alert && (
          <p className="alert font-thin">copied to clipboard</p>
        )}
      </div>
    </article>
  );
};

export default SingleColor;
