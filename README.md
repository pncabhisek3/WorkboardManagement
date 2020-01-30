# WorkboardManagement
An spring boot 2 + Angular 1.7 (With Routing) + MySql + Hibernate v 5.x Jpa application.  

Project: WorkBoardManagement(WBM)
=================================

DB Structure (dbname: workboard)
--------------------------------
(tables)
	- student	(studentId, studentName, score, rollNumber, joinDate, rank)
	- address (addressId, pincode, addressLine1, addressLine2, state, country)
	- subject (subjectId, class, classSubjects, studentId)
	

UI Structure
-------------
Entry Point: Institution Dashboard(WBM_Dashboard)
(pages)
	- WBM_Dashboard (js, html, css, etc..)
	- addStudent (js, html, css, etc..)
	- editStudent (js, html, css, etc..)
	- addSubject (js, html, css, etc..)
	- editSubject (js, html, css, etc..)
	
Java Model
-----------
- Model
	-- Stuent
	-- Subject
	-- Address
	
- Dao
	-- StudentDao/Impl
	-- AddressDao/Impl
	-- SubjectDao/Impl
	
- Service
	-- StudentService
	-- AddressService
	-- SubjectService

- Rest Controllers
	-- StudentController
	-- ADdressController
	-- SubjectController
	
- Utils
	-- JsonUtils
	-- HibernateUtils
  
  
  
