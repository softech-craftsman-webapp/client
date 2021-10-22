import validator from 'validator';
import fetcher from './../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * loginAuth
 * @param {*} data 
 * @param {*} setState 
 */
const loginAuth = (data, setState) => {
  setState((prev) => {
    return {
      ...prev,
      isOkay: false
    }
  });

  fetcher('post', '/auth/login', data)
    .then((res) => {
      // success
      if (res.data.success) {
        localStorage.setItem('token', res.data.payload.token);
        localStorage.setItem('refresh_token', res.data.payload.refresh_token);
        
        localStorage.setItem('user_data', JSON.stringify({
          id: res.data.payload.id,
          name: res.data.payload.name,
          email: res.data.payload.email,
          email_verified_at: res.data.payload.email_verified_at,
          token_expiration: res.data.payload.token_expiration,
        }));

        setState((prev) => {
          return {
            ...prev,
            success: true
          }
        });
      }
      // not succeed
      else {
        toast.error(res.data.message || 'There is an error on this request');        
        setState((prev) => {
          return {
            ...prev,
            success: false,
          }
        });
      }
    })
    // client error
    .catch((error) => {
      (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);

      setState((prev) => {
        return {
          ...prev,
          success: false,
        }
      });
    });
}

/**
 * loginAuthValidation
 * @param {*} state 
 * @param {*} setState 
 * @returns 
 */
const loginCheck = (state, setState) => {
  const { email, password } = state;

  if ((typeof email !== 'undefined' && email && email != null)
    &&
    (typeof password !== 'undefined' && password && password != null)
    && 
    validator.isEmail(email)) {
      return setState((prev) => {
        return {
          ...prev,
          isOkay: true
        }
      });
  }

  return setState((prev) => {
    return {
      ...prev,
      isOkay: false
    }
  });
}

export { loginAuth, loginCheck };