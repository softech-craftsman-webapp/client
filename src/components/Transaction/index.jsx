import React from 'react';

import style from './style.module.css'

import Input from '../Input'
import Label from '../Label'
import Button from '../Button';

import fetcher from '../../helpers/fetcher'
import toast from 'react-hot-toast';

/**
 * @description Transaction component
 */

// import React, { useState } from 'react';
 
// import TransactionComponent from '../../../../components/Transaction';
 
// function Example() {
//    const [state, setState] = useState({
//       defaultAmount: 10.00,
//       transaction_id: null,
//    });
 
//    return (
//      <>
//        <TransactionComponent state={state} setState={setState}/>
//      </>
//    )
//  }
// export default Example;

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleSubmission = this.handleSubmission.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    handleSubmission() {
        const data = {
            amount: parseFloat(this.props.state.defaultAmount),
            currency: "EUR"
        }

        fetcher('post', '/transactions/new', data)
            .then((res) => {
                if (res.data.message === "Success") {
                    toast.success('Transaction has been completed');
                    this.props.setState((prevState) => ({
                        ...prevState,
                        transaction_id: res.data.payload.id
                    }));
                } else {
                    toast.error('Payment has been failed');
                    toast.error(res.data.message);
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    updateInput(event){
        this.props.setState((prevState) => ({
            ...prevState,
            defaultAmount: event.target.value
        }));
    }

    render() {
        return (
            <div className="mt-2 mb-2 rounded bg-white border px-5 py-5">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        {/* Linked Card */}
                        <div className={`${style.card}`}>
                            <div className={`${style.card_content}`}>
                                <h5 className="text-gray-100 font-semibold">Card Number</h5>
                                <h6 className="text-white font-mono">**** **** **** 1234</h6>

                                <div className="grid grid-cols-2 mt-5">
                                    <div>
                                        <h5 className="text-gray-100 font-semibold">Expiration</h5>
                                        <h6 className="text-white font-mono">11/24</h6>
                                    </div>
                                    <div>
                                        <h5 className="text-gray-100 font-semibold">CVC</h5>
                                        <h6 className="text-white font-mono">***</h6>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.wave}`}/>
                        </div>
                    </div>

                    <div className="col-span-2 px-4 w-100 md:w-1/2">
                        <h4 className="text-xl font-semibold">Transaction</h4>

                        {/* Payment */}
                        <div className="mt-2 pb-2">
                            <Label htmlFor="amount">Amount (EUR)</Label>
                            <Input type="number" 
                                id="amount"
                                name="amount"
                                min="0.00"
                                value={this.props.state.defaultAmount}
                                autoComplete="off"
                                onChange={this.updateInput}
                                placeholder="0.00"/>

                            <Button onClick={this.handleSubmission}>Pay</Button>
                        </div>
                    </div>
                </div>

                { this.props.state.transaction_id && (
                    <>
                        <hr className="mt-5"></hr>
                        <span className="text-sm truncate w-full">
                            Transaction has been completed
                        </span>
                    </>
                )}
            </div>
        );
    }
}

export default Transaction;