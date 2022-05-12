import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";
import PostItem from "./PostItem";

const Posts = () => {
	const postContext = useContext(PostContext);

	//console.log(postContext);
	const { posts } = postContext;
	//console.log(posts);
	return (
		<>
			{posts.map(message => (
				<PostItem key={message.id} message={message} />
			))}
		</>
	);
};

export default Posts;
