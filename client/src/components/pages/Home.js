import React from "react";
import PostForm from "../posts/PostForm";
import Posts from "./../posts/Posts";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<PostForm />
			<Posts />
		</div>
	);
};

export default Home;
