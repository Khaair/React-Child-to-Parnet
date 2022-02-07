import React from 'react';

 function Form({datas,kk}) {
  return (
    <div>
        <h1>{kk}</h1>
        <button onClick={()=>datas(2+3)}>Button</button>
    </div>
  )
}

export default Form