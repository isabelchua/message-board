import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";

const Searchbar = () => {
	const postContext = useContext(PostContext);

	const { setSearchText } = postContext;

	return (
		<div>
			<input onChange={e => setSearchText(e.target.value)} type="text" />
		</div>
	);
};

export default Searchbar;
