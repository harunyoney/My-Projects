import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import { blogSuccess, fetchStart } from "../features/blogSlice";

const useBlogRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosPublic, axiosToken } = useAxios();

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic("/blogs/?limit=7&page=1");
      console.log(data);
      dispatch(blogSuccess(data));
    } catch (error) {
      console.log("object");
    }
  };

  return { getBlogs };
};

export default useBlogRequest;
