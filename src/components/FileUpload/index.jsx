import React from 'react';
import fetcher from '../../helpers/fetcher';
import Button from '../Button';

/**
 * @description FileUpload component
 */

class FileUpload extends React.Component
{

  submit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    fetcher('post', '/files/upload', formData)
    .then((response)=> {
      console.log(response)
      //pop up to do
    })
    .catch((error) => {
      console.log(error);
    })
  };

  render()
  {
    
    return(
      <div>
        <form onSubmit={this.submit}>
            <input type="file" name='file'/>
            {<Button 
            type= "submit" 
            >
            Upload </Button>
            }
        </form>
        <div>
            
        </div>
      </div>
    );
  }

}


export default FileUpload;
