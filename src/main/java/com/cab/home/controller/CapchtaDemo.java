package com.cab.home.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.cab.registraion.dao.TimeBeanRepository;
import com.cab.registraion.model.CaptchaResponse;
import com.cab.registraion.model.TimeBean;


@Controller
@RequestMapping(value="/cap")
public class CapchtaDemo {

	@Autowired
	TimeBeanRepository timeBeanRepository;
	
	// for create captcha 
	// https://www.google.com/recaptcha/admin/create
	// Domains == use localhost and your website domain
	
	@Autowired
	RestTemplate restTemplate;
	
	@RequestMapping(value="/caplogin")
	public String home(Model model) {
		System.out.println("captcha side....");
		
		return "captcha_login";
	}
	

	@PostMapping("/capRegistration")
	public String capresgis(@RequestParam(name="g-recaptcha-response")String gcaptcha,HttpServletRequest req,
			RedirectAttributes redirectAttributes,Model model) {
		System.out.println("captcha post method");
		String name=req.getParameter("uname");
		String psw=req.getParameter("psw");
		
		String url = "https://www.google.com/recaptcha/api/siteverify";
		String params ="?secret=6Lev6OQUAAAAAP478_pGH-EPKptBRWDjr0XaHZ-y&response="+gcaptcha;

		CaptchaResponse reCaptchaResponse=restTemplate.exchange(url+params, HttpMethod.POST,null,CaptchaResponse.class).getBody();

		if(reCaptchaResponse.isSuccess()) {
			redirectAttributes.addFlashAttribute("success", "Welcome to User!");
			model.addAttribute("userName", name);
			return "redirect:/cap/welcomeUser";
		}else {
			redirectAttributes.addFlashAttribute("failed", "Failed recaptcha verification!");
			return "redirect:/cap/caplogin";
		}
		
	
	}
	
	
	@RequestMapping(value="/welcomeUser")
	public String welcomeUserPage(Model model) {
		return "welcomeUser";
	}
	
	@RequestMapping(value="/capCalender")
	public String capCalender(Model model) {
		return "capCalender";
	}	
	
	
	
	@PostMapping("/capSaveTime")
	public String capTime(@ModelAttribute TimeBean timeBean,HttpServletRequest req,
			RedirectAttributes redirectAttributes,Model model) {
		System.out.println("captcha post method");
		timeBeanRepository.save(timeBean);
	List<TimeBean> ll = timeBeanRepository.findAllByIdData(1);
	model.addAttribute("key", ll);
		/*
		 * for(TimeBean aa:ll) { if(aa.getChk() !=null) { if( aa.getChk()[0] !=null ||
		 * aa.getChk()[0] !="") { model.addAttribute("key0", aa.getChk()[0]); }
		 * 
		 * if(aa.getChk()[1] !=null || aa.getChk()[1] !="") { model.addAttribute("key1",
		 * aa.getChk()[1]); }
		 * 
		 * if(aa.getChk()[2] !=null || aa.getChk()[2] !="") { model.addAttribute("key2",
		 * aa.getChk()[2]); } } }
		 */
	
	
		return "capCalender";
		
		
	
	}

	@RequestMapping(value="/scheduler")
	public String scheduler(Model model) {
		System.out.println("scheduler side....");
		
		return "scheduler";
	}
	
	
	///     Scheduler in spring boot
	@RequestMapping(value="/printScheduler")
	public String schedulerPrint(Model model) {
		System.out.println("printScheduler side....");
		model.addAttribute("key",printName());
		System.out.println("every 5 second");
		return "scheduler";
	}
	
	//@Scheduled(fixedRate=5000)  // every 5 second
	@Scheduled(cron="0/10 * * * * *")    // sec min hours day
	public String printName() {
		System.out.println("printName side....");
		System.out.println("time : "+new Date().toString());
		return "Welcome";
	}
}
