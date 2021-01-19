import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Chat from "./Chat";
import {CHATS} from "../Shared/chats";
import ChatMessages from "./ChatMessages";

class Chatting extends React.Component {
    constructor() {
        super();
        this.state = {
            chats: CHATS,
            selectedChat: null,
        };
    }

    handleChatClick(id) {
        let chats = this.state.chats;
        let chat = chats.find((item) => {
            return item.id == id;
        });
        this.setState({selectedChat: chat});
    }

    render() {
        let chatsJSX = this.state.chats.map((item, index) => {
            return (<Chat key={index}
                          ChatID={item.id}
                          handleChatClick={(id) => {
                              this.handleChatClick(id)
                          }}
                          imageUrl={item.imageUrl}
                          messages={JSON.stringify(item.messages)}
                          otherFullName={item.otherFullName}
            />)
        });
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-12 col-md-4">

                            {chatsJSX}
                        </div>
                        <div className=" col-12 col-md-8">
                            {
                                this.state.selectedChat == null ? (null) : (<ChatMessages
                                    chat={JSON.stringify(this.state.selectedChat)}/>)
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Chatting;
