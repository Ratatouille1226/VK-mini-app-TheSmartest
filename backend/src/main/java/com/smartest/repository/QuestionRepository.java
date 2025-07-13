package com.smartest.repository;

import com.smartest.model.Question;
import com.smartest.model.Complexity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = """
        SELECT
            *
        FROM question
        
        WHERE complexity = :complexity
        ORDER BY RANDOM()
        LIMIT :limit""", nativeQuery = true)
    List<Question> findAllByComplexity(@Param("complexity") String complexity, @Param("limit") int limit);
}