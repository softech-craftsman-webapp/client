import React from 'react';

import Input from '../Input';
import Label from '../Label';
import Button from '../Button';

import style from './style.module.css';
import fetcher from '../../helpers/fetcher';
import toast from 'react-hot-toast';

/**
 * @description File Upload component
 */

//
// Example
// 
// import React, { useState } from 'react';
// import FileUpload from './../../../../components/FileUpload';

// function Example() {
//   const [state, setState] = useState({
//     targetFile: null,
//     fileUrl: null,
//   });

//   return(
//     <>
//       <FileUpload state={state} setState={setState}/>
//     </>
//   )
// }

// export default Example;
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.changeHandler = this.changeHandler.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    changeHandler (event) {
        this.props.setState((prevState) => ({
            ...prevState,
            targetFile: event.target.files[0]
        }));
    };

    handleSubmission() {
        const formData = new FormData();
	    formData.append('file', this.props.state.targetFile);

        fetcher('post', '/files/upload', formData)
            .then((res) => {
                if (res.data.message === "Success") {
                    toast.success('File uploaded successfully');
                    this.props.setState((prevState) => ({
                        ...prevState,
                        targetFile: null,
                        fileUrl: res.data.payload.url
                    }));
                } else {
                    toast.error('File upload failed');
                    toast.error(res.data.message);
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    render() {
      return(
        <>
            <div className="bg-white rounded border mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-gray-100 px-2 py-2">
                    <div>
                    <Label htmlFor="file">Upload a file</Label>
                    <Input className={`${style.file_upload}`}
                            onChange={this.changeHandler}
                            type="file" 
                            name="file"
                            id="file"
                            accept="image/jpeg, 
                                    image/jpg, 
                                    image/png, 
                                    image/gif,
                                    image/bmp,
                                    application/pdf,
                                    video/x-flv,
                                    video/mp4,
                                    application/x-mpegURL,
                                    video/MP2T,
                                    video/3gpp,
                                    video/quicktime,
                                    video/x-msvideo, 
                                    video/x-ms-wmv"/>
                    </div>
                    
                    <div>
                        <Button className="mt-2 md:mt-5 w-full md:w-48 md:float-right"
                                onClick={this.handleSubmission}>
                            Upload
                        </Button>
                    </div>
                </div>

                { this.props.state.fileUrl && (
                    <>
                        <hr></hr>
                        <span className="px-2 text-sm border-t-1 py-1 truncate w-full">
                            File has been uploaded
                        </span>
                    </>
                )}
            </div>
        </>
      );
    }
}

export default FileUpload;