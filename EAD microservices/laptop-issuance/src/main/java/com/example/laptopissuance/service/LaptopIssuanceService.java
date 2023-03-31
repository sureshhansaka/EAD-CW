package com.example.laptopissuance.service;

import com.example.laptopissuance.data.LaptopIssuance;
import com.example.laptopissuance.data.LaptopIssuanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopIssuanceService {

    @Autowired
    private final LaptopIssuanceRepository laptopIssuanceRepository;

    public LaptopIssuanceService(LaptopIssuanceRepository laptopIssuanceRepository) {
        this.laptopIssuanceRepository = laptopIssuanceRepository;
    }

    public LaptopIssuance issueLaptop(LaptopIssuance laptopIssuance){
        return laptopIssuanceRepository.save(laptopIssuance);
    }

    public List<LaptopIssuance> getUnreturnedAllocations(){
        return laptopIssuanceRepository.getUnreturnedAllocations();
    }

    public LaptopIssuance updateLaptopReturn(LaptopIssuance laptopIssuance){
        return laptopIssuanceRepository.save(laptopIssuance);
    }

    public LaptopIssuance getLaptopIssuanceByLapCode(String laptopCode){
        return laptopIssuanceRepository.getLaptopIssuanceByLapCode(laptopCode);
    }
}

