import React from 'react';

// import fetcher from '../../helpers/fetcher';
// import toast from 'react-hot-toast';

import moment from 'moment';
import { Link } from 'react-router-dom';
class Contracts extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() { }

    render() {
        const data = this.props.data || [];
        return (
            <div className="grid mt-4 gap-8 grid-cols-1">
                {
                    data.map((item, index) => {
                        return (
                            <Link to={`/dashboard/applications/${item.id}`}
                                  key={index}
                                  className="flex rounded-lg border border-l-0">
                                <div className="bg-black rounded-lg py-4 block h-full shadow-inner">
                                    <div className="text-center tracking-wide px-4 py-2">
                                        <div className="text-white font-bold text-base ">
                                            { moment(item.signed_by_professional_time).format('Do') }
                                        </div>
                                        <div className="text-white font-normal text-xs">
                                            { moment(item.signed_by_professional_time).format('MMMM').substring(0, 3) }
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-1 bg-white py-5 px-2 py-2 tracking-wide">
                                    <div className="mt-2 font-semibold text-gray-800 text-xl text-left px-2">
                                        Application
                                    </div>
                                    <div className="flex flex-row justify-start">
                                        <div className="text-gray-700 font-medium text-xs text-left px-2">
                                            <span className="mr-1">
                                                { moment(item.start_time).format('LL') }
                                            </span>
                                            -
                                            <span className="ml-1">
                                                { moment(item.end_time).format('LL') }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 bg-white hidden md:block">
                                    <span className="mt-5 text-gray-500 tracking-wider mr-2 px-2 text-xs leading-loose font-semibold">
                                        { (moment(item.signed_by_professional_time).valueOf() - moment(item.signed_by_recruiter_time).valueOf()) > 0 ? 'Pending' : 'Completed' }
                                    </span>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default Contracts;