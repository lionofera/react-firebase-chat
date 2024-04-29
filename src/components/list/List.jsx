import Chatlist from "./chatList/Chatlist";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";

const List = () => {
    return (
        <dev className="list">
            <Userinfo/>
            <Chatlist/>
        </dev>
    )
}

export default List;