package com.smartest.dto;

import com.smartest.model.Question;
import com.smartest.model.Answer;

import java.util.List;
import java.util.ArrayList;

public class QuestionDto {
    private Long id;
    private String text;
    private List<Answer> answers = new ArrayList<>();

    public QuestionDto(Question question){
        this.id = question.getId();
        this.text = question.getText();
        this.answers = question.getAnswers();
    }

    // getters
    public Long getId(){
        return this.id;
    }

    public String getText(){
        return this.text;
    }

    public List<Answer> getAnswers(){
        return this.answers;
    }
}