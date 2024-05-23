import { Button, Tooltip } from "@mui/material";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import useBlogRequests from "../services/useBlogRequests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchStart } from "../features/blogsSlice";
import useAxios from "../services/useAxios";

const IconComp = ({ blog, users, page,inBlog }) => {
  const { liked,pages,blogs } = useSelector((state) => state.blogs);
  const { currentUserId } = useSelector((state) => state.auth.user);
  const { likesss, getBlogs } = useBlogRequests();
  const [likeCount, setlikeCount] = useState(blog?.likes?.length);

  const [likers, setLikers] = useState();
  const [userLiked, setUserLiked] = useState(blog?.likes?.includes(currentUserId));
  

//  console.log(blog?.likes?.length);

  const getLikers = (likes) => {
    return likes
      ?.map((userId) => users.find((user) => user._id === userId)?.username)
      .filter(Boolean) || [];
  };
 

    const handleLike = async () => {
   
    // console.log(currentPage);
    await likesss(blog?._id);
     const currentPage= Number(sessionStorage.getItem("page"))
    if(inBlog) {
      getBlogs(currentPage)
      const filteredblog=blogs.filter(item=>item._id===blog._id)
      setLikers(getLikers(filteredblog[0]?.likes))
      // console.log(likers);
      setlikeCount(filteredblog[0]?.likes.length)
    }
  };
  useEffect(() => {
    setLikers(getLikers(blog?.likes));
  }, [blog?.likes, blog._id, page, liked,likeCount]);

  useEffect(() => {
    setUserLiked(blog?.likes?.includes(currentUserId))
    if (liked?.id === blog?._id) {
      setUserLiked(liked?.data?.didUserLike);
      
    } 
    
  }, [liked, blog?._id, page,likeCount,handleLike]);



  

  return (
    <div className="flex justify-between flex-nowrap items-center space-x-4 mt-2 mb-2">
        <div className="flex justify-between flex-nowrap items-center space-x-4 mx-2 gap-4">
          <Tooltip
            title={likers?.length ? likers.join(", ") : "No likes yet"}
            arrow
          >
            <span className="flex flex-nowrap items-center gap-2">
              <BiLike
                onClick={handleLike}
                className={`scale-125 cursor-pointer ${
                   userLiked ? "text-red-600" : ""}`}
              />
              {likeCount}
            </span>
          </Tooltip>
          <span className="flex flex-nowrap items-center gap-2">
            <GoCommentDiscussion className="scale-125 cursor-pointer" />
            {blog?.comments?.length}
          </span>

          <span className="flex flex-nowrap items-center gap-2">
            <GrView className="scale-125 cursor-pointer" />
            {blog?.countOfVisitors}
          </span>
        </div>
        <div>
          <Button sx={{ marginRight: "5px" }} variant="contained">
            <Link to={`/details/${blog._id}`}>Read More</Link>
          </Button>
        </div>
      </div>
  );
};

export default IconComp;
