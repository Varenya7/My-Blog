// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Redirect = () => {
//     const navigate = useNavigate();

//   useEffect(() => {
//     const isLogin = localStorage.getItem('is_login');
//     if (isLogin === 'true' ) {
//       navigate('/'); // Redirect to the home page
//     }
//   }, [navigate]);

//   return null;
// }

// export default Redirect


//  new code 

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLogin = localStorage.getItem('is_login');
    if (isLogin === 'true' && location.pathname === '/sign-in') {
      navigate('/'); // Redirect to the home page
    }
  }, [navigate, location]);

  return null;
}

export default Redirect;
