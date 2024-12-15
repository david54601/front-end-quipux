import axios from './axiosConfig';

export const crearListaConCanciones=async (data)=>{

const response = await axios.post('lists',data);
return response.data
};

export const obtenerListas= async ()=>{
    const response = await axios.get('/listas');
    return response.data;
};