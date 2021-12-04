import React from 'react'
import st from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={st.message}>
            <div className={st.ava}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={st.info}>
                <div className={st.name_text}>
                    <div className={st.nam}>
                        {props.name}
                    </div>
                    <div className={st.text}>
                        {props.message}
                    </div>
                </div>
                <div className={st.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
