// Effect
//Runs after DOM is rendered

// useEffect(function, dependencies array)

//dependecies array --> 
// useEffect uses this parameter to determine if the function
// should be ran again
// if dependencies array changed --> run function.
// default --> run everytime the component is rendered
// if empty array --> only run once the first time after the component is rendered


//1. State --> 2. Render DOM --> 3. Register useEffect 
// 4. useEffect returns <SOMETHING>after end of Render cycle, in this case,
// when this component ends (toggleWT = False) 

//Note: async function always returns a PROMISE??