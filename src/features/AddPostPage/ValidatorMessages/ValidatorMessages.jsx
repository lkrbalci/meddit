import React, {useState} from 'react'
import styles from "./ValidatorMessages.module.css"

const ValidatorMessages = (props) => {
    console.log(props);
    const [setMessages, messages] = useState(props)
    return (
        <div>
            <div id={styles.validation}>
        {messages.titleEmpty ? <p>Title is required!</p> : null}
        {props.articleEmpty ? <p>Article text is required!</p> : null}
        {props.urlEmpty ? <p>URL is requred!</p> : null}
        {props.descriptionEmpty ? <p>Description is requred!</p> : null}
      </div>
        </div>
    )
}

export default ValidatorMessages
