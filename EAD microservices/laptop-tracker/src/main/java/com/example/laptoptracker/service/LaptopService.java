package com.example.laptoptracker.service;

import com.example.laptoptracker.data.Laptop;
import com.example.laptoptracker.data.LaptopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopService {

    @Autowired
    private final LaptopRepository laptopRepository;

    public LaptopService(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    public List<Laptop> getAllLaptops(){
        return laptopRepository.findAll();
    }

    public Laptop getLaptopById(int id){
        return laptopRepository.findById(id).get();
    }

    public Laptop createLaptop(Laptop laptop){
        return laptopRepository.save(laptop);
    }

    public Laptop updateLaptop(Laptop laptop){
        return laptopRepository.save(laptop);
    }

    public void deleteLaptopById(int id){
        laptopRepository.deleteById(id);
    }

    public List<Laptop> getAllLaptopsByLab(String labName){
        return laptopRepository.findLaptopsByLabName(labName);
    }

    public Laptop getLaptopByLapCode(String lapCode){
        return laptopRepository.findLaptopByLapCode(lapCode);
    }

    public Laptop updateLaptopStatusByLapCode (String laptopCode, int status){
        return laptopRepository.updateLaptopStatusByLapCode(status,laptopCode);
    }
}
