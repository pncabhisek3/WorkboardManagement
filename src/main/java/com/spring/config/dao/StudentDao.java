package com.spring.config.dao;

import org.springframework.data.repository.CrudRepository;

import com.spring.config.model.Student;

public interface StudentDao extends CrudRepository<Student, Integer>{

}
