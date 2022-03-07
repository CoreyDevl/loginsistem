import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = ()=> ({

  validateToken: async (token: string) => {

  },

  signin: async (email: string, password: string) => {

  },

  logout: async ()=> {
    
  }

});