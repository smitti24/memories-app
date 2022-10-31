import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";
import { AiFillLike, AiFillDelete, AiOutlineLike } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

function Post({ postData, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (postData?.likes?.length > 0) {
      return postData?.likes?.find(
        (like) => like === (user?.result?.sub || user?.result?._id)
      ) ? (
        <>
          <AiFillLike className="text-2xl" />
          {postData?.likes?.length > 2
            ? `You and ${postData?.likes?.length} others liked this post.`
            : `${postData?.likes?.length} like${
                postData?.likes?.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <AiOutlineLike className="text-2xl" />
          &nbsp;{postData?.likes?.length}&nbsp;
          {postData?.likes?.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <AiFillLike className="text-2xl" />
        &nbsp;Like{" "}
      </>
    );
  };

  const isCreator = () => {
    return (
      user?.result?.sub === postData?.creator ||
      user?.result?._id === postData?.creator
    );
  };

  return (
    <>
      <Card className="w-96">
        <CardHeader className="relative h-56">
          <div className="flex font-bold">
            <span className="absolute my-4 mx-4 left-0">{postData?.title}</span>
            {isCreator() && (
              <span
                className="absolute my-4 mx-4 right-0 text-xl hover:text-2xl cursor-pointer"
                onClick={() => setCurrentId(postData?._id)}
              >
                <FaEdit />
              </span>
            )}
          </div>

          <img
            src={postData?.selectedFile}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody>
          <div className="flex justify-between">
            <Typography variant="h5" className="mb-2">
              {postData?.name}
            </Typography>
            <Typography variant="h8" className="mb-2">
              {moment(postData?.createdAt).fromNow()}
            </Typography>
          </div>

          <div>
            <Typography variant="small" className="mb-2" component="div">
              <div className="flex">
                {postData?.tags?.map((tag) => (
                  <div> &nbsp; #{tag}</div>
                ))}
              </div>
            </Typography>
          </div>

          <Typography variant="h3" className="m-4 text-center">
            {postData?.message}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography
            variant="large"
            className="hover:cursor-pointer"
            onClick={() => user?.result && dispatch(likePost(postData?._id))}
          >
            <div className="align-middle flex">
              <Likes></Likes>
            </div>
          </Typography>
          {isCreator() && (
            <Typography
              variant="large"
              color="gray"
              className="hover:cursor-pointer"
              onClick={() => dispatch(deletePost(postData?._id))}
            >
              <div className="align-middle flex">
                <AiFillDelete className="text-2xl" />
                <span>Delete</span>
              </div>
            </Typography>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default Post;
