// // import './Home.css';
// // const Home=()=>{
// //     return(
// //         <div>
// //             <form>
// //             <input type="search" name="search-form" id="search-form" className="search-input" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search user"/>
// //             <button className='submit'>Search</button>
// //             </form>
// //         </div>
// //     )
// // }
// // export default Home;


// import React, { useState } from 'react';
// import './Home.css';
// import Sections from '../components/Sections';

// const Home = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="home-container">
//       <div className="menu-icon" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//       <div className={`menu ${showMenu ? 'show' : ''}`}>
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Experts</li>
//           {/* Add more menu items as needed */}
//         </ul>
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search..." />
//         <button>Search</button>
//       </div>
//       <div className="sections">
//         <Sections/>
//         <Sections/>
//         <Sections/>
//         <Sections/>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Sections from '../components/Sections';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='home'>
    <div className="home-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${showMenu ? 'show' : ''}`} ref={menuRef}>
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Experts</li>
    {/* Add more menu items as needed */}
  </ul>
  <div className='bottom'>
  <div className="profile">
    <img src="profile_logo.png" alt="Profile Logo" className="profile-logo" />
    <span>Your Profile</span>
  </div>
  <div className="settings">
    <i className="fa fa-cog"></i>
    <span>Settings</span>
  </div>
  </div>
</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
            <div className="sections">
        <a href="http://" target="_blank" rel="noopener noreferrer"><Sections/></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><Sections/></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><Sections/></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><Sections/></a>
        
      </div>
    </div>
    </div>
  );
};

export default Home;
