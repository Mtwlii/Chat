import React from 'react';

class Chat extends React.Component {
    render() {
        let messages = JSON.parse(this.props.messages);
        let lastmessage = messages[messages.length - 1];
        return (
            <div className="mb-2">
                <a href="#" style={{outline: "none", textDecoration: "none", color: "black"}}
                   onClick={() => {
                       this.props.handleChatClick(this.props.ChatID)}}>
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="media">
                                <img src={this.props.imageUrl}
                                     className="rounded-circle" width="60" height="60" alt=""/>
                                <div className="media-body mt-2">
                                    <p className="m-0  font-weight-bold">
                                        {this.props.otherFullName}
                                    </p>
                                    <p className="text-truncate " style={{maxWidth: 200}}>
                                        {lastmessage.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Chat;