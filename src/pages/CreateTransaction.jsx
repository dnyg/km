import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function CreateTransaction() {
  const [transactionInput, setTransaction] = useState({
    description: "",
    amount: "",
    receipt_date: "",
  });

  const handleInput = (e) => {
    e.persist();
    setTransaction({ ...transactionInput, [e.target.name]: e.target.value });
  };

  const saveTransaction = (e) => {
    e.preventDefault();

    const data = {
      description: transactionInput.description,
      amount: transactionInput.amount,
      receipt_date: transactionInput.receipt_date,
    };

    axios.post(`/api/`, data).then((res) => {
      swal("Success!", res.data.message, "success");
      setTransaction({
        description: "",
        amount: "",
        receipt_date: "",
      });
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form onSubmit={saveTransaction}>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      onChange={handleInput}
                      value={transactionInput.description}
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>
                    <input
                      type="number"
                      name="amount"
                      onChange={handleInput}
                      value={transactionInput.amount}
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Receipt Date</td>
                  <td>
                    <input
                      type="date"
                      name="receipt_date"
                      onChange={handleInput}
                      value={transactionInput.receipt_date}
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="submit"
                      value="Post"
                      className="btn btn-light"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTransaction;
