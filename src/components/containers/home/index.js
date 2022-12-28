import React, { useState } from 'react'
import ContextAPI from '../../concepts/contextAPI';
import SignUp from '../signup';
import './style.css'
function Home() {
	const tabContentComp = [
		{
			label: 'tab1',
			component: <SignUp />
		},
		{
			label: 'tab2',
			component: <ContextAPI />
		},
		{
			label: 'tab3', component: <p>
				tab3 content
			</p>
		}]
	const tabs = [
		{
			label: 'tab1', component: <>
				<span>
					React-Router-Prompt
					<i class="fa-sharp fa-solid fa-circle-exclamation tab-icon"></i>
				</span>
			</>
		},
		{ label: 'tab2', component: <><span>Context API Demo <i class="fa-sharp fa-solid fa-code"></i></span> </> },
		{ label: 'tab3', component: <p>Tab3</p> }]
	const [active, setActive] = useState(tabs[0].label);
	const handleClick = (e, newActiveTab) => {
		e.preventDefault();
		setActive(newActiveTab)
	}

	return (
		<div>
			<div className='tab-container'>
				<div className='tabs'>
					{tabs.map((tab) =>
						<h3 onClick={(e) => handleClick(e, tab.label)} className={tab.label === active ? 'active' : ''}>{tab.component}</h3>
					)}
				</div>
				<div className='tab-content'>
					{tabContentComp.map((tab) =>
						<div className={tab.label === active ? 'active' : ''}>{tab.component}</div>)
					}
				</div>

			</div>
		</div>
	)
}

export default Home