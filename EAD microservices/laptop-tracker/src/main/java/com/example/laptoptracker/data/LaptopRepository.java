package com.example.laptoptracker.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaptopRepository extends JpaRepository<Laptop,Integer> {

    @Query ("Select l from Laptop l where l.laptopCode like ?1% ")
    List<Laptop> findLaptopsByLabName(String Lab);

    @Query("Select l from Laptop l where l.laptopCode = ?1 ")
    Laptop findLaptopByLapCode(String lapCode);

    @Query("UPDATE Laptop l SET l.status = ?2  WHERE l.laptopCode = ?1")
    Laptop updateLaptopStatusByLapCode(String lapCode, int status);
}
