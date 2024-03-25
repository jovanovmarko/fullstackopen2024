import {useState} from 'react'

const Statistics = (props) => {
  const sum = props.good+props.neutral+props.bad
  if( sum ===0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='total' value={sum}/>
        <StatisticLine text='avg' value={((props.good*1 + props.neutral*0 + props.bad*(-1))/sum)}/>
        <StatisticLine text='positive' value={(props.good/sum)*100+'%'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
    
  )
}



const Button = (props) => {
       return (
        <div>
         <button onClick={props.handeClick}>{props.text}</button>
        </div>
      )
     }

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () =>{
        const updatedGood = good+1
        setGood(updatedGood)
        
    }

    const handleNeutralClick = () =>{
      const updatedNeutral = neutral+1
      setNeutral(updatedNeutral)
      
    }

    const handleBadClick = () =>{
      const updatedBad = bad+1
      setBad(updatedBad)
      
    }


    return(
        <div>
          <h1>give feedback</h1>
        <Button handeClick={handleGoodClick} text='good'/>
        <Button handeClick={handleNeutralClick} text='neutral'/>
        <Button handeClick={handleBadClick} text='bad'/>
        <h1>stats</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
        

        </div>
    )
  
}

export default App;

