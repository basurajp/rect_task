import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { YOUTUBE_SEARCH_API } from "./utlis/constant";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchData();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setsuggestion(json[1]);
  };

  return (
    <>
      <div className="w-full h-28  flex justify-between items-center border shadow-lg">
        <div className="flex gap-3  ml-4 items-center ">
          <img
            onClick={handleToggleClick}
            className="w-8 h-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"
            alt="ham menu "
          />
          <img
            className="h-14 cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA81BMVEX////+AAAoKCgmJiYjIyMAAAD7AAAQEBD6+voYGBhNTU0TExORkZG5ubkHBwfIyMjz8/M4ODhvb2+urq5aWloeHh6oqKjV1dX6bnAbGxvt7e12dnbf39/5//98fHwvLy9EREShoaFnZ2f//P/l5eU8PDzPz8+IiIjFxcX+3t70AABXV1eZmZmEhIT7KCe3t7f76On98vH/7PD86+b6zcn9t7L9pqH2l5T6hof+aWv9YF7+U1T/SU35PD35IyP6Gxf9tK34LzD3amL5oaH819P9iX/7vb78kpj8e3f6x779Q0L39Oj4fXb539X6OzP5foD2pKVMzJ7HAAAL1ElEQVR4nO2cC1vaSBfHY64TAwHEGBMdQG5axBaqra20tXRbX1+76/b7f5qda0jCJUCAus+ef58iCWGS+XFm5syZkygKCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAv271VKweIdTn6S30x+22J/WVq7q3yGEFUwpkf+YvMFoOBy+HXC9iiR2XA8GwyFCCv8K+UPIIYT/s/wwqTzG169u3r2//XD88W706fN4/OW+Z5rmnklf07r/8nr89Gl09/Hxw+37h5tXA8b8d1fjtwnjrx/HDNbeHn1lf+grk4TG3otPTHkMU2/87R1+KfgQ185Oh/H7CNXaMvf+QC+BIOoYTHp5R+fDgydiP3npEX26jvd/pz5XqEhDKIs9/iqWEfpdf5ba86qzr6tEWmVH+JThvbkBfD2z1xtfx8yvb7iW67rGSbTnwnCpjMYqV1c1LHeGjPM5x+8UHx1pn0jV9/I2XlqCaY7ooC2KPjVUpk50sr7Ndjhnq1zhG0edJbsw5/jdWl8L/+rl7vekeiYZQKKWqbF6alZUj6bH9rj+Khf4xnrB+FoYPZv5xw0uUtAYT4a8WsAqakha5c46FXvh+G5In7UZesxF/D6xvqLL22pVbLc5iOBkzrXM1ovGp+AfG2IndDvxnkNece+AV0vitN6sdIFVPt64geDmvaShQ1E+bRbfnTLxSi5ZRfSG2CywkUPz5rkcs9W+KFF1+bdV76TLtkunc47f7ciL7jeL7zWa+C59Nmhqesg3DznN/fWutGgtbrRSu7W+4aY6PqHeYFK2L1prl9dL5+aTVf85epn4vi/0+FYek829V5OyyxVWE+HnCT/Q6K53oS8T30MGoZX53cQKP/B4d8U2+Mih2WvO5V8mvl8Z9Fa1P+I4RxVhTodGxg5Wk3M2durNNS/0JeLDyu1CPKb57X89OiFenuJtrPg29zYcNnbwalnUC2QG6B9dHRzU+iW2MXmZIbZ/Dr6p78TwIaVc7PeP0r1FeHFWuKqdH3WRkjus9biQS888xoM74g8vPbEzf8RLb7CquBe0Wg6bxBltVmNUrRuW5+mebbjnoaxG1dV0Iu+QbfUt8l7TAu43JvEdejo5VLOO2Fbdo18T5xH4OqFSvjKMwHYM/SJ2Sf6l4TqB53mOYRXy0sN3i2EQfC38/6fl27D5GI/58QZr9+llG9wJRNRiwksjNoEISuLwKkWkqRIfDxbos/Fxu+b46Jfoz1RS4tYX1m2NlacaE35nhj45s3uZs4XjxV6zuXdMZxHo6/3S+D7G8ZWMqL+rMhgBmyyUK3IOweqtWRcxfGqEz16Aj0OwJD51YuWR9TUmoByJqWrQM2rR/nV7YolvnImPqvXzR49ob4k2fJco3+CIFBlAoDVEMvSiapr8G8bx6Uvjc5L44ta3X7MjeprDv4VCQ/xikqxxoeTSl2XwYdTCf93RHjAb3yhRfJNdJ+nwxMihUk4X3J1WPa3OrVALapvGp+qe7niOwKRXlPjXPL0S6MwK9cs88LCyeM4m8NF1OIwfPpvZ1mc+JbrjqitsLuTX3YxVImiG5bOAm4MRbhqfqteLbV82YIdNkcU0yGu20WmD94vGajPwNL8MGKLx8jVw9N40swYR8zmBj081goLis9rbdALS9lib5Z7ZiQihVumAvEl8mk7B+GKIskq0fBF2sOgnJY7SXS3+kxJaEh8/WPn5ZxY/c5zAh9iPTJrIERs5HBo6vYiDEPXjUa1N4rPYD6Lsa3Ir+pbHGywf10W3sS6+rClbAh9uKaQLXDyTez1MnODcZpag1DxmcHSXtAHurgjzqGwYn5x1iEKY7yTm4B4n1tFi59oFPoVlcLx7XriwlMLHTc3xaaU0fuEiiM+7I1F1zUPbwSd9oSslmgQFV+wTbpdaIwc9jDKaYhofQ75gUd1M4wvpCEeqyS6cuwmy6hxfnbcup70dfGKUZ2GLU7FawAPVPJirVnaLj2az3MwNEk7h4xXV+E9tlCf1S+GzTreDryv6Vjrkd2cVUd8xPmXw5/zhYxrfGeuiY4Fm1NFm4GOrl1vA5xusfDaREZYoimiKEToHPmW4St9Hpr/k8m7vF44daXz+ZJnb6TN8cXsj+ETVu9vBJ4K0+j6Klv7YMKIoB8KFzoNvpaGjRVruwzjDc07jk+alyhXfsthO4SvtHB/3OL08UZeV/D6Mv48ys2HG6csRjjGpUZ19VPZm4WNRg+3h02ikhxehBQl8QR58eHnro51eby/TbX5OX05RxqaEh1q2ZzVeq7hVfCxQJlbctXqlXq9XRNxl3cUDrqXmvGSIwRi9v18m7PeUvpxQ4uOev1J2Zlrfmy3hcwW+clRELGBFi8iFb6mIC2qJTm+JqN9o6hQN7p+qdvt34OMjbxJfXLnwLRfvw/ivUY/lsGTju5vKMD0TUeNLHpLfbeP1ZeON4dM9Ihqvp69GLnyZ0WZKY/A3z2TOhpeKNvOKxxx/is+b6bhsaejwY31fURZfi+kkF77Fax0985hO0pbq9AS+x6lzpPElQnCR27wlfKUYPhHqWTFHaaEeF8Mwj/HNcy8zyhf7xo+pU6TwoXoSn6j6ltxmgYz5fXLWUVU2pqx13tE3mvi8TJRefOE2q/GiSmLSVhFV39KkrRrD1xU5NxvEtzjLwFw1y8U0302dIo2vkZzzcjciX8hAm4vvyJkU6VtxfKjMe71cjstDFo+V6BF8N1nWNztgZeUKWM3HJxaLWcSlnUh39b3G/mHzYM2EL6HvGXxWThF6lYlPzOKSfZ9d3g4+cTJ28nYis79k0ISGoJEDHlbebiytnut+MHWSND4RrHd57omcSCl58Klz8e2zcC1drCJjPv+pxKIvv6x1szU5PppdulGAY5RpfW8sViMa+EDRnJStYFajjgqRf4UgE599xI7Up61PpSlC5DNeosa8crlUdML6OxGIzLPW0cKt0Wbxjaa74jS+UwGJumI8C0ZTLdag+KqwpnUok1A0yZn4RKyTx91l8n0CH+/hxIyHrwXI7GqNJl+J9CWx8LGu8IeN4jNvp+9LTeOTCQcOufKiqB5frRaRddU+KSt+Ry53z8J3JTIwiA+HqnIqm1wmdwvtdl9O03gTFcvkLPRT4Gd2i3nosfs6NnZbDLuvIxufrK9Tb4h3PPtALoWRbUt1dV0sJc7CdySRWXpgkY4unWFFMzACw5CRblvcByaWh+xOsyIDF3lyrHALo8+bu6tozxzPyDicwoekYckUIXmfFjqMZY+p9ZI1F99pIL9K/trnvFUmrK8TD0sZIrlf3men6TLkXcjn9yn418Zy64n1vZvcEjgXHxsv4iE31ThLHsp3XoTz8SnNKMVN1W3EneM4PqdamISn7Jr0js9ieYX0g8Nc8NhDHDZyRyW/p3I064ZowoSaWfxmLF8PRBCQVt/oRx80ZVaZblSFoyHwifFaeB1KGEhDDeptMZs1InxkLPKVQ8nP60xa6Jkl1w6ICRq5wi1ceGP385qff846gRge9Pi9bGHNszxdJX6rY13Gko9R0wh0XQvcRpdO71zLsgzeLxbFXUVyluBXLJqga7sHIQ1LWfRInh5J2z31W5SC5jpeYBvNMEbp9EB3Hcd2LFc7LOVsuQwfvt7E3eTEgkeDmXfjo5Ar2Um3j2r7jc7+QT91e+pFbb/TOCmyHN72KRPbX06XUj5qNjqX5+xTxI7z2WfiOEomLBZqJwUfTSjRN2HpqF/oV7u5UtMmtcMKfZZBztZLCvi18rMM+AMb0hYgH+Mw2zLiOfj0SIQyZ/2x0Ww7T4jA+OvxWDwuQz4yw4yjiXaacpc0Obbzfvzt4QU8BuI3CbdaSJHPcXmkz3F5+jx+LZ7jMnngSISyd//l9fPTiD/H5Rc8x4Wm7rGHCHFRIx8Oh4OZjxG6Hrx9+zb5FCGFtZ//7FOEFG46c8wn1qNh+R7HdrRayYNAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCLR9/QPW3CaKZaDN7gAAAABJRU5ErkJggg=="
            alt="yt-logo"
          />
        </div>

        <div className="w-1/2 h-11 border-[1px] border-solid border-black flex items-center justify-between rounded-full ">
          <input
            type="text"
            className="w-[90%] ml-5 h-full outline-none"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setshowSuggestion(false)}
          />
          <button className="h-full w-[10%] mr-4 flex justify-center items-center">
            <IoIosSearch />
          </button>
        </div>

        <div className="h-8 w-10 mr-12">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAaVBMVEX///8AAAD8/PwEBAT19fX5+fnx8fHn5+fOzs4iIiLb29vf39+9vb3u7u6zs7OqqqphYWGHh4cvLy+Xl5eBgYFaWlqjo6OdnZ1ra2vV1dUODg5wcHBDQ0OPj48oKChOTk47OzsXFxd4eHhxdtEdAAAE3UlEQVR4nO2cC5OyOgyGaaFcC4iAoIKI//9Hfr14WVdRegxx50zfnVlnFeXZJjRpUnQcKysrKysrKyurOaLi56/qj5L9Tay/RhVsQ6HY+zaHlhodGuRtfTyMuzFaD3Uf+reXvoiV5Ctyr3XB2bexvPwoUVz3zKQfo1N4wf6KGN/9GisBqBn3wfew0koP0XW07qzJv8JEqbMdnuDctCs9cRT+oPH1SywxhieGHpeoE+5ufv4ci5DKR3eycD3NdAYTr1eYXPJUrHsJdVWGh6V8fv9mtC4aQ9RpjLsvXOvOmDVexKROOpC5XCRH43KcDTn79TsscUiXolky7WZ6lxLegGXzoYRqHwmLVkZcJEbiSiIzrgKJi5thkQOS3xuakZAABcs5mnJhZGLCJL9z1LdCmClkSm+KRZrluQRYYMzVo3AlxlzF8tejOIM5F8Z4OY5vzFWicDnGXEiR+2DKhbSSbE25kAK3WZojhINlfEG2SFx+bULlYrmXTu9nQp0TfBzFh5n5vTqqx1o/UloYWDGKHbSiTmyQSWNl0SpG9vPWj0IRUrKqwbx63roWtXAivSWcacUTdsEwn5VND5h9BjUErJyB1SFei1cVk6Xoi2+tk2/UyunGnXB+V0/09RYfSxXA+dQ0pjsLvvMFKzJPnDI4PfV+idWpaI1XJj+fJyj2Mhwz/jy32FWqDZP1aLOqMmDajMKrMyb/5u1DXj30KoUIKkIOTeqg1AslVlhrY+1Vgky3m3a8QR0Lrqhopkvpdbg8lMLy+qtrk9NWTZzUS7KmLMtmE6ZMPeHzW/OoQCkYblvdzdNkUcsfXYjGjXI719VHrRCGjP/2pvG4z9PrfCDcLylXa3JfRo+u0XsJTxOfSZvnExbpqnKT503fTjTZekYXolKf2pAXkees568vl01TFRInzuv+enzU3ltsupiV1k+S7Rewo3StSd+aqwJ+94KMc9lo0n15pgY6jqv9G7t5LbRXgl55i3/TN+pVTUgkitBc85eyr9QyWC7j3suUNrAXpT8AWFH6J2zKT+csfuZpzwC5AuOS6jO5KoSFQAMmpy4Yp9eqQaiUm5p3Xl4JbhJrPp9Rf6iCmiuCDpRrvQWhouZ18Vdyodp+1Pm9r/FTHWAMmQJjQfU/QM2oVIEULoDNKBxsgDBkOnMHmgHXYQsQvcMRlksqA4hFOTwW6T/noqcFuOrPHYwZNc9mqvu8kiLzesAgpAWQHQavd/UaS5Wwd58XeGgGkhP+4CJA+4Dj19uzTblcMmYA872spvZgUPLXEIItu89FyU8vAPn+qIRcpwU9uawbPhN4STOGCN/rDex6W7lZ/ukMe6gS6VngRTB/I3cW/gdj6rec4sVKmd6PMTPDi6rFNulQVW7Sl6bhmI09cIHpgUz8jsthNIE6tpwhtIgEXMCL2cFptZH30lGsTiRLymH9pvUeHff8G/f3Jbxsh+ebfw/dqshCrA3uj2JpzLOmaIduHSl1Q1uVOQ8D72t3p/04MWXM02IMekY31rkR9dduXLWysrKysrKysrKysrKysvrfa6ocQacPWqCCIcvaXqofddGP0vN39eiKt69vSqA/nr7VUu4fAEHVScJMfZQXOpxdT3/5xip+t23qAuwEGXV44uQFi6vSS7hXnqrsVDVOFjgs97bFu7bHP4r1NyeTM3W8AAAAAElFTkSuQmCC"
            alt="usericon"
          />
        </div>
      </div>
      {showSuggestion && (
        <div className="relative shadow-lg ">
          <ul className="absolute left-[25rem] top-[-2rem] bg-white px-3 py-1 w-[38rem] rounded-xl  border-black shadow-xl">
            {suggestion.map((searchItem, index) => (
              <li key={index} className=" mt-1 hover:bg-gray-100">
                🔍 {searchItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Head;
