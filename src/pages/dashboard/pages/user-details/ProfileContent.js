import React from 'react';
import JobOfferList from './JobOfferList';
import MyOfferList from "./MyOfferList"
import Button from '../../../../components/Button';


const styles = {
    padding: 0 ,
    webKitBoxFlex: 1,
    flexGrow: 1,
}

function ProfileContent() {
    return (
        <div styles = {styles}>
            <p style = {{fontSize: "260%"}}>My cases</p>
            <button style = {{marginLeft: "20px", marginRight: "100px"}}>Job offers</button>
            <button>My service offers</button>

            <div className="form-control">
                <textarea placeholder="Search by cases" className="border-none w-6/12 rounded-md mb-15 text-sm" type="text"/>
            </div>

            <div>
                <JobOfferList />
                <MyOfferList />
            </div>
        </div>
    )
}

export default ProfileContent;
