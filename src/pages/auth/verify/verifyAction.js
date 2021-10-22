import validator from 'validator';
import fetcher from '../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * Verify action
 * @param {*} data 
 * @param {*} setState 
 */
const verifyAction = (data, setState) => {
  setState((prev) => {
    return {
      ...prev,
      isOkay: false
    }
  });

  fetcher('get', `/auth/verify/${data.token}?email=${data.email}`, data)
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
 * Verify action check
 * @param {*} state 
 * @param {*} setState 
 * @returns 
 */
const verifyActionCheck = (state, setState) => {
  const { email } = state;

  if ((typeof email !== 'undefined' && email && email != null)
      &&
      validator.isEmail(email))
    {
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

export { verifyAction, verifyActionCheck };