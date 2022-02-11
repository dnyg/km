import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewTransaction = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    axios.get(`/api`).then((res) => {
      if (res.status === 200) {
        setTransaction(res.data.transactions);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading Transactions...</h4>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>
            Transaction Data
            <Link
              to={"CreateTransaction"}
              className="btn btn-primary btn-sm float-end"
            >
              {" "}
              Create Transaction
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Receipt Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.receipt_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTransaction;
