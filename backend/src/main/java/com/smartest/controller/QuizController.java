package com.smartest.controller;

import com.smartest.model.Question;
import com.smartest.dto.QuestionDto;
import com.smartest.model.Answer;
import com.smartest.model.Complexity;
import com.smartest.repository.QuestionRepository;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.lang.RuntimeException;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    private final QuestionRepository questionRepository;

    public QuizController(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    @GetMapping("/start/{complexityIndex}")
    public List<QuestionDto> start(@PathVariable("complexityIndex") Byte complexityIndex){
        String complexity;
        switch(complexityIndex) {
            case 1:
                complexity = "EASY";
                break;
            case 2:
                complexity = "MEDIUM";
                break;
            case 3:
                complexity = "HARD";
                break;
            default:
                throw new RuntimeException("Incorrect complexity index - " + complexityIndex);
        }

        List<Question> questions = questionRepository.findAllByComplexity(complexity, 10);

        return questions.stream()
                .map(QuestionDto::new)
                .toList();
    }

    @GetMapping("/useHint")
    public Boolean useHint() {
        /*if(user.getHint > 0){
            return true;
        } else {
            return false;
        }*/

        return false;
    }
}