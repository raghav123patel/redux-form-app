import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://node-js-wse4.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      console.warn("Unauthorized access - maybe token expired.");
      localStorage.removeItem("token");    
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;








// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: "https://node-js-wse4.onrender.com",
// });

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if(token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//      console.log("unauthorized please login again")
//     }
//     return Promise.reject(error);
//   }
// );
// export default axiosInstance;


// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://node-js-wse4.onrender.com',
// });

// // Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (typeof window !== 'undefined') {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.log('Unauthorized. Please log in again.');
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
