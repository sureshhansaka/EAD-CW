package com.example.laptopissuance.controller;

import com.example.laptopissuance.data.LaptopIssuance;
import com.example.laptopissuance.service.LaptopIssuanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
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
    public List<LaptopIssuance> getUnreturnedAllocations(){
        return laptopIssuanceService.getUnreturnedAllocations();
    }


    @PutMapping(path = "/allocations")
    public LaptopIssuance updateLaptopStatusByLapCode(@RequestBody LaptopIssuance laptopIssuance){
        laptopIssuance.setIssueId(laptopIssuanceService.getLaptopIssuanceByLapCode(laptopIssuance.getLaptopCode()).getIssueId());
        laptopIssuance.setIssuedTo(laptopIssuanceService.getLaptopIssuanceByLapCode(laptopIssuance.getLaptopCode()).getIssuedTo());
        return laptopIssuanceService.updateLaptopReturn(laptopIssuance);
    }



}
