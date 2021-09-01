package tech.mahbub.schoolManager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tech.mahbub.schoolManager.model.Student;

@Repository
public interface StudentRepository extends MongoRepository <Student, String>{
}
