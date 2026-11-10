package com.inventory.backend.controller;


import com.inventory.backend.entity.Stock;
import com.inventory.backend.service.StockService;


import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/api/stocks")
@CrossOrigin("*")
public class StockController {



    private final StockService stockService;



    public StockController(StockService stockService){

        this.stockService=stockService;

    }




    @GetMapping
    public List<Stock> getAllStocks(){

        return stockService.getAllStocks();

    }





    @GetMapping("/{id}")
    public Stock getStockById(
            @PathVariable Long id
    ){

        return stockService.getStockById(id);

    }





    @PostMapping
    public Stock addStock(
            @RequestBody Stock stock
    ){

        return stockService.addStock(stock);

    }






    @PutMapping("/{id}")
    public Stock updateStock(
            @PathVariable Long id,
            @RequestBody Stock stock
    ){


        Stock existing =
                stockService.getStockById(id);



        if(existing!=null){


            existing.setProductName(stock.getProductName());

            existing.setCategory(stock.getCategory());

            existing.setQuantity(stock.getQuantity());

            existing.setStatus(stock.getStatus());



            return stockService.addStock(existing);


        }


        return null;


    }







    @DeleteMapping("/{id}")
    public String deleteStock(
            @PathVariable Long id
    ){


        stockService.deleteStock(id);


        return "Stock Deleted Successfully";


    }



}