import React, { useCallback, useEffect, useRef, useState } from "react";

function RgbGenerator() {
  const [r, setr] = useState(255);
  const [g, setg] = useState(255);
  const [b, setb] = useState(255);
  const [a, seta] = useState(100);
  const [color, setColor] = useState("");
  const colorRef = useRef(null);

  const generateColor = useCallback(() => {
    let c = `rgba(${r}, ${g}, ${b}, ${a / 100})`;
    setColor(c);
  }, [r, g, b, a, setColor]);

  const changeColor = useEffect(() => {
    generateColor();
  }, [r, g, b, a]);

  const generateRandomRGB = useCallback(()=>{
    setr(Math.floor(Math.random()*256));
    setg(Math.floor(Math.random()*256));
    setb(Math.floor(Math.random()*256));
  },[setr,setb,setg])

  const copyColor = useCallback(()=>{
    colorRef.current?.select();
    window.navigator.clipboard.writeText(color);
  },[color]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto rounded-lg px-4 my-8 text-white bg-gray-700">
        <h1 className="text-lg text-center py-3">Color Generator</h1>
        <div className="w-full flex h-48 gap-1">
          <div className="w-1/2 flex flex-col justify-between items-center">
            <div className="flex flex-col h-fit w-fit gap-2 mt-2">
              <div className="flex">
                <input
                  type="range"
                  min={0}
                  max={255}
                  id="r-value"
                  value={r}
                  className="mx-2"
                  onChange={(e)=>{setr(e.target.value)}}
                />
                <label htmlFor="r-value">red-r</label>
              </div>
              <div className="flex">
                <input
                  type="range"
                  min={0}
                  max={255}
                  id="g-value"
                  value={g}
                  className="mx-2"
                  onChange={(e)=>{setg(e.target.value)}}
                />
                <label htmlFor="r-value">green-g</label>
              </div>
              <div className="flex">
                <input
                  type="range"
                  min={0}
                  max={255}
                  id="b-value"
                  value={b}
                  className="mx-2"
                  onChange={(e)=>{setb(e.target.value)}}
                />
                <label htmlFor="b-value">blue-b</label>
              </div>
              <div className="flex">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={a}
                  id="a-value"
                  className="mx-2"
                  onChange={(e)=>{seta(e.target.value)}}
                />
                <label htmlFor="a-value">alpha-a</label>
              </div>
            </div>
            <div className="h-1/6 m-auto ">
              <button className=" bg-blue-800 px-4 py-1 rounded-lg text-white shadow-2xl hover:bg-gray-500"
              onClick={generateRandomRGB}>
                RANDOM COLOR
              </button>
            </div>
          </div>
          <div className="w-1/2 shadow-2xl rounded-lg flex flex-col pb-2" >
            <div className=" flex-1 rounded-xl mb-1" style={{ backgroundColor: color }}></div>
            <div className="flex rounded-lg m-1 shadow-sm overflow-hidden">
              <input
                type="text"
                className="outline-none w-full px-2 py-2 text-gray-600 text-sm"
                placeholder="rgba(r,g,b,a)"
                value={color}
                ref={colorRef}
                readOnly
              />
              <button className=" bg-blue-800 text-white px-1 hover:bg-gray-500"
              onClick={copyColor}>
                COPY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RgbGenerator;
