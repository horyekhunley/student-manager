package tech.mahbub.schoolManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.mahbub.schoolManager.model.Student;
import tech.mahbub.schoolManager.repository.StudentRepository;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/create")
    public void createStudent(@RequestBody Student student){
        studentRepository.insert(student);

    }
    @GetMapping("/list")
    public List<Student> listStudent(){
        return studentRepository.findAll();
    }
    @PostMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        studentRepository.deleteById(id);

    }
}
