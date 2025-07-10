package com.smartest.model;

import jakarta.persistence.*;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answers = new ArrayList<>();

    @Column(name = "rightId", nullable = false)
    int rightId;

    // getters, setters
    public int getId(){
        return this.id;
    }

    public String getTitle(){
        return this.title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    /*public getAnswers(){
        return this.answers;
    }

    public setAnswers(Answer[] answers){
        // проверка по айди уже совпадающих
        this.answers = answers;
    }*/

    public int getRightId() {
        return rightId;
    }

    public void setRightId(int rightId) {
        this.rightId = rightId;
    }
}