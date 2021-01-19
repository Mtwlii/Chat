import React from 'react'

class ChatMessages extends React.Component {
    render() {
        let chat = JSON.parse(this.props.chat);
        let messagesJSX = chat.messages.map( (item , length)=>{
            return item.isSend == true ? (
                <p className="w-75 float-left  bg-info text-white p-1 rounded"
                   style={{inline:"block"}}>
                    {item.content}
                </p>) : (
                <p className="w-75 float-right text-right bg-primary text-white p-1 rounded">
                    {item.content}
                </p>
            )


        });
        return (

            <div className="">
                <div className="card shadow">
                    <div className="card-body">
                        <p className="card-title h4 m-0 text-center font-weight-bold">
                            {chat.otherFullName}
                        </p>
                        <hr/>
                        {messagesJSX}

                    </div>

                </div>
            </div>

        )
    }
}

export default ChatMessages;
