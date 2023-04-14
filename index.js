const btnEl = document.getElementById("btn");
const emojiEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=7f88117f367c01273e435dbc265a12b365063d57")

    data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            name: data[i].character,
            emojiName: data[i].unicodeName,
        })
    }
}

getEmoji();
btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].name;
    emojiEl.innerText = emoji[randomNum].emojiName;

})