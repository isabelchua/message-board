import React from "react";

const PostItem = ({ message }) => {
	const { id, name, post } = message;
	return (
		<div>
			<p>{name}</p>
			<p>{post}</p>

			<button>edit</button>
			<button>delete</button>
		</div>
	);
};

export default PostItem;
