const messages = ["Diego", "Ana", "Nicolay", "Yesica", "Oscar", "Laura","Carolina","Pauilina"];

const randomMsg = () => console.log(messages[Math.floor(Math.random() * messages.length)]);

module.exports = { randomMsg };
