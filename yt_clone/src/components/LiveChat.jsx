import React, { useEffect } from "react";
import ChatMessaage from "./ChatMessaage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, randomMessage } from "./utlis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(Math.floor(Math.random() * 30)),
        })
      );
    }, 500);
  }, []);

  return (
    <div className="overflow-y-auto  h-[450px] flex flex-col-reverse pb-2 overflow-x-hidden       ">
      {chatMessage.map((elem, index) => (
        <ChatMessaage key={index} name={elem.name} message={elem.message} />
      ))}
    </div>
  );
};

export default LiveChat;
