package com.smartest.model;

import jakarta.persistence.*;

import java.lang.IllegalArgumentException;
import java.lang.RuntimeException;

//import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    @JsonIgnore
    // @JsonBackReference
    private Question question;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Question getQuestion(){
        return this.question;
    }

    public void setQuestion(Question question) {
        if (question == null) {
            throw new IllegalArgumentException("Question must not be null");
        }
        if(this.question != null){
            throw new RuntimeException("У объекта уже имеется ссылка на Question");
        }
        this.question = question;
    }
}