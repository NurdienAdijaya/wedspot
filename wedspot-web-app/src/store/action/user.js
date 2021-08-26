import * as types from '../const/types'

export const userLogin = (email, password) => {
    return {
      type: types.LOGIN_PENDING,
      user_email: email,
      user_password: password,
    };
}           
  
export const userRegister = ( email, password, fullname) => {
    return {
      type: types.REGISTER_PENDING,
      user_email: email,
      user_password: password,
      user_fullname: fullname
    };
};

export const getUser = () =>{
    return{
        type:types.GET_USER
    }
}