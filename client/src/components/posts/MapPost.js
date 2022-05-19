import React from "react";
import PostItem from "./PostItem";

const MapPost = ({ mapPost }) => {
	return (
		<div>
			{mapPost.map(post => (
				<PostItem post={post} />
			))}
		</div>
	);
};

export default MapPost;
