import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import "./Orders.css";
import { getAllOrders, deleteOrder } from "../../services/OrderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await getAllOrders();
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?",
    );

    if (!confirmDelete) return;

    try {
      await deleteOrder(id);
      loadOrders();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredOrders = orders.filter((order) => {
    return (
      order.customerName?.toLowerCase().includes(search.toLowerCase()) ||
      order.status?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>Orders</h2>

        <Link to="/orders/add" className="add-btn">
          <FaPlus />
          Add Order
        </Link>
      </div>

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search Order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Quantity</th>

              <th>Total</th>

              <th>Date</th>

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty">
                  No Orders Found
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>

                  <td>{order.customerName}</td>

                  <td>{order.productName}</td>

                  <td>{order.quantity}</td>

                  <td>₹ {order.totalAmount}</td>

                  <td>{order.orderDate}</td>

                  <td>
                    <span className={`status ${order.status?.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>

                  <td>to={`/orders/edit/${order.id}`}
                    <Link  className="edit-btn">
                      <FaEdit />
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(order.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
