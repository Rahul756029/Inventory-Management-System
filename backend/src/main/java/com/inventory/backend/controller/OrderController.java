package com.inventory.backend.controller;

import com.inventory.backend.entity.Order;
import com.inventory.backend.service.OrderService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {

        this.orderService = orderService;

    }

    // Get All Orders
    @GetMapping
    public List<Order> getAllOrders() {

        return orderService.getAllOrders();

    }

    // Get Order By ID
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {

        return orderService.getOrderById(id);

    }

    // Add Order
    @PostMapping
    public Order addOrder(@RequestBody Order order) {

        return orderService.addOrder(order);

    }

    // Update Order
    @PutMapping("/{id}")
    public Order updateOrder(
            @PathVariable Long id,
            @RequestBody Order order) {

        Order existingOrder = orderService.getOrderById(id);

        if (existingOrder != null) {

            existingOrder.setCustomerName(order.getCustomerName());
            existingOrder.setProductName(order.getProductName());
            existingOrder.setQuantity(order.getQuantity());
            existingOrder.setTotalPrice(order.getTotalPrice());
            existingOrder.setOrderDate(order.getOrderDate());
            existingOrder.setStatus(order.getStatus());

            return orderService.updateOrder(existingOrder);
        }

        return null;
    }

    // Delete Order
    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable Long id) {

        orderService.deleteOrder(id);

        return "Order Deleted Successfully";
    }

}