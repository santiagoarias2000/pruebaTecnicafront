import { useEffect, useState, useRef } from 'react';
import ReactPlayer from "react-player"
import Talk from 'talkjs';

export const ClassVideo=()=>{

    const chatboxEl = useRef<HTMLInputElement |null>(null);

    const [talkLoaded, markTalkLoaded] = useState(false);
  
    useEffect(() => {
      Talk.ready.then(() => markTalkLoaded(true));
  
      if (talkLoaded) {
        const currentUser = new Talk.User({
          id: '1',
          name: 'santiago',
          email: 'santiago@santiago',
          role: '1',
        });
  
        const otherUser = new Talk.User({
          id: '2',
          name: 'Jessica Wells',
          email: 'jessicawells@example.com',
          photoUrl: 'jessica.jpeg',
          welcomeMessage: 'Hello!',
          role: 'default',
        });
  
        const session = new Talk.Session({
          appId: 'tCJlRZZJ',
          me: currentUser,
        });
  
        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);
  
        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        return () => session.destroy();

      }
    }, [talkLoaded]);

    useEffect(() => {
        chatboxEl.current?.focus();
      }, []);

    return(
        <div id="main" className="main">
          <ReactPlayer
          url = 'https://www.youtube.com/watch?v=jLxd-SY_qJ4'
          width='100%'
          height='100%'
          controls
          playing
          />

          <h1>
            Chat de clase
          </h1>
          <div>
          <input ref={chatboxEl} />
          </div>
        </div>
    )
}