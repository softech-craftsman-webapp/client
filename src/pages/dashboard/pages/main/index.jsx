import React, { useEffect, useState} from 'react';

import fetcher from '../../../../helpers/fetcher';
import { Redirect } from 'react-router-dom';

function Main() {
  const [state, setState] = useState({
    welcome_init: false,
  });

  useEffect(() => {
    fetcher('get', `/user-details/my`)
      .then((res) => {
        // success
        if (!res.data.success) {
          setState(state => ({
            ...state,
            welcome_init: true,
          }));
        }
      })
      // client error
      .catch((error) => {
        setState(state => ({
          ...state,
          welcome_init: true,
        }));
      });
  }, []);

  return (
    <>
      { state.welcome_init ? <Redirect to="/dashboard/user-details/welcome" /> : null }
      <div className="pb-5 items-center">
        <h1 className="text-3xl font-semibold pb-4">Dashboard</h1>
      </div>    
    </>
  )
}

export default Main;
