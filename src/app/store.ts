export const GET_SHORTCUTS = "GET_SHORTCUTS";
export const GET_SHORTCUTS_SUCCESS = "GET_SHORTCUTS_SUCCESS";
export const GET_SHORTCUTS_ERROR = "GET_SHORTCUTS_ERROR";

export const GET_SHORTCUT = "GET_SHORTCUT";
export const GET_SHORTCUT_SUCCESS = "GET_SHORTCUT_SUCCESS";
export const GET_SHORTCUT_ERROR = "GET_SHORTCUT_ERROR";

export function getShortcuts(){
	return {
		type : GET_SHORTCUTS
	}
}

export function getShortcut(id){
	return {
		type : GET_SHORTCUT , 
		id : id 
	}
}
const initialState = {
	data : [],
	pending : false,
	error : null 
}

export function shortcuts (state= initialState , {type , payload }) {
	
	switch (type) {
		case GET_SHORTCUTS:
		return Object.assign({},state , {pending:true ,error :null})

		case GET_SHORTCUTS_SUCCESS:
		console.log(Object.assign({},state , {data : payload , pending:false }));
		
		return Object.assign({},state , {data : payload , pending:false })

		case GET_SHORTCUTS_ERROR:
		return Object.assign({},state , {pending:false,error:"Error getting the shortcuts "})

		default: 
		return state;

	}

}
export function shortcut (state= initialState , {type , payload }) {
	
	switch (type) {
		
		case GET_SHORTCUT:
		return Object.assign({},state , {pending:true ,error :null})

		case GET_SHORTCUT_SUCCESS:
		console.log(Object.assign({},state , {data : payload , pending:false }));
		return Object.assign({},state , {data : payload , pending:false })

		case GET_SHORTCUT_ERROR:
		return Object.assign({},state , {pending:false,error:"Error getting the shortcut "})

		default: 
		return state;

	}

}
const userState = {
	pending : false,
	isAuthenticated: false,
	user: null,
	access_token: null
};


export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const ACCESS_SUCCESS = "ACCESS_SUCCESS";

export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export function login({username , password}){
	return {
		type : LOGIN , 
		user : {username , password} 
	}
}


export function signUp(user){
	return {
		type : SIGNUP , 
		user : user
	}
}

export function currentUser (state= userState , {type , payload }) {
	console.log(type);
	
	switch (type) {
		
		case LOGIN:
		return Object.assign({},state , {pending : true })
		
		case LOGIN_SUCCESS:
		return Object.assign({},state , {pending : false , isAuthenticated : true , user : payload , access_token : payload })
		
		case LOGIN_ERROR:
		return Object.assign({},state , {pending : false , error:"An error has occured while login in  "})
		
		case ACCESS_SUCCESS:
		return Object.assign({},state , {pending : false });
		
		case SIGNUP:
		return Object.assign({},state , {pending : true })
		
		case SIGNUP_SUCCESS:
		return Object.assign({},state , {pending : false , user : payload  })
		
		case SIGNUP_ERROR:
		return Object.assign({},state , {pending : false , error:"An error has occured while login in  "})

		

		default: 
		return state;

	}


}