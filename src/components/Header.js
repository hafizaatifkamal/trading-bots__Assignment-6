import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

	const cartItemCount = useSelector((state) => state.allBots.cartItemCount);

	return (
		<div>
			<div>
				<Link to="/">
					<h3>Dashboard</h3>
				</Link>
				<div>
					<p>Cart - {cartItemCount.length}</p>
				</div>
			</div>
		</div>
	)
};

export default Header;