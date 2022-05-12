import React from "react";

const PostItem = ({ post }) => {
	const { id, name, content } = post;
	return (
		<div>
			<p>{name}</p>
			<p>{content}</p>

			<button>edit</button>
			<button>delete</button>
		</div>
	);
};

export default PostItem;
