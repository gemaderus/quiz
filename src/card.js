import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

class Card extends Component {
  state = {
    response: null,
    answered: false
  }

  constructor(props) {
    super(props)
    const { answers } = props.question

    const mapAnswers = answers.map((answer, index) => {
      return {
        text: answer,
        index
      }
    })

    this.responses = shuffle(mapAnswers)
  }

  handleClick(value) {
    this.setState({
      answered: true,
      response: value
    })
  }

  render() {
    const { answered, response } = this.state
    const { question } = this.props

    return (
      <div>
        <div className="quiz">
          <h2>{question.Question}</h2>
          {answered === true ? null : (
            <ul>
              {this.responses.map(response => {
                return (
                  <li key={response.index}>
                    <button
                      onClick={e => {
                        this.handleClick(response.index)
                      }}
                    >
                      {response.text}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {answered === true ? (
          <div className="results">
            {response === 0 ? (
              <div className="answer-right">
                <i className="icon">Icono right</i>
                <p>La respuesta es correcta</p>
              </div>
            ) : (
              <div className="answer-wront">
                <i className="icon">Icono wrong</i>
                <p>Ohh! Tú respuesta no es correcta</p>
              </div>
            )}
            <div className="explanation">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa natus tempora quaerat, rem
                inventore quos laborum debitis unde deleniti non ut doloribus itaque nisi iste cum delectus labore.
                Aperiam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ipsa natus tempora quaerat, rem
                inventore quos laborum debitis unde deleniti non ut doloribus itaque nisi iste cum delectus labore.
                Aperiam.
              </p>
            </div>
            <button>Siguiente pregunta</button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Card
