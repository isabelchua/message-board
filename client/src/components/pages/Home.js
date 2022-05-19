import React from "react";
import Searchbar from "../layout/Searchbar";
import PostForm from "../posts/PostForm";
import Posts from "./../posts/Posts";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<div>
				<Searchbar />
			</div>
			<PostForm />

			<Posts />
		</div>
	);
};

export default Home;
