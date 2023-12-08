import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);

  const [addNum, setAddNum] = useState(false);

  const [addChar, setAddChar] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addChar) str += "!@#$%^&*()-_=+[]{}|;:',.";
    if (addNum) str += "1234567890";
    let pass = "";

    for (let i = 0; i < length; i++) {
      let randomInd = Math.floor(Math.random() * str.length);
      let c = str[randomInd];
      pass += c;
    }

    setPassword(pass);
  }, [length, addNum, addChar, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, addChar, addNum]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto rounded-lg px-4 my-8 text-white bg-gray-700">
        <h1 className="text-lg text-center py-2">Password Generator</h1>
        <div className="rounded-lg overflow-hidden flex shadow-md ">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-4 py-2 text-gray-600 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className=" bg-blue-800 text-white px-3 hover:bg-gray-500"
            onClick={copyPassword}
          >
            COPY
          </button>
        </div>

        <div className="flex text-sm justify-between py-4">
          <div className="flex">
            <input
              type="range"
              min={4}
              max={40}
              value={length}
              className="cursor-pointer mx-1"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={addNum}
              onChange={() => {
                setAddNum((prev) => !prev);
              }}
            />
            <label>Include Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={addChar}
              onChange={() => {
                setAddChar((prev) => !prev);
              }}
            />
            <label>Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
