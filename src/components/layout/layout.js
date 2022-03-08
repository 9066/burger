import React from 'react'
import Aux from '../../hoc/Auxil'
import classes from './layout.scss'
const layout = (props) => (
	<Aux>
		<div>ToolBar, SideDrawer, BackDrop</div>
		{/*<main style={{ marginTop: "16px" }}>*/}
		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
	
);

export default layout;