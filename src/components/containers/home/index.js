import React, { useState } from 'react'
import SignUp from '../signup';
import './style.css'
function Home() {
  const tabContentComp = [
    {
      label: 'tab1',
      component: <SignUp/>
    },
    {
      label: 'tab2',
      component: <p>
        tab2 content
      </p>
    },
    {
      label: 'tab3', component: <p>
        tab3 content
      </p>
    }]
  const tabs = [{ label: 'tab1', name: "React-Router-Prompt" }, { label: 'tab2', name: "Tab2" }, { label: 'tab3', name: "Tab3" }]
  const [active, setActive] = useState(tabs[0].label);
    const handleClick = (e, newActiveTab) =>{
      e.preventDefault();
      setActive(newActiveTab)
    }
  return (
    <div>
      <h1>React Concepts</h1>
      <div className='tab-container'>
        <div className='tabs'>
          {tabs.map((tab) => 
            <h3 onClick={(e)=>handleClick(e, tab.label)} className={tab.label === active ? 'active' : ''}>{tab.name}</h3>
          )}
        </div>
        <div className='tab-content'>
          {tabContentComp.map((tab) =>
            <div className={tab.label === active ? 'active' : ''}>{tab.component}</div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Home