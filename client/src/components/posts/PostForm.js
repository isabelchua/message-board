import React, { useEffect, useState } from "react";
import PostContext from "./../../context/post/postContext";
import { useContext } from "react";
import { CLEAR_CURRENT } from "../../context/types";

const PostForm = () => {
	const postContext = useContext(PostContext);

	const { clearCurrent, current, addPost, updatePost } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				content: ""
			});
		}
	}, [postContext, current]);

	const [post, setPost] = useState({
		content: ""
	});

	const { content } = post;
	const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			addPost(post);
		} else {
			updatePost(post);
		}
		//postContext.addPost(post);
		setPost({
			content: ""
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>{current ? "Update Post" : "Add Post"}</h2>
			<textarea
				name="content"
				placeholder="type your message.."
				value={content}
				onChange={onChange}
				id=""
				cols="30"
				rows="10"
			></textarea>
			<input type="submit" value={current ? "Update Post" : "Add Post"} />
			{current && (
				<div>
					<button onClick={clearAll}>Clear</button>
				</div>
			)}
		</form>
	);
};

export default PostForm;
