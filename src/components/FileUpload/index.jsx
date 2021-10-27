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

 const submit = () => {
  const formData = new FormData();
	  formData.append('file', selectedFile);

  fetcher('post', '/files/upload', formData)
  .then((response)=> {
      toast.success('File uploaded successfully');
      history.push('/dashboard'); 
    
  })
  .catch((error) => {
    toast.error('Error!');
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
