import React from 'react';

import fetcher from '../../helpers/fetcher';
import toast from 'react-hot-toast';
import Select from '../Select';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        fetcher('get', '/categories/all', null)
            .then((res) => {
                // success
                if (res.data.success) {
                    const categories = res.data.payload;

                    if (categories.length > 0) {
                        const formatted_cat = [];

                        categories.forEach((cat) => {
                            formatted_cat.push({
                                value: cat.id,
                                label: cat.name,
                            });
                        });

                        return this.props.setState((prev) => {
                            return {
                                ...prev,
                                categories: formatted_cat
                            }
                        });
                    }
                }
                // not succeed
                else {
                    toast.error(res.data.message || 'There is an error on this request');
                }
            })
            // client error
            .catch((error) => {
                (error.response) ? toast.error(error.response.data.message) : toast.error(error.message);
            });

        return [];
    }

    render() {
        return (
            <>
                <Select name="category_id"
                    className={`${this.props.className}`}
                    id="category_id"
                    value={this.props.state.category_id || ""}
                    placeholder="All"
                    onChange={(e) => {
                        this.props.setState((prev) => {
                            return {
                                ...prev,
                                category_id: e.target.value
                            }
                        })
                    }}
                    options={this.props.state.categories} />
            </>
        );
    }
}

export default Categories;