import validator from 'validator';
import fetcher from '../../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * changePassword
 * @param {*} data 
 * @param {*} setState 
 */
const changePassword = (data, setState) => {
  setState((prev) => {
    return {
      ...prev,
      isOkay: false
    }
  });

  fetcher('post', `/auth/change-password/${data.token}?email=${data.email}`, data)
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
 * changePasswordValidation
 * @param {*} state 
 * @param {*} setState 
 * @returns 
 */
const changePasswordCheck = (state, setState) => {
  const { email, password } = state;

  if ((typeof email !== 'undefined' && email && email != null)
      &&
      (typeof password !== 'undefined' && password && password != null)
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

export { changePassword, changePasswordCheck };