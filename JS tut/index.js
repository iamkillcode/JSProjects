let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    
    count += 1
    countEl.textContent = count
}

function save() {
    let numberEnt = count + " - "
    saveEl.textContent += numberEnt
    countEl.textContent = 0
    
    count = 0
}

// let name = "Manuel"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name
// console.log(myGreeting)


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Manuel"
// let greetings = "Welcome back, "

// let myGreetings = greetings + name

// // console.log(myGreeting)
// welcomeEl.innerText = myGreetings

// welcomeEl.innerText += "😀"