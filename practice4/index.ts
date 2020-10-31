function greet(name: string) {
  return 'hello' + name
}
let greet2 = function(name: string) {
  return 'hello' + name
}
let greet3 = (name: string) => {
  return 'hello' + name
}

let greet4 = (name: string) => 
  'hello' + name

let greet5 = new Function('name', 'return"hello" + name')
// 危険

// function log(message: string, userId?: string) {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'Not signed in')
// }
// log('Page loaded')
// log('User signed in', 'da763be')

// function log(message: string, userId = 'Not signed in') {
//   let time = new Date().toISOString()
//   console.log(time, message, userId)
// }
// log('User click on a button', 'da763be')
// log('User signed out')

type Log = (message: string, userId?: string) => void

let log: Log = (
  message,
  userId = 'Notsigned in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userId)
}

function sumVaridicSafe(...number: number[]): number {
  return number.reduce((total, n) => total + n, 0)
}
sumVaridicSafe(1, 2, 3)

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation
//   (from: Date, destination: string): Reservation
// }

// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // 宿泊旅行を計画する
//   } else if (typeof toOrDestination === 'string') {
//     // 日帰り旅行を予約する
//   }
// }