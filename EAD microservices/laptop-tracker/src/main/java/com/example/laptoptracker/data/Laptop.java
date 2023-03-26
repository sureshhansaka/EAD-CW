package com.example.laptoptracker.data;

import javax.persistence.*;

@Entity
@Table(name = "Laptop")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "lap_code")
    String laptopCode;

    @Column(name = "brand")
    String brand;

    @Column(name = "hdd_type")
    String hddType;

    @Column(name = "total_space")
    String totalSpace;

    @Column(name = "ram")
    int ramSize;

    @Column(name = "status")
    int status;

    public Laptop() {
    }

    public Laptop(String laptopCode, String brand, String hddType, String totalSpace, int ramSize, int status) {
        this.laptopCode = laptopCode;
        this.brand = brand;
        this.hddType = hddType;
        this.totalSpace = totalSpace;
        this.ramSize = ramSize;
        this.status = status;
    }

    public Laptop(String laptopCode, int status) {
        this.laptopCode = laptopCode;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLaptopCode() {
        return laptopCode;
    }

    public void setLaptopCode(String laptopCode) {
        this.laptopCode = laptopCode;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getHddType() {
        return hddType;
    }

    public void setHddType(String hddType) {
        this.hddType = hddType;
    }

    public String getTotalSpace() {
        return totalSpace;
    }

    public void setTotalSpace(String totalSpace) {
        this.totalSpace = totalSpace;
    }

    public int getRamSize() {
        return ramSize;
    }

    public void setRamSize(int ramSize) {
        this.ramSize = ramSize;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
}
