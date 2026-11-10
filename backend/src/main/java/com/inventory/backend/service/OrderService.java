package com.inventory.backend.service;

import com.inventory.backend.entity.Order;
import com.inventory.backend.repository.OrderRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {

        this.orderRepository = orderRepository;

    }

    // Get All Orders
    public List<Order> getAllOrders() {

        return orderRepository.findAll();

    }

    // Get Order By ID
    public Order getOrderById(Long id) {

        return orderRepository.findById(id).orElse(null);

    }

    // Add Order
    public Order addOrder(Order order) {

        return orderRepository.save(order);

    }

    // Update Order
    public Order updateOrder(Order order) {

        return orderRepository.save(order);

    }

    // Delete Order
    public void deleteOrder(Long id) {

        orderRepository.deleteById(id);

    }

}