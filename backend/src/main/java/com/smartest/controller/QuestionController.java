package com.smartest.controller;

import com.smartest.model.Question;
import com.smartest.dto.QuestionDto;
import com.smartest.repository.QuestionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import java.util.Optional;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @GetMapping("/list")
    public List<Question> list() {
        return questionRepository.findAll();
    }

    @GetMapping("get/{id}")
    public QuestionDto get(@PathVariable("id") Long id) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found, ID - " + id));

        return new QuestionDto(question);
    }

    // под удаление
    @GetMapping("getTest/{id}")
    public Question getTest(@PathVariable("id") Long id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found, ID - " + id));
    }

    // можно доработать чтобы создавать вопрос с ответами через фронт. для этого нужно будет
    // принимать объект title для Question и 4 title для answer. а, и индекс правильного ответа (1-4)
    // подумать про батч
    @PostMapping("/create")
    public Question create(@RequestBody Question question) {
        return questionRepository.save(question);
    }

    // spring security permits. этот метод вообще по сути не нужен для реста, как будто его из под капота достаточно вызывать. Либо внедрять с Spring security <3
    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable("id") Long id) {
        questionRepository.deleteById(id);
    }
}