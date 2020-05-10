package com.cab.registraion.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name="user_registeration", schema="cabdb")
public class RegistrationEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String address;
	private String designation;
	private String phone;
	
	@Column(name="supportivefile")
	private String supportivefile;
	
	@Column(name="itemimage",nullable=true)
	private String itemimage;

	@CreationTimestamp
	//@Temporal(value = TemporalType.DATE)
	@Column(name = "createddate")
	private Date createddate;
	
	@DateTimeFormat(pattern="dd/MM/yyyy")
	@Column(name = "dob")
	private Date dob;
	
	
	@Column(name="bloodgroup")
	private String bloodgroup;
	
	@Column(name="pan")
	private String pan;
	
	
	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	@Transient
    private MultipartFile files;
	
	@Transient
    private MultipartFile files2;

	
	public String getItemimage() {
		return itemimage;
	}

	public void setItemimage(String itemimage) {
		this.itemimage = itemimage;
	}

	public MultipartFile getFiles2() {
		return files2;
	}

	public void setFiles2(MultipartFile files2) {
		this.files2 = files2;
	}

	public MultipartFile getFiles() {
		return files;
	}

	public void setFiles(MultipartFile files) {
		this.files = files;
	}

	public String getSupportivefile() {
		return supportivefile;
	}

	public void setSupportivefile(String supportivefile) {
		this.supportivefile = supportivefile;
	}
	
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	

}
/**
ALTER table cabdb.user_registeration add bloodgroup character varying;

ALTER TABLE cabdb.user_registeration
ADD pan character varying(255);
*/
		/**           db information 
		schema is cabdb;
		CREATE TABLE user_registeration (
	    id int NOT NULL AUTO_INCREMENT,
	    name varchar(255) NOT NULL,
	    address fresher(255) NOT NULL,
	    designation varchar(255) NOT NULL,
	     phone varchar(255) NOT NULL,
	     supportivefile varchar(255) NOT NULL,
	     itemimage varchar(255) NOT NULL,
	     createddate date,
	     dob datetime,
	    PRIMARY KEY (id)
				);
				*/
