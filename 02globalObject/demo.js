console.log('hi')
global.console.log('hi')

global.myVariable = 'hello'

const sayHello = () => {
  console.log(global.myVariable)
}

sayHello()
