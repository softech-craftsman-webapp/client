import { Route, Link, useLocation} from 'react-router-dom';
import Button from '../../../../components/Button';

import style from './style.module.css';

import Name from './name';
import Email from './email';
import Password from './password';

function Settings() {
  const ROOT = '/dashboard/settings';
  let location = useLocation();
  const userDetails = JSON.parse(localStorage.getItem('user_data') || '');

  return (
    <>
      <h1 className="text-3xl font-semibold pb-5">Settings</h1>
  
      { location.pathname === ROOT &&
        <Route path={`${ROOT}`}>
          { userDetails.email_verified_at == null &&
            <div className={`${style.email_verfication}`}>
              <p className="text-center md:text-left px-4">You have not verified your email address.</p>
              <div>
                <Button className="w-full md:w-48 md:float-right">
                  Send Verification
                </Button>
              </div>
            </div>
          }

          <div className="grid grid-cols-1 gap-4">
            <Link to={`${ROOT}/update-password`}
              className={style.options}>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000">
                  <path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
                </svg>
                <span className="px-2">Password</span>
              </div>
            </Link>

            <Link to={`${ROOT}/update-name`}
              className={style.options}>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000">
                  <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z" />
                </svg>
                <span className="px-2">Name</span>
              </div>
            </Link>

            <Link to={`${ROOT}/update-email`}
              className={style.options}>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000">
                  <path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
                </svg>
                <span className="px-2">Email address</span>
              </div>
            </Link>
          </div>
          <p className="fixed bottom-0 text-sm py-2 text-gray-600 text-center" role="alert">
             If you want to change any of the above, you will be automatically logged out.
          </p>
        </Route>
      }

      <Route path={`${ROOT}/update-password`}>
        <Password/>
      </Route>

      <Route path={`${ROOT}/update-name`}>
        <Name/>
      </Route>

      <Route path={`${ROOT}/update-email`}>
        <Email/>
      </Route>
    </>
  )
}

export default Settings;