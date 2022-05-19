import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";
import PostItem from "./PostItem";
import MapPost from "./MapPost";

const Posts = () => {
	const postContext = useContext(PostContext);

	const { posts, searchText } = postContext;

	return (
		<>
			{/* {posts.filter(post => (
				<PostItem
					key={post.id}
					post={post.content.toLowerCase().includes(searchText)}
				/>
			))} */}
			{searchText}
			<MapPost
				// key={post.id}
				mapPost={posts.filter(post =>
					post.content.toLowerCase().includes(searchText)
				)}
			/>
			{/* {posts.filter(post => post.content.toLowerCase().includes(searchText))} */}
			{/* {posts.map(post => (
				<PostItem key={post.id} post={post} />
			))} */}
		</>
	);
};

export default Posts;
