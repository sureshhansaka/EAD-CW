package com.example.laptopissuance.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaptopIssuanceRepository extends JpaRepository<LaptopIssuance,Integer> {
}
