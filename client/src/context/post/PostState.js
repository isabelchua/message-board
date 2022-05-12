import React, { useReducer } from "react";
import uuid from "uuid";
import PostContext from "./postContext";
import postReducer from "./postReducer";
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
				id: 1,
				name: "Jill Johnson",
				email: "jill@gmail.com",
				post: "111-111-1111"
			},
			{
				id: 2,
				name: "Sara Watson",
				email: "sara@gmail.com",
				post: "222-222-2222"
			},
			{
				id: 3,
				name: "Harry White",
				email: "harry@gmail.com",
				post: "333-333-3333"
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

	return (
		<PostContext.Provider value={{ posts: state.posts }}>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
