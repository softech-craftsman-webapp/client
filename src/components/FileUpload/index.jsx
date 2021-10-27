import React ,{useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import fetcher from '../../helpers/fetcher';
import Button from '../Button';
import Input from '../Input';
import toast from 'react-hot-toast';


/**
 * @description FileUpload component
 */

function FileUpload()
{
  let history = useHistory();
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
 };

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


export default FileUpload;
