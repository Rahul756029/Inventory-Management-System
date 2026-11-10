import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddOrder.css";
import { createOrder } from "../../services/OrderService";

function AddOrder() {
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    totalAmount: "",
    orderDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrder(order);

      alert("Order Added Successfully");

      navigate("/orders");
    } catch (error) {
      console.log(error);

      alert("Failed to Add Order");
    }
  };

  return (
    <div className="add-order">
      <div className="order-card">
        <h2>Add New Order</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>

            <input
              type="text"
              name="customerName"
              value={order.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              name="productName"
              value={order.productName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Total Amount</label>

            <input
              type="number"
              name="totalAmount"
              value={order.totalAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Order Date</label>

            <input
              type="date"
              name="orderDate"
              value={order.orderDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select name="status" value={order.status} onChange={handleChange}>
              <option value="Pending">Pending</option>

              <option value="Completed">Completed</option>

              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="button-group">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/orders")}
            >
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Save Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOrder;
