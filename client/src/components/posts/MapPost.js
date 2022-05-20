import React from "react";
import PostItem from "./PostItem";

const MapPost = ({ mapPost }) => {
	return (
		<div>
			{mapPost.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default MapPost;
