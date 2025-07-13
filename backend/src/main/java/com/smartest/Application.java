package com.smartest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.smartest.repository.QuestionRepository;
import com.smartest.model.Question;
import com.smartest.model.Answer;
import com.smartest.model.Complexity;

import java.util.List;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	// создание вопросов и ответов при запуске приложения (hibernate.ddl-auto = create-drop)
	/*@Bean
	public CommandLineRunner loadData(QuestionRepository questionRepository) {
		return args -> {
			Question question1 = new Question();
			question1.setText("2 + 2 х 2 ?");
			question1.setRightIndex( Byte.valueOf( (byte) 1) );
			question1.setComplexity(Complexity.EASY);

			Answer answer1 = new Answer();
			answer1.setText("6");
			answer1.setQuestion(question1);

			Answer answer2 = new Answer();
			answer2.setText("8");
			answer2.setQuestion(question1);

			Answer answer3 = new Answer();
			answer3.setText("10");
			answer3.setQuestion(question1);

			Answer answer4 = new Answer();
			answer4.setText("0");
			answer4.setQuestion(question1);

			question1.setAnswers(List.of(answer1, answer2, answer3, answer4));

			questionRepository.save(question1);

			// 2
			Question question2 = new Question();
			question2.setText("Какой язык программирования используется во фреймворке Spring Boot");
			question2.setRightIndex( Byte.valueOf( (byte) 4) );
			question2.setComplexity(Complexity.HARD);

			Answer answer2_1 = new Answer();
			answer2_1.setText("Python");
			answer2_1.setQuestion(question2);

			Answer answer2_2 = new Answer();
			answer2_2.setText("C++");
			answer2_2.setQuestion(question2);

			Answer answer2_3 = new Answer();
			answer2_3.setText("JavaScript");
			answer2_3.setQuestion(question2);

			Answer answer2_4 = new Answer();
			answer2_4.setText("Java");
			answer2_4.setQuestion(question2);

			question2.setAnswers(List.of(answer2_1, answer2_2, answer2_3, answer2_4));

			questionRepository.save(question2);
		};
	}*/
}
