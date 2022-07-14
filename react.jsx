import React, {useState} from 'react'

export const react = () => {
  const [name, setName] = useState('');
  document.title = name;
  console.log(name);
  return (
    <div>
      <input id="input-text" type="text" value={name} onInput={e => setName(e.target.value)}/>
      <div id="div-text">Hello, {name}</div>
    </div>
  )
}
