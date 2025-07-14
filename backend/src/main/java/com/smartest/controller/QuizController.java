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
    private Byte rightIndex;
    private Byte scores = 0;
    private String complexity;

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

    @GetMapping("/submitAnswer")
    public void submitAnswer(
            @RequestParam(value = "questionId") Long questionId,
            @RequestParam(value = "answerIndex") Byte answerIndex){

        if(questionId == null || answerIndex == null){
            throw new RuntimeException("field answerIndex or questionId cant be null");
        }

        if(this.rightIndex == null){
            Question question = questionRepository.findById(questionId);
            this.rightIndex = question.rightIndex;
            this.complexity = question.complexity;
        }
        if(answerIndex == this.rightIndex){
            switch (this.complexity){
                case "EASY":
                    this.scores += 1;
                    break;
                case "MEDIUM":
                    this.scores += 2;
                    break;
                case "HARD":
                    this.scores += 3;
                    break;
                default:
                    throw new RuntimeException("Incorrect complexity index - " + this.complexity);
            }
        }
        this.rightIndex = null;
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