import React from 'react'
import Aux from '../../hoc/Auxil'
import classes from './layout.css'
const layout = (props) => (
	<Aux>
		<div>ToolBar, SideDrawer, BackDrop</div>
		<main style={{ marginTop: "16px" }}>
			{props.children}
		</main>
	</Aux>
	
);

export default layout;