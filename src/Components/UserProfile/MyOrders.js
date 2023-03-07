import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const MyOrders = () => {
  const arr = new Array(4, 0);
  return (
    <div>
      <div>
        <button>Completed</button>
        <button>Processing</button>
        <button>Cancelled</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            return (
              <tr>
                <td>
                  <input type="text" />
                  #239847232
                </td>
                <td>Semptember 5, 2020</td>
                <td>$218.50</td>
                <td>Paid</td>
                <td>
                  <MdArrowForwardIos />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
