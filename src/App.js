import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which crop is sown on the largest area in India?',
			answerOptions: [
				{ answerText: 'Rice', isCorrect: true },
				{ answerText: 'Sugarcane', isCorrect: false },
				{ answerText: 'Maize', isCorrect: false },
				{ answerText: 'Wheat', isCorrect: false },
			],
		},
		{
			questionText: 'When did the World Trade Organization come into existence?',
			answerOptions: [
				{ answerText: '1995', isCorrect: true },
				{ answerText: '1992', isCorrect: false },
				{ answerText: '1994', isCorrect: false },
				{ answerText: '1993', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is the world’s largest and deepest ocean?',
			answerOptions: [
				{ answerText: 'Artic', isCorrect: false },
				{ answerText: 'Pacific', isCorrect: true },
				{ answerText: 'Indian', isCorrect: false },
				{ answerText: 'Atlantic', isCorrect: false },
			],
		},
		{
			questionText: 'During World War II, when did Germany attack France?',
			answerOptions: [
				{ answerText: '1942', isCorrect: false },
				{ answerText: '1940', isCorrect: true},
				{ answerText: '1943', isCorrect: false },
				{ answerText: '1941', isCorrect: false},
			],
		},
		{
			questionText: 'When did Germany sign a ceasefire treaty when World War I ended?',
			answerOptions: [
				{ answerText: 'January 19, 1918', isCorrect: false },
				{ answerText: 'November 11, 1918', isCorrect: true},
				{ answerText: 'May 30, 1918', isCorrect: false },
				{ answerText: 'February 15, 1918', isCorrect: false},
			],
		},
		{
			questionText: 'Which of the following is the capital of Ethiopia?',
			answerOptions: [
				{ answerText: 'Harare', isCorrect: false },
				{ answerText: 'Dar es Salam', isCorrect: false},
				{ answerText: 'Abuja', isCorrect: false },
				{ answerText: 'Addis Ababa', isCorrect: true},
			],
		},
		{
			questionText: 'What is the largest country in the World',
			answerOptions: [
				{ answerText: 'Russia', isCorrect: true },
				{ answerText: 'Canada', isCorrect: false},
				{ answerText: 'United States', isCorrect: false },
				{ answerText: 'China', isCorrect: false},
			],
		},
		{
			questionText: 'What is the fastest land animal?',
			answerOptions: [
				{ answerText: 'Pronghorn Antelope', isCorrect: false },
				{ answerText: 'Cheetah', isCorrect: true},
				{ answerText: 'Thomsons Gazelle', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false},
			],
		},
		{
			questionText: 'What is the capital of Indonesia?',
			answerOptions: [
				{ answerText: 'Bandung', isCorrect: false },
				{ answerText: 'Palembang', isCorrect: false},
				{ answerText: 'Medan', isCorrect: false },
				{ answerText: 'Jakarta', isCorrect: true},
			],
		},
		{
			questionText: 'What is the capital city of Bermuda?',
			answerOptions: [
				{ answerText: 'Hamilton', isCorrect: true },
				{ answerText: 'Santo Domingo', isCorrect: false},
				{ answerText: 'San Juan', isCorrect: false },
				{ answerText: 'Havana', isCorrect: false},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
	
		<div className='app flex h-screen bg-cover bg-blue-400'>
			
			<div className='container m-auto w-1/2 bg-center border-solid rounded-md shadow-xl bg-gray-800 grid justify-items-center'>
				{showScore ? (
				<div className='score-section flex-initial px-6 py-4 font-sans text-white text-2xl'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section px-6 py-4 text-white text-2xl ;eadomg-7 font-mono'>
						<div className='question-count'> 
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text text-center text-blue-200 pt-2'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section  flow-root  '>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="flex flex-col justify-center bg-grey-800 hover:bg-blue-300 border-2 text-left text-white hover:text-black w-full py-2 px-4 rounded ml-4 mb-4" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
		
		
	);
}