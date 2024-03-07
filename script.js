function changeGif() {
    let gif1 = document.getElementById('gif1');
    let gif2 = document.getElementById('gif2');
    let gif3 = document.getElementById('gif3');
    let gif4 = document.getElementById('gif4');
    let message = document.getElementById('message');
    if (gif1.style.display !== "none") {
      gif1.style.display = "none";
      gif2.style.display = "block";
      message.innerText = "Ты любима 👇";
    } else if (gif2.style.display !== "none") {
      gif2.style.display = "none";
      gif3.style.display = "block";
      message.innerText = "Ты ценна 👇";
    } else if (gif3.style.display !== "none") {
      gif3.style.display = "none";
      gif4.style.display = "block";
      message.innerText = "Ты незаменима 👇";
    } else {
      gif4.style.display = "none";
      gif5.style.display = "block";
      message.innerText = "С 8 Марта, бабуля!";
      document.getElementById('tulip').onclick = null; // Удаляем обработчик события после четвертого клика
    }
}
