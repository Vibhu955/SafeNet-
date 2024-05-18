import { BrowserRouter } from "react-router-dom";

import {  Contact, News, Hero, Navbar,  StarsCanvas, ChatbotWidget,  } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          
          <Navbar />
          <Hero />
        
        </div>
        
        <News />
        
      
        <div className='relative z-0'>
          <Contact />
        </div>

      
        
        <StarsCanvas />
        {/* <ChatbotWidget /> */}

      </div>
      
    </BrowserRouter>
  );
}

export default App;
