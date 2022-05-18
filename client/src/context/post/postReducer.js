import {
	SET_CURRENT,
	ADD_POST,
	DELETE_POST,
	CLEAR_CURRENT,
	UPDATE_POST,
	FILTER_POSTS,
	CLEAR_FILTER
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, action.payload]
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload)
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		default:
			return state;
	}
};
