
async function cardData(){
    let response = await fetch("./Cards.json")
    // .then((data) => {
    //     console.log(data.json());
    // }).catch(error => {
    //     console.error('Error fetching the JSON:', error);
    // });
    return await response.json()
}

cardData().then(data => {
    let cards = document.getElementById("cards");
    data.forEach(e => {
        let card = document.createElement("div")
        card.setAttribute("id", "card")
        let img = document.createElement("img")
        let text = document.createElement("div");
        text.setAttribute("id", "text")
        let h3 = document.createElement("div");
        h3.setAttribute("id", "h3")
        let h4 = document.createElement("div");
        h4.setAttribute("id", "h4")
        console.log(e)
        img.setAttribute("src", e.image)
        h3.innerText = e.text;
        h4.innerText = e.smallText;
        text.appendChild(h3)
        text.appendChild(h4)
        card.appendChild(img);
        card.appendChild(text);
        cards.appendChild(card)
        // console.log(card)
    });
    console.log(cards)
    
}).catch(error => {
    console.error('Error fetching the JSON:', error);
});

console.log(cardData())
