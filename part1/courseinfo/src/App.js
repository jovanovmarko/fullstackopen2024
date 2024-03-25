const Header = (props) => {
  return(
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
<div>
  <strong>
    {props.part} {props.exercises}
  </strong>
</div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].nameofpart} exercises={props.parts[0].numberofexercises}/>
      <Part part={props.parts[1].nameofpart} exercises={props.parts[1].numberofexercises}/>
      <Part part={props.parts[2].nameofpart} exercises={props.parts[2].numberofexercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>
     Number of exercises {props.part[0].numberofexercises + props.part[1].numberofexercises + props.part[2].numberofexercises}
    </p>
  )
}




const App = () => {
  const course = {
    name:"Half Stack application development",
    parts:[
      {
        nameofpart:'Fundamentals of React',
        numberofexercises:10
      }, 
      {
        nameofpart:'Using props to pass data',
        numberofexercises:7
      },
      {
        nameofpart:'State of a component',
        numberofexercises:14}]
  }
  

  return (
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts}/>
      <Total part={course.parts}/>
      
    </div>
  )

  
}
  
export default App