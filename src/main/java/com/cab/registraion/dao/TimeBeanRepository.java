package com.cab.registraion.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cab.registraion.model.TimeBean;

public interface TimeBeanRepository extends JpaRepository<TimeBean, Integer> {

	
	@Query(value="select * from cabdb.time_bean where id =:id",nativeQuery=true)
	public List<TimeBean> findAllByIdData(@Param("id") Integer id);
}
