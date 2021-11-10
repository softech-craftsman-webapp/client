import React, { useState } from 'react';
// import { JobOfferObject } from '../../../store/objects/jobOfferObject';
//import Input from '../../components/Input';
//import Label from '../../components/Label';
//import Button from '../../components/Button';
import { useParams } from 'react-router-dom';

import fetcher from '../../helpers/fetcher';
import toast from 'react-hot-toast';

function TransactionDetail(props)
{
        let { id } = useParams();
        const [transactionD, setResult] = useState([]);
        fetcher('get', `/transactions/{${id}}`, null)
        .then((res)=> {
            if (res.data.message === "Success") {
                console.log(res.data.payload);
                setResult(res.data.payload);
            } else {
                toast.error('Error!');
            }
        })
        .catch((error) => {
            toast.error('Error!');
          })
    
        return (
            <div>
                <div class="flex flex-row">
                    
                    <div className="p-4">
                        <h1 className="text-xl font-bold">Transaction Information</h1>
    
                        <p className="text-sm font-bold mt-4">TransactionID</p>
                        <p className="text-sm">{transactionD.id}</p>
    
                        <p className="text-sm font-bold mt-4">UserID</p>
                        <div className="w-96 text-sm">
                            <p className="overflow-ellipsis">{transactionD.user_id}</p>
                        </div>
    
    
                        <p className="text-sm font-bold mt-4">Amount</p>
                        <p className="text-sm">{transactionD.amount}</p>
    
                        <p className="text-sm font-bold mt-4">Payment Currency</p>
                        <p className="text-sm">{transactionD.currency}</p>
                    </div> 
                </div>
    
                {/*<Button onClick={this.handleSubmission}>Update Transaction Bill</Button>         
                <Button onClick={}>Delete Transaction Bill</Button>*/}
            </div>    
        );
}




export default TransactionDetail;