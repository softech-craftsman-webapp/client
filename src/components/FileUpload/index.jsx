import React ,{useState} from 'react';
import { useHistory} from "react-router-dom";
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
       
            <div>
            <Button 
            type= "submit" onClick={submit}>
            Upload </Button>
            </div>
            
       
        <div>
        <Input type="file" name='file' accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, application/pdf, video/x-flv, video/mp4, application/x-mpegURL,
               video/MP2T video/3gpp, video/quicktime, video/x-msvideo, video/x-ms-wmv"
               onChange={changeHandler}/>
        {
          selectedFile ? (
            <div className="pt-3 pb-3">
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
            </div>
          ) 
          : 
            null
        }
        </div>
      </div>

    );
  

}


export default FileUpload;
