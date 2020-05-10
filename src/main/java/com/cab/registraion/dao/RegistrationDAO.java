package com.cab.registraion.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cab.registraion.model.RegistrationEntity;



@Repository("dao1")
public interface RegistrationDAO extends JpaRepository<RegistrationEntity, Integer>{

	@Query(value="select * from cabdb.user_registeration where id=:id",nativeQuery=true)
	public RegistrationEntity findByUserId(@Param("id") Integer id);
	
}
