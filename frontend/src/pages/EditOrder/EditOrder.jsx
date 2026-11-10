import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditOrder.css";
import { getOrderById, updateOrder } from "../../services/OrderService";

function EditOrder() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    totalAmount: "",
    orderDate: "",
    status: "",
  });

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const response = await getOrderById(id);

      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setOrder({
      ...order,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateOrder(id, order);

      alert("Order Updated Successfully");

      navigate("/orders");
    } catch (error) {
      console.log(error);

      alert("Failed to Update Order");
    }
  };

  return (
    <div className="edit-order">
      <div className="edit-card">
        <h2>Edit Order</h2>

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

            <button type="submit" className="update-btn">
              Update Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditOrder;
