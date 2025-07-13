package com.smartest.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.ArrayList;

import com.smartest.model.Complexity;

//import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "text", nullable = false)
    private String text;

    @Enumerated(EnumType.STRING)
    @Column(name = "complexity", nullable = false)
    private Complexity complexity;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    // @JsonManagedReference
    private List<Answer> answers = new ArrayList<>();

    @Column(name = "rightIndex", nullable = false)
    Byte rightIndex;

    // getters, setters
    public Long getId(){
        return this.id;
    }


    public String getText(){
        return this.text;
    }

    public void setText(String text){
        this.text = text;
    }


    public List<Answer> getAnswers(){
        return this.answers;
    }

    public void setAnswers(List<Answer> answers){
        // проверка по айди уже совпадающих
        //answers.each{ it.question = this.id } // по-моему какая-то шляпа и суть метода надо производить на сторону Answer.
        // да и вообще вынести эту логику в контроллеры/сервисы
        this.answers = answers;
    }


    public Byte getRightIndex() {
        return this.rightIndex;
    }

    public void setRightIndex(Byte rightIndex) {
        this.rightIndex = rightIndex;
    }

    public Complexity getComplexity() {
        return complexity;
    }

    public void setComplexity(Complexity complexity){
        this.complexity = complexity;
    }
}