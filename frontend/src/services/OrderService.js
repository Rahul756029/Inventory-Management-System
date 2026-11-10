import API from "./API";


// Get all orders
export const getAllOrders = () => {
    return API.get("/orders");
};


// Get single order by id
export const getOrderById = (id) => {
    return API.get(`/orders/${id}`);
};


// Create new order
export const createOrder = (order) => {
    return API.post("/orders", order);
};


// Update order
export const updateOrder = (id, order) => {
    return API.put(`/orders/${id}`, order);
};


// Delete order
export const deleteOrder = (id) => {
    return API.delete(`/orders/${id}`);
};