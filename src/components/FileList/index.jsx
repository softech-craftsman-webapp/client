import React from 'react';
import fetcher from '../../helpers/fetcher';

/**
 * @description FileList component
 */

class FileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] };
    }
    render() {
        fetcher('get', '/files/user-files', null)
            .then((response) => {
                console.log(response.data.payload);
                this.setState((prev) => {
                    return {
                        result: response.data.payload.map(element => {
                            <tr key={element.name}>
                                <td>{element.name}</td>
                                <td>{element.size}</td>
                                <td>{element.type}</td>
                                <td>{element.url}</td>
                            </tr>
                        }
                        )
                    };
                });

            })
            .catch((error) => {
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
                        {this.state.result}
                    </tbody>

                </table>
            </div>
        );
    }
}


export default FileList;