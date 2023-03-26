package com.example.laptopissuance.controller;

import com.example.laptopissuance.data.LaptopIssuance;
import com.example.laptopissuance.service.LaptopIssuanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LaptopIssuanceController {
    @Autowired
    private final LaptopIssuanceService laptopIssuanceService;

    public LaptopIssuanceController(LaptopIssuanceService laptopIssuanceService) {
        this.laptopIssuanceService = laptopIssuanceService;
    }

    @PostMapping(path = "/allocations")
    public LaptopIssuance issueLaptop(@RequestBody LaptopIssuance laptopIssuance){
        return laptopIssuanceService.issueLaptop(laptopIssuance);
    }

    @GetMapping(path = "/allocations")
    public List<LaptopIssuance> getAllLaptopIssued(){
        return laptopIssuanceService.getAllLaptopIssued();
    }

    @PutMapping(path = "/allocations")
    public LaptopIssuance updateLaptopReturn(@RequestBody LaptopIssuance laptopIssuance){
        return laptopIssuanceService.updateLaptopReturn(laptopIssuance);
    }



}
