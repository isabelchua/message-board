import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";
import PostItem from "./PostItem";

const Posts = () => {
	const postContext = useContext(PostContext);

	const { posts, searchText } = postContext;

	return (
		<>
			{posts.filter(post => (
				<PostItem
					key={post.id}
					post={post.content.toLowerCase().includes(searchText)}
				/>
			))}

			{/* <PostItem
				// key={post.id}
				post={posts.filter(post =>
					post.content.toLowerCase().includes(searchText)
				)}
			/> */}
			{/* ))} */}
		</>
	);
};

export default Posts;
