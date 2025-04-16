import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

function App() {
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "12345678901234567890";
    const special = "@#$%^&*()_-=.,<>?";
    let str = alphabets;
    if (num) str += numbers;
    if (char) str += special;
    let newPass = "";
    for (let i = 0; i < length; i++) newPass += str.charAt(Math.floor(Math.random() * str.length));
    setPassword(newPass);
  }, [num, char, password]);
  const copyPassword=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    generatePassword();
  }, [num, length, char]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Password generator</h1>
      <div>
        <input className='text-2xl border-white border-4' value={password} ref={passwordRef} />
        <button onClick={copyPassword} className='border-4 border-white'>Copy</button>
      </div>
      <form className='flex flex-col w-48'>
        <label htmlFor="length">{length}</label>
        <input id='length' type="range" min="8" max="30" placeholder='length' onChange={e => setLength(e.target.value)} />
        <div>
          <input type="checkbox" defaultChecked={num} id="num__checkbox" onChange={() => setNum(!num)} />
          <label htmlFor="num__checkbox">Numbers</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={char} name="" id="char__checkbox" onChange={() => setChar(!char)} />
          <label htmlFor="char__checkbox">Characters</label>
        </div>

      </form>
    </>
  )
}

export default App
