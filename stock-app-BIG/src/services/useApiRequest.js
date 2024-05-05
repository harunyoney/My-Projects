import axios from "axios";
import { useDispatch } from "react-redux";

import React from "react";

const useApiRequest = () => {
  const dispatch = useDispatch();
  const login = async (userData) => {
    const BASE_URL = "https://11136.fullstack.clarusway.com";

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, userData);

      console.log(data);
    } catch (error) {}
  };
  const register = () => {};
  const logout = () => {};
  return { login, register, logout };
};

export default useApiRequest;
