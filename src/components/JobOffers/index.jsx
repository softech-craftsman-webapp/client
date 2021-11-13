import React from 'react';

// import style from './style.module.css';

import { Link } from 'react-router-dom';
import moment from 'moment';

/**
 * @description Button component
 */
class JobOffers extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const data = this.props.data || [];
        return (
            <div className="grid mt-4 gap-5 grid-cols-1">
                {
                    data.map((item, index) => {
                        return (
                            <Link to={`/dashboard/job-offers/${item.id}`}
                                className="flex flex-col"
                                key={index}
                                id={`job-id-${index}`}>
                                <div style={{ backgroundImage: `url("${item.image}")` }} 
                                     className="w-full border border-l-0 rounded-lg bg-blend-lighten h-32 bg-cover bg-no-repeat bg-center">
                                    <div className="rounded-lg p-3 h-32 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 md:to-transparent bg-blend-lighten">
                                        <div className="rounded-lg lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                                            <h4 className="text-2xl font-semibold truncate tracking-tighter text-black md:text-3xl title-font">
                                                { item.name } { item.is_premium ? <i class="im im-diamond-o text-xs"></i> : null }
                                            </h4>

                                            <p className={`w-full text-gray-500 text-xs line-clamp-3 h-8 overflow-ellipsis overflow-hidden my-1 text-left`}>
                                                { item.description }
                                            </p>

                                            { (item.distance > 0) ? <p className="w-full text-xs text-gray-400 pt-2">
                                                Distance { (item.distance / 1000).toFixed(1) } km
                                            </p>
                                            
                                            : <p className="w-full text-xs text-gray-400 pt-2">
                                                This offer is valid until { moment(item.valid_until).format('LLLL') }
                                            </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default JobOffers;