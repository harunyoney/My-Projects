import React, { useEffect } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"

import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useSelector } from "react-redux"
import useApiRequest from "../services/useApiRequest"
import useBlogRequest from "../services/useBlogRequest"

function Home () {
  const {getBlogs} =useBlogRequest()
  const {blogs}=useSelector(state=>state.blogs)

  useEffect(() => {
    getBlogs()
  }, [])
  console.log(blogs);

  return (
    

    <div>
      {blogs.map((blog)=> <div>{blog.title}</div>      )}
      


    </div>
  )
}

export default Home
