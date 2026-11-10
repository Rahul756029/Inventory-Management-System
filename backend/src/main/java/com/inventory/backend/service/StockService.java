package com.inventory.backend.service;


import com.inventory.backend.entity.Stock;
import com.inventory.backend.repository.StockRepository;


import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class StockService {



    private final StockRepository stockRepository;



    public StockService(StockRepository stockRepository){

        this.stockRepository=stockRepository;

    }




    public List<Stock> getAllStocks(){

        return stockRepository.findAll();

    }




    public Stock getStockById(Long id){

        return stockRepository.findById(id).orElse(null);

    }




    public Stock addStock(Stock stock){

        return stockRepository.save(stock);

    }





    public void deleteStock(Long id){

        stockRepository.deleteById(id);

    }



}