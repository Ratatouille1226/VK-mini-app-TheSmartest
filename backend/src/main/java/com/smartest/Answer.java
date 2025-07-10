package com.smartest.model;

import jakarta.persistence.*;

@Entity
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    public int getId() {
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
        if(this.question != null && question){
            throw Exception("ahuel?");
        }
        this.question = question;
    }
}