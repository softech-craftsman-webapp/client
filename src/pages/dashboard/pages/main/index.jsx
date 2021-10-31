import React from 'react';

import Jobs from "./jobs";
import Contracts from './contracts';
import Ratings from "./ratings";
import Transactions from "./transactions";

function Main() {
  return (
    <>
      <h1 className="text-3xl font-semibold pb-5">Dashboard</h1>

      <Jobs />
      <Contracts />
      <Ratings />
      <Transactions />
    </>
  )
}

export default Main;
