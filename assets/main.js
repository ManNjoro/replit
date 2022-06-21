function greet(){
    let nameInput = document.getElementById('nameInput');
    let nameField = document.getElementById('nameField');

    nameField.innerHTML = "Hello " + nameInput.value  +", welcome to the bootcamp";
}