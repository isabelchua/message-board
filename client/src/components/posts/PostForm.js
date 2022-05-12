import React, { useState } from "react";
import PostContext from "./../../context/post/postContext";
import { useContext } from "react";

const PostForm = () => {
	const postContext = useContext(PostContext);

	const [post, setPost] = useState({
		content: ""
	});

	const { content } = post;

	const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		postContext.addPost(post);
		setPost({
			content: ""
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>Add Message</h2>
			<textarea
				name="content"
				placeholder="type your message.."
				value={content}
				onChange={onChange}
				id=""
				cols="30"
				rows="10"
			></textarea>
			<input type="submit" value="Add message" />
		</form>
	);
};

export default PostForm;
