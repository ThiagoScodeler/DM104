start();

function start() {
    var addButton = document.getElementById('addButton');
    addButton.onclick = function() {
        addNewNome();
};

function addNewNome() {
    var nome = document.getElementById('nome').value;

    var UlElement = document.createElement('ul');
    var LiElement = document.createElement('li');

    var LiTextNome = document.createTextNode(nome);
    LiElement.appendChild(LiTextNome);
    UlElement.appendChild(LiElement);

    var myBody = document.getElementsByTagName('body');
    console.log(myBody);
    myBody[0].appendChild(UlElement);
}
}