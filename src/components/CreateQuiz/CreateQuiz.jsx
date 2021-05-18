import React, { useRef } from 'react';


function CreateQuiz() {
  const question = useRef(null);
  const correctAnswer = useRef(null);
  const incorrectAnswer1 = useRef(null);
  const incorrectAnswer2 = useRef(null);
  const incorrectAnswer3 = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      "question": question.current.value,
      "correctAnswer": correctAnswer.current.value,
      "incorrectAnswers": [
        incorrectAnswer1.current.value,
        incorrectAnswer2.current.value,
        incorrectAnswer3.current.value
      ]
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="question">
          Question: <input type="text" ref={question} />
        </label>
        <br />
        <label htmlFor="correctAnswer">
          Correct Question: <input type="text" ref={correctAnswer} />
        </label>
        <br />
        <label htmlFor="incorrectAnswer1">
          Incorrect Answer 1: <input type="text" ref={incorrectAnswer1} />
        </label>
        <br />
        <label htmlFor="incorrectAnswer1">
          Incorrect Answer 2: <input type="text" ref={incorrectAnswer2} />
        </label>
        <br />
        <label htmlFor="incorrectAnswer1">
          Incorrect Answer 3: <input type="text" ref={incorrectAnswer3} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default CreateQuiz;