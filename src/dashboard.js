import React, { Component } from 'react';
import Card from './card';

class Dashboard extends Component {
  state = {
    questions: [
      {
        "Question": "Wadus?",
        answers: [
        "Soy la respuesta una",
        "Soy la respuesta dos",
        "Soy la respuesta tres"
        ],
        "Right": 1,
        "Start": "Apr 10, 2018",
        "End": "Apr 14, 2018",
        "Explanation": "This is the explanation"
      },
      {
        "Question": "Foo?",
        answers: [
        "Soy la respuesta una",
        "Soy la respuesta dos",
        "Soy la respuesta tres"
        ],
        "Right": 2,
        "Start": "Apr 10, 2018",
        "End": "Apr 14, 2018",
        "Explanation": "This is the explanation"
      }
    ],
    step: 0,
  }

  clickHandler(e) {
    this.setState(state => {
      return {
        ...state,
        step: state.step + 1,
      }
    })
  }

  render() {
    const {questions, step} = this.state;
    const question = questions[step];
    return (
      <div className="container">
        <Card question={question} />
      </div>
    );
  }
}

export default Dashboard;
