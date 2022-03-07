import React from 'react'
import Aux from '../../hoc/Auxil'
const layout = (props) => (
	<Aux>
		<div>ToolBar, SideDrawer, BackDrop</div>
		<main>{props.children}</main>
	</Aux>
	
);

export default layout;