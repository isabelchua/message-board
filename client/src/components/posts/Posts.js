import React, { useContext } from "react";
import PostContext from "./../../context/post/postContext";
import MapPost from "./MapPost";
import PostItem from "./PostItem";

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

			{/* <PostItem
				// key={post.id}
				mapPost={posts
					.filter(post => post.content.toLowerCase().includes(searchText))
					.map(post => (post = { post }))}
			/> */}

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
