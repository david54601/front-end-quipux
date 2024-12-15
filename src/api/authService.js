import axios from './axiosConfig';


export const login = async (username,password)=>{
    const response=await axios.post('/api/auth/login',{username,password}); 
    const token=response.data.token;
    return token;
};

export const logout =()=>{
    localStorage.removeItem('token');
};

export const isAuthenticated=()=>{
    return !!localStorage.getItem('token');
};