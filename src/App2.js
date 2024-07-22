import React from 'react';
import './App.css';
import list from './json/list.json'

import { hovereffect, leaveeffect } from './common/module/hovereffect'

function App() {
 

  return (
    <div className="list">
      {
        list.notice.map((listvalue, idx)=>{
          return(
            <li onMouseEnter={()=>{ hovereffect(idx)}}
                onMouseLeave={()=>{ leaveeffect(idx)}}
            >{listvalue}</li>
          )
        })
      }
      <li></li>
      
    </div>
  );
}

export default App;
