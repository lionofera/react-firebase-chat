
import "./userinfo.css";

const Userinfo = () => {
    return (
        <dev className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>Khan Kher</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt=""/>
                <img src="./vedio.png" alt=""/>
                <img src="./edit" alt=""/>
            </div>
        </dev>
    )
}

export default Userinfo;