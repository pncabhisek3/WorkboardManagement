package com.spring.config.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subject")
public class Subject implements Serializable {

	private static final long serialVersionUID = -937108102741873665L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer subjectId;
	@Column(name = "class")
	private Integer studentClass;
	private String classSubject;

//	@ManyToOne(fetch = FetchType.LAZY, targetEntity = Student.class)
//	@JoinColumn(name = "studentId")
	@Column(name = "student_id")
	private Integer studentId;

	public Integer getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}

	public Integer getStudentClass() {
		return studentClass;
	}

	public void setStudentClass(Integer studentClass) {
		this.studentClass = studentClass;
	}

	public String getClassSubject() {
		return classSubject;
	}

	public void setClassSubject(String classSubject) {
		this.classSubject = classSubject;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

}
