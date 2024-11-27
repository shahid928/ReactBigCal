import axios from 'axios';
const fetchClient = () => {
  const defaultOptions = {
    baseURL: "",
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Create instance
  let instance = axios.create(defaultOptions);
  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
  
    let token = sessionStorage.getItem('token');
    if(token.length>0){
        config.headers.Authorization =  token.length>0 ? `Bearer ${token}` : ''; 
    }
    return config;
  });

  return instance;
};

export default fetchClient();