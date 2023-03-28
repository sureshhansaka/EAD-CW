package com.example.signinmicroservices.Service;

import com.example.signinmicroservices.Data.Employee;
import com.example.signinmicroservices.Data.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    public List<Employee> getAllEmployee(){
        List<Employee> employees=employeeRepository.findAll();
        return employees;
    }
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeByUsernameAndPassword(String username,String password){
        return employeeRepository.findEmployeeByUsernameAndPassword(username,password);
    }

}
