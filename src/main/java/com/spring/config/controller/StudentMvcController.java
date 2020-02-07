package com.spring.config.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/item")
public class StudentMvcController {

	@GetMapping(value = "/dashboard")
	public String dashboard() {
		return "dashboard-module/dashboardTemplate";
	}

	@GetMapping(value = "/students")
	public String students() {
		return "students-module/studentsTemplate";
	}
	
	@GetMapping(value = "/student")
	public String student() {
		return "student-module/studentTemplate";
	}
	
	@GetMapping(value = "/studentEdit")
	public String studentEdit() {
		return "student-module/studentEditTemplate";
	}

}
