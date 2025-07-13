package com.smartest.dto;

import com.smartest.model.Question;
import com.smartest.model.Answer;

import java.util.List;
import java.util.ArrayList;

public class QuestionDto {
    private Long id;
    private String title;
    private List<Answer> answers = new ArrayList<>();

    public QuestionDto(Question question){
        this.id = question.getId();
        this.title = question.getTitle();
        this.answers = question.getAnswers();
    }

    // getters
    public Long getId(){
        return this.id;
    }

    public String getTitle(){
        return this.title;
    }

    public List<Answer> getAnswers(){
        return this.answers;
    }
}