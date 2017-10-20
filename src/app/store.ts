export const GET_SHORTCUTS = "GET_SHORTCUTS";
export const GET_SHORTCUTS_SUCCESS = "GET_SHORTCUTS_SUCCESS";
export const GET_SHORTCUTS_ERROR = "GET_SHORTCUTS_ERROR";

export function getShortcuts(){
	return {
		type : GET_SHORTCUTS
	}
}

const initialState = {
	data : [],
	pending : false,
	error : null 
}

export function shortcuts (state= initialState , {type , payload }) {
	console.log(type);
	
	switch (type) {
		case GET_SHORTCUTS:
		return Object.assign({},state , {pending:true ,error :null})

		case GET_SHORTCUTS_SUCCESS:
		console.log(Object.assign({},state , {data : payload , pending:false }));
		
		return Object.assign({},state , {data : payload , pending:false })

		case GET_SHORTCUTS_ERROR:
		return Object.assign({},state , {pending:false,error:"Error getting the todos "})
		
		default: 
		return state;

	}
}