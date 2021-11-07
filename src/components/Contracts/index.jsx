import React from 'react';

// import fetcher from '../../helpers/fetcher';
// import toast from 'react-hot-toast';

class Contracts extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {}

    render() {
        const data = this.props.data || [];
        return (
            <div className="grid mt-4 gap-8 grid-cols-1">
                {
                    data.map((item, index) => {
                        return (<></>)
                    })
                }
            </div>
        );
    }
}

export default Contracts;