const changeToLowerCase = (e) =>{
    return e.toLowerCase();
  }
  
  const arrayToLowerCase = (e) =>{
    return e.map(changeToLowerCase);
  }
  
  const input = ["MA", "SA", "I", "SCH", "OOL"];
  
  const output = arrayToLowerCase(input);
  
  console.log(output)
  
  