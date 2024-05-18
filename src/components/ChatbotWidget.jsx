import React, { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    window._be = window._be || {};
    window.__be = window._be || {};
    window.__be.id = "65e8a6d78b95e60007d49258"; 
    
    const loadScript = () => {
      var be = document.createElement('script');
      be.type = 'text/javascript';
      be.async = true;
      be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(be, s);
    };
    
    loadScript();

    
    
  }, []);

  return (
    <>
      <script type="text/javascript">
        {`
          window._be = window._be || {};
          window.__be = window._be || {};
          window.__be.id = "65e8a6d78b95e60007d49258"; // Corrected here
          (function() {
            var be = document.createElement('script');
            be.type = 'text/javascript';
            be.async = true;
            be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(be, s);
          })();
        `}
      </script>
      <noscript>You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a></noscript>
    </>
  );
};

export default ChatbotWidget;
