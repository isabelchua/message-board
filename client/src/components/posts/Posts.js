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
			{posts.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</>
	);
};

export default Posts;
