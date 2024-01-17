import React from "react";
import Comment from "./Comment";
import { nanoid } from "nanoid";

const CommentContainer = () => {
  const commentData = [
    {
      name: "basuraj",
      text: "lorem isume is lorem isum",
      replies: [
        {
          name: "basuraj",
          text: "lorem isume is lorem isum",
          replies: [
            {
              name: "basuraj",
              text: "lorem isume is lorem isum",
              replies: [
                {
                  name: "basuraj",
                  text: "lorem isume is lorem isum",
                  replies: [
                    {
                      name: "basuraj",
                      text: "lorem isume is lorem isum",
                      replies: [
                        {
                          name: "basuraj",
                          text: "lorem isume is lorem isum",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
      ],
    },
    {
      name: "saurbh",
      text: "lorem isume is lorem isum",
      replies: [
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
      ],
    },
    {
      name: "rahul",
      text: "lorem isume is lorem isum",
      replies: [
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
      ],
    },
    {
      name: "zohair",
      text: "lorem isume is lorem isum",
      replies: [
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
        { name: "basuraj", text: "lorem isume is lorem isum", replies: [] },
      ],
    },
    { name: "ajay", text: "lorem isume is lorem isum", replies: [] },
    { name: "akash", text: "lorem isume is lorem isum", replies: [] },
  ];

  const CommentList = ({ commentData }) => {
    return commentData.map((item, index) => (
      <div className="" key={index}>
        <Comment  data={item} />
        <div className="pl-5 border border-l-black ml-5 ">
          <CommentList commentData={item.replies}  />
        </div>
      </div>
    ));
  };

  return (
    <div className="px-9 p-2 ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
