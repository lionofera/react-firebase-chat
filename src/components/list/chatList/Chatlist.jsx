import { useState } from "react";
import "./chatList.css";

const Chatlist = () => {

    const [plusMode, setPlusMode] = useState(false);
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={plusMode ? "./minus.png"  : "./plus.png"} 
                alt="" 
                className="plus"
                onClick={() => setPlusMode((prev) => !prev)}
                />
            </div>
            <div className="chatHead">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Khan Kher</span>
                    <p>Hi there</p>
                </div>
            </div>
            <div className="chatHead">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Khan Kher</span>
                    <p>Hi there</p>
                </div>
            </div>
            <div className="chatHead">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Khan Kher</span>
                    <p>Hi there</p>
                </div>
            </div>
        </div>
    )
}

export default Chatlist;