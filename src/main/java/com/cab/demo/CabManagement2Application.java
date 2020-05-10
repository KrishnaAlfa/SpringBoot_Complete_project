package com.cab.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

/*@SpringBootApplication
@ComponentScan({"com.cab.home.controller,com.cab.registraion.controller,com.cab.registraion.dao,com.cab.registraion.model"})
*/
@SpringBootApplication
@ComponentScan({"com.cab.home.controller,com.cab.registraion.controller,com.cab.file.comman,com.cab.*"})
@EntityScan("com.cab.registraion.model")
@EnableJpaRepositories("com.cab.registraion.dao")
@EnableScheduling                               // for Scheduler
public class CabManagement2Application extends SpringBootServletInitializer{

	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(CabManagement2Application.class);
    }
	
	public static void main(String[] args) {
		SpringApplication.run(CabManagement2Application.class, args);
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
	
}