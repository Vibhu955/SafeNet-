import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';

const ChatWidget = ({ steps, theme, config }) => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      {showChat && <ChatBot steps={steps} theme={theme} {...config} />}
      <button onClick={toggleChat} style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "9999" }}>
        {showChat ? "Hide Chat" : "Show Chat"}
      </button>
    </div>
  );
  }
 
 
const steps = [
  {
      id: '0',
      message: 'Hey There! This is Praney Pandey',

     
      trigger: '1',
  }, 
  
  {
      id: '1',

      
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [

          
          { value: 1, label: 'Projects' , trigger: '5' },
          { value: 2, label: 'Skills' , trigger: '6' },
          { value: 3, label: 'Experience' , trigger: '7' },
          { value: 4, label: 'Contact' , trigger: '8' },

      ],
      
  }, {
      id: '5',
      message: 'I have worked on various projects. Some of my major projects are - 1. Ai Assistant 2. Custom Linux Distro 3. Profile Card using flutter ',
      trigger: '4',
  },{
      id: '6',
      message: 'I have worked on various technologies like - 1. Python 2. Flutter 3. React 4. Linux',
      trigger: '4',
  },{
      id: '7',
      message: 'I have worked as a Software Developer Intern at 1. TCS 2. Infosys 3. Wipro',
      trigger: '4',
  },{
      id: '8',
      message: 'You can contact me at praneypandey@gmail.com',
      end: true,
  }

];


const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};


const config = {
  botAvatar: "/favicon.ico",
  floating: true,
};

export default ChatBot;