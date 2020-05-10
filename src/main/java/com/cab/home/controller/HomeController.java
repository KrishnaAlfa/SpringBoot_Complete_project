package com.cab.home.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.cab.registraion.dao.RegistrationDAO;
import com.cab.registraion.model.RegistrationEntity;




@Controller
//@RequestMapping(value="/cabs")
public class HomeController {

	
	@RequestMapping(value="/")
	public String home(Model model) {
		System.out.println("home side....");
		
		return "index";
	}
	
	
	/*@PostMapping(value="/hitForm")
	public ModelAndView getFormData(@RequestParam("no1") int x,
		                            @RequestParam("no2") int y	
			 ) {
		int sum =x+y;
		ModelAndView mv=new ModelAndView();
		mv.addObject("sumKey", sum);
		mv.setViewName("result");
		return mv;
	}
	
	*/
	
	
	/*@PostMapping(value="/hitForm")
	public String getFormData(@RequestParam("no1") int x,
		                            @RequestParam("no2") int y,	
		                             Model mv) {
		System.out.println("inside ...");
		int sum =x+y;
		mv.addAttribute("sumKey", sum);
		return "result";
	}
	*/
	
	
	
	
}
