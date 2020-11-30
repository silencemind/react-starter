import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const app = () => {
  const course  = "half stack development"
  const part1 = 'fundamental of react '
  const exercise1 = 10
  const part2 = 'using props to pass data'
  const exercise2 = '7'
  const part3 = 'State of a component'
  const exercise3 = 14
  return (
    <div>
    <h1>{course}</h1>
    <p>
      {part1} {exercise1}
    </p>
    <p>
      {part2} {exercise2}
    </p>
    <p>
      {part3} {exercise3}
    </p>
    <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
  </div>

  )
}
class App extends Component{ 
  render(){
    return (
  <div className="App">
      <h1> Hello, React</h1>
    </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
