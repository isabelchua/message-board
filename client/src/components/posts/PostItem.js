import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";

const PostItem = ({ post }) => {
	const postContext = useContext(PostContext);

	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { id, name, content } = post;

	const onDelete = () => {
		deletePost(id);
		clearCurrent();
	};

	return (
		<div>
			<p>{name}</p>
			<p>{content}</p>

			<button onClick={() => setCurrent(post)}>edit</button>
			<button onClick={onDelete}>delete</button>
		</div>
	);
};

export default PostItem;
