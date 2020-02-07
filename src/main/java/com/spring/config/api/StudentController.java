package com.spring.config.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.config.commons.ApiResponse;
import com.spring.config.dao.StudentDao;
import com.spring.config.model.Student;

@RestController
public class StudentController {

	@Autowired
	StudentDao sd;

	@GetMapping(value = "/api/students", produces = "application/json")
	public ResponseEntity<Object> getStudents() throws Exception {
		List<Student> students = (List<Student>) sd.findAll();
		ApiResponse<List<Student>> resp = new ApiResponse<>(true, null, students);
		return new ResponseEntity<Object>(resp, HttpStatus.OK);
	}

	@GetMapping(value = "/api/student/{id}", produces = "application/json")
	public ResponseEntity<Object> getStudent(@PathVariable("id") Integer id) throws Exception {
		Optional<Student> student = sd.findById(id);
		ApiResponse<Optional<Student>> resp = new ApiResponse<>(true, null, student);
		return new ResponseEntity<Object>(resp, HttpStatus.OK);
	}

	@DeleteMapping(value = "/api/student/{id}", produces = "application/json")
	public ResponseEntity<Object> deleteStudentById(@PathVariable("id") Integer id) throws Exception {
		sd.deleteById(id);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/api/student/", produces = "application/json")
	public ResponseEntity<Object> deleteStudent(@RequestBody Student student) throws Exception {
		sd.delete(student);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@PostMapping(value = "/api/student", produces = "application/json")
	public ResponseEntity<Object> addStudent(@RequestBody Student student) {
		student = sd.save(student);
		ApiResponse<Student> resp = new ApiResponse<Student>(student);
		return new ResponseEntity<Object>(resp, HttpStatus.OK);
	}
	
	@PutMapping(value = "/api/student", produces = "application/json")
	public ResponseEntity<Object> updateStudent(@RequestBody Student student) {
		student = sd.save(student);
		ApiResponse<Student> resp = new ApiResponse<Student>(student);
		return new ResponseEntity<Object>(resp, HttpStatus.OK);
	}
}
