import validator from 'validator';
import fetcher from '../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * registerAuth
 * @param {*} data 
 * @param {*} setState 
 */
const registerAuth = (data, setState) => {
  setState((prev) => {
    return {
      ...prev,
      isOkay: false
    }
  });
  
  fetcher('post', '/auth/register', data)
    .then((res) => {
      // success
      if (res.data.success) {
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
 * registerAuthValidation
 * @param {*} state 
 * @param {*} setState 
 * @returns 
 */
const registerCheck = (state, setState) => {
  const { email, password, name } = state;

  if ((typeof email !== 'undefined' && email && email != null)
    &&
    (typeof password !== 'undefined' && password && password != null)
    &&
    (typeof name !== 'undefined' && name && name != null)
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

export { registerAuth, registerCheck };