console.log("Hello doggo")
const wonderfulPetBtn = document.querySelector(".wonderful-pet")
const saveButton = document.querySelector('.save')

const containerEl = document.querySelector('.container')

console.log(wonderfulPetBtn)
console.log(containerEl.style)

const onWonderfulBtnClick = () => {
  console.log("You clicked me!")
  containerEl.style.backgroundColor = "green";
}

const onSaveBtnClick = () => {
  containerEl.style.backgroundColor = 'aqua';
}

wonderfulPetBtn.addEventListener('click', onWonderfulBtnClick)

saveButton.addEventListener('click', onSaveBtnClick)