package com.smartest.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.ArrayList;

//import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    // @JsonManagedReference
    private List<Answer> answers = new ArrayList<>();

    @Column(name = "rightIndex", nullable = false)
    Byte rightIndex;

    // getters, setters
    public Long getId(){
        return this.id;
    }


    public String getTitle(){
        return this.title;
    }

    public void setTitle(String title){
        this.title = title;
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
}