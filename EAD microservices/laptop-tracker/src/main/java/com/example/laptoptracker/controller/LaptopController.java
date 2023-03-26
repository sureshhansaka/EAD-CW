package com.example.laptoptracker.controller;

import com.example.laptoptracker.data.Laptop;
import com.example.laptoptracker.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class LaptopController {

    @Autowired
    private final LaptopService laptopService;

    public LaptopController(LaptopService laptopService) {
        this.laptopService = laptopService;
    }

    @GetMapping(path = "/laptops")
    public List<Laptop> getAllLaptops()
    {
        return laptopService.getAllLaptops();
    }

    @GetMapping(path = "/laptops/{id}")
    public Laptop getLaptopById(@PathVariable int id){
        return laptopService.getLaptopById(id);
    }

    @PostMapping(path = "/laptops")
    public Laptop createLaptop(@RequestBody Laptop laptop){

        laptop.setStatus(1);
        return laptopService.createLaptop(laptop);
    }

    @PutMapping(path = "/laptops")
    public Laptop editLaptop(@RequestBody Laptop laptop){

        laptop.setId(laptopService.getLaptopByLapCode(laptop.getLaptopCode()).getId());
        laptop.setBrand(laptopService.getLaptopByLapCode(laptop.getLaptopCode()).getBrand());
        laptop.setHddType(laptopService.getLaptopByLapCode(laptop.getLaptopCode()).getHddType());
        laptop.setTotalSpace(laptopService.getLaptopByLapCode(laptop.getLaptopCode()).getTotalSpace());
        laptop.setRamSize(laptopService.getLaptopByLapCode(laptop.getLaptopCode()).getRamSize());
        return laptopService.updateLaptop(laptop);
    }

    @DeleteMapping(path = "/laptops/{id}")
    public void deleteLaptopById(@PathVariable int id){
        laptopService.deleteLaptopById(id);
    }

    @GetMapping(path = "/laptops", params = "labName")
    public List<Laptop> getAllLaptopsByLabName( String labName){
        return  laptopService.getAllLaptopsByLab(labName);
    }

    @GetMapping(path = "/laptops", params = "lapCode")
    public Laptop getLaptopByLapCode(String lapCode){
        return laptopService.getLaptopByLapCode(lapCode);
    }

}