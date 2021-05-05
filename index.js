function introduction(name){
  return `Hi, my name is ${name}.`
  
}

function introductionWithLanguage(Name,Language) {
  return `Hi, my name is ${Name} and I am learning to program in ${Language}.`
}

function sayHelloTo(firstName = "user") { // = Operater to assign two values
  console.log(`Hello, ${firstName}!`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}