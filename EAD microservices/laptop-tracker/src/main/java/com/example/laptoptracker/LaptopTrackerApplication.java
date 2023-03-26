package com.example.laptoptracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example")
public class LaptopTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LaptopTrackerApplication.class, args);
	}

}
