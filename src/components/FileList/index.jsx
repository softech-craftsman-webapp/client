import React, { useState } from 'react';
import fetcher from '../../helpers/fetcher';

/**
 * @description FileList component
 */

function FileList() {
    const [result, setResult] = useState();
    fetcher('get', '/files/user-files', null)
        .then((response) => {
            console.log(response.data.payload);
            setResult(response.data.payload.map(element => {
                return < tr key = { element.name } >
                                <td>{element.name}</td>
                                <td>{element.size}</td>
                                <td>{element.type}</td>
                                <td>{element.url}</td>
                            </tr >
    }));
})
            .catch ((error) => {
    console.log(error);
});

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Url</th>
                </tr>
            </thead>

            <tbody>
                {result}
            </tbody>

        </table>
    </div>
);
    
}


export default FileList;