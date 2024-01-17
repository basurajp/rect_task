import React, { useEffect, useState } from "react";
import ChatMessaage from "./ChatMessaage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomName, randomMessage } from "./utlis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setliveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(Math.floor(Math.random() * 30)),
        })
      );
    }, 10000);
  }, []);

  return (
    <div className="">
      <div className="overflow-y-auto  h-[450px] flex flex-col-reverse pb-2 overflow-x-hidden       ">
        <div className="">
          {chatMessage.map((elem, index) => (
            <ChatMessaage key={index} name={elem.name} message={elem.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2  border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Basuraj",
              message: liveMessage,
            })
          
          );
          setliveMessage('')
        }}
      >
        <input
          className="px-2 py-1 border border-black w-[80%] rounded-md  "
          type="text"
          value={liveMessage}
          onChange={(e) => setliveMessage(e.target.value)}
          placeholder="enter message"
        />
        <button className="px-2 py-1 bg-green-400 text-white font-semibold ml-1 rounded-md ">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
