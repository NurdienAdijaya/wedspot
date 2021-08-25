import * as types from '../const/types'

export const userLogin = (email, password) => {
    return {
      type: types.LOGIN_PENDING,
      user_email: email,
      user_password: password,
    };
}           
  
export const userRegister = ( email, password) => {
    return {
      type: types.REGISTER_PENDING,
      user_email: email,
      user_password: password
    };
};

export const logout = () =>{
     return {
        type:types.LOGOUT
    }
}

export const getUser = () =>{
    return{
        type:types.GET_USER
    }
}