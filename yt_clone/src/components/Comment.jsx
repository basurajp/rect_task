import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 bg-zinc-100 rounded-lg gap-4 my-2">
      
      <img className="w-12 h-12 items-center"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAaVBMVEX///8AAAD8/PwEBAT19fX5+fnx8fHn5+fOzs4iIiLb29vf39+9vb3u7u6zs7OqqqphYWGHh4cvLy+Xl5eBgYFaWlqjo6OdnZ1ra2vV1dUODg5wcHBDQ0OPj48oKChOTk47OzsXFxd4eHhxdtEdAAAE3UlEQVR4nO2cC5OyOgyGaaFcC4iAoIKI//9Hfr14WVdRegxx50zfnVlnFeXZJjRpUnQcKysrKysrKyurOaLi56/qj5L9Tay/RhVsQ6HY+zaHlhodGuRtfTyMuzFaD3Uf+reXvoiV5Ctyr3XB2bexvPwoUVz3zKQfo1N4wf6KGN/9GisBqBn3wfew0koP0XW07qzJv8JEqbMdnuDctCs9cRT+oPH1SywxhieGHpeoE+5ufv4ci5DKR3eycD3NdAYTr1eYXPJUrHsJdVWGh6V8fv9mtC4aQ9RpjLsvXOvOmDVexKROOpC5XCRH43KcDTn79TsscUiXolky7WZ6lxLegGXzoYRqHwmLVkZcJEbiSiIzrgKJi5thkQOS3xuakZAABcs5mnJhZGLCJL9z1LdCmClkSm+KRZrluQRYYMzVo3AlxlzF8tejOIM5F8Z4OY5vzFWicDnGXEiR+2DKhbSSbE25kAK3WZojhINlfEG2SFx+bULlYrmXTu9nQp0TfBzFh5n5vTqqx1o/UloYWDGKHbSiTmyQSWNl0SpG9vPWj0IRUrKqwbx63roWtXAivSWcacUTdsEwn5VND5h9BjUErJyB1SFei1cVk6Xoi2+tk2/UyunGnXB+V0/09RYfSxXA+dQ0pjsLvvMFKzJPnDI4PfV+idWpaI1XJj+fJyj2Mhwz/jy32FWqDZP1aLOqMmDajMKrMyb/5u1DXj30KoUIKkIOTeqg1AslVlhrY+1Vgky3m3a8QR0Lrqhopkvpdbg8lMLy+qtrk9NWTZzUS7KmLMtmE6ZMPeHzW/OoQCkYblvdzdNkUcsfXYjGjXI719VHrRCGjP/2pvG4z9PrfCDcLylXa3JfRo+u0XsJTxOfSZvnExbpqnKT503fTjTZekYXolKf2pAXkees568vl01TFRInzuv+enzU3ltsupiV1k+S7Rewo3StSd+aqwJ+94KMc9lo0n15pgY6jqv9G7t5LbRXgl55i3/TN+pVTUgkitBc85eyr9QyWC7j3suUNrAXpT8AWFH6J2zKT+csfuZpzwC5AuOS6jO5KoSFQAMmpy4Yp9eqQaiUm5p3Xl4JbhJrPp9Rf6iCmiuCDpRrvQWhouZ18Vdyodp+1Pm9r/FTHWAMmQJjQfU/QM2oVIEULoDNKBxsgDBkOnMHmgHXYQsQvcMRlksqA4hFOTwW6T/noqcFuOrPHYwZNc9mqvu8kiLzesAgpAWQHQavd/UaS5Wwd58XeGgGkhP+4CJA+4Dj19uzTblcMmYA872spvZgUPLXEIItu89FyU8vAPn+qIRcpwU9uawbPhN4STOGCN/rDex6W7lZ/ukMe6gS6VngRTB/I3cW/gdj6rec4sVKmd6PMTPDi6rFNulQVW7Sl6bhmI09cIHpgUz8jsthNIE6tpwhtIgEXMCL2cFptZH30lGsTiRLymH9pvUeHff8G/f3Jbxsh+ebfw/dqshCrA3uj2JpzLOmaIduHSl1Q1uVOQ8D72t3p/04MWXM02IMekY31rkR9dduXLWysrKysrKysrKysrKysvrfa6ocQacPWqCCIcvaXqofddGP0vN39eiKt69vSqA/nr7VUu4fAEHVScJMfZQXOpxdT3/5xip+t23qAuwEGXV44uQFi6vSS7hXnqrsVDVOFjgs97bFu7bHP4r1NyeTM3W8AAAAAElFTkSuQmCC"
        alt="user image "
      />
      <div className="">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
