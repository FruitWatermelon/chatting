const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

// DOM Element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

//global socket handler
socket.on('user_connected', (username) => {
  console.log(`${username} connected!`);
});

// draw functions
const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} Stranger :)`);

function helloUser() {
  // const username = prompt('이름이 무엇인가요?');
  // socket.emit('new_user', username, (data) => {
  //   drawHelloStranger(data);
  // });
}

function init() {
  helloUser();
}

init();
