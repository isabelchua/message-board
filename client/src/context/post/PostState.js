import React, { useReducer } from "react";
import uuid from "uuid";
import PostContext from "./postContext";
import postReducer from "./postReducer";
//import { createContext } from "react";

import {
	ADD_POST,
	DELETE_POST,
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
				content:
					"Excellent! Staff are very friendly! Definitely will come back! Very family style! Original presentation! The pakbet was served in a hallowed squash! Nice!!",
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
				content: "Soooo good!",
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
				content: "Soooo good!",
				rating: 3,
				userid: "3",
				shopid: "5f5ada9ee9e6931cbcea8500"
			}
		]
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	// Add POST

	//Delete POST

	// Set Current POST

	// Clear Current POST

	// Update POST

	//Filt;er POSTs

	//clear Filter
	//const postContext = createContext();

	return (
		<PostContext.Provider value={{ posts: state.posts }}>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
