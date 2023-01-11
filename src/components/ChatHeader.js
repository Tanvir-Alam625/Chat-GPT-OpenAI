const ChatHeader = ({setAnswer}) =>{
    return(
        <button onClick={()=>setAnswer([])}>New Chat</button>
    )
}
export default ChatHeader;