import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<h1>Message Board</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
