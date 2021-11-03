import A from '../../../../components/A'
import Input from './../../../../components/Input';
import Label from '../../../../components/Label';
import Button from '../../../../components/Button';

import style from './style.module.css';

function Email() {
    return(
      <>
        <h1 className="text-3xl font-semibold pb-5">Update Email address</h1>

        {/* Breadcrumb */}
        <nav className="text-black my-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <A to="/dashboard/settings" className="text-sm">
                Settings
              </A>
              <svg className="fill-current w-3 h-3 mx-3" 
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <A to="/dashboard/settings/update-email" className="text-sm">
                Update email address
              </A>
            </li>
          </ol>
        </nav>

        {/* Form */}
        <form>
          <div className={`${style.space}`}>
            <Label htmlFor="email">Email</Label>
            <Input type="email"
                   id="email" 
                   name="email"
                   autoComplete="off"
                   placeholder="Email address "/>
          </div>   

          <div className={`${style.space}`}>
            <Label htmlFor="password">Password</Label>
            <Input type="password"
                   id="password" 
                   name="password"
                   autoComplete="off"
                   placeholder="Password"/>
          </div> 

          <div className={`${style.space}`}>
            <Button type="submit" className="w-auto">
                Update email address
            </Button>
          </div>       
      </form>
      </>
    )
  }
  
export default Email;