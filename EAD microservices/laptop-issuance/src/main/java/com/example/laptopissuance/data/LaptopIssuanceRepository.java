package com.example.laptopissuance.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface LaptopIssuanceRepository extends JpaRepository<LaptopIssuance,Integer> {

    @Query("Select laptopIssuance from LaptopIssuance laptopIssuance where laptopIssuance.returnedDateTime = null " )
    List<LaptopIssuance> getUnreturnedAllocations();

    @Query("select  laptopIssuance from LaptopIssuance laptopIssuance where laptopIssuance.laptopCode = ?1 and laptopIssuance.returnedDateTime = null")
    LaptopIssuance getLaptopIssuanceByLapCode(String laptopCode);

}
