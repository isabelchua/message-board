import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import PostContext from "./postContext";
import postReducer from "./postReducer";
//import { createContext } from "react";

import {
	ADD_POST,
	DELETE_POST,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_POST,
	FILTER_POSTS,
	CLEAR_FILTER
} from "../types";

const PostState = props => {
	const initialState = {
		posts: [
			{
				id: "1",
				name: "Cake",
				shop: "5",
				image: "https://i.imgur.com/w6igL9E.jpg",
				content: "test content",
				rating: 4,
				userid: "1",
				shopid: "5f5ada9ee9e6931cbcea8500",
				date: ""
			},
			{
				id: "2",
				name: "California Maki",
				shop: "3",
				image: "",
				content: "hello",
				rating: 5,
				userid: "2",
				date: "Septemper 2 2020",
				shopid: "5f5ada9ee9e6931cbcea8500"
			},
			{
				id: "3",
				name: "Bulalo",
				shop: "1",
				image: "",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				rating: 3,
				userid: "3",
				shopid: "5f5ada9ee9e6931cbcea8500"
			}
		],
		current: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	// Add POST
	const addPost = post => {
		post.id = uuidv4();
		dispatch({ type: ADD_POST, payload: post });
	};

	//Delete POST
	const deletePost = id => {
		dispatch({ type: DELETE_POST, payload: id });
	};
	// Set Current POST
	const setCurrent = post => {
		dispatch({ type: SET_CURRENT, payload: post });
	};

	// Clear Current POST
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update POST
	const updatePost = post => {
		dispatch({ type: UPDATE_POST, payload: post });
	};
	//Filt;er POSTs

	//clear Filter
	//const postContext = createContext();

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				current: state.current,
				addPost,
				deletePost,
				updatePost,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
