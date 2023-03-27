package com.example.laptopissuance.data;

import javax.persistence.*;


@Entity
@Table(name = "laptop_issued")
public class LaptopIssuance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int issueId;

    @Column(name = "lap_code")
    private String  laptopCode;

    @Column(name = "issued_date_time")
    private String issuedDateTime;

    @Column(name = "issued_to")
    private String issuedTo;

    @Column(name = "returned_date_time")
    private String returnedDateTime;

    public LaptopIssuance() {
    }

    public LaptopIssuance(String laptopCode, String issuedDateTime, String issuedTo, String returnedDateTime) {
        this.laptopCode = laptopCode;
        this.issuedDateTime = issuedDateTime;
        this.issuedTo = issuedTo;
        this.returnedDateTime = returnedDateTime;
    }

    public LaptopIssuance(String laptopCode, String issuedTo) {
        this.laptopCode = laptopCode;
        this.issuedTo = issuedTo;
    }

    public LaptopIssuance(String returnedDateTime) {
        this.returnedDateTime = returnedDateTime;
    }

    public LaptopIssuance(String laptopCode, String issuedDateTime, String returnedDateTime) {
        this.laptopCode = laptopCode;
        this.issuedDateTime = issuedDateTime;
        this.returnedDateTime = returnedDateTime;
    }

    public int getIssueId() {
        return issueId;
    }

    public void setIssueId(int issueId) {
        this.issueId = issueId;
    }

    public String getLaptopCode() {
        return laptopCode;
    }
     public void setLaptopCode(String laptopCode) {
        this.laptopCode = laptopCode;
    }

    public String getIssuedDateTime() {
        return issuedDateTime;
    }

    public void setIssuedDateTime(String issuedDateTime) {
        this.issuedDateTime = issuedDateTime;
    }

    public String getIssuedTo() {
        return issuedTo;
    }

    public void setIssuedTo(String issuedTo) {
        this.issuedTo = issuedTo;
    }

    public String getReturnedDateTime() {
        return returnedDateTime;
    }

    public void setReturnedDateTime(String returnedDateTime) {
        this.returnedDateTime = returnedDateTime;
    }
}
