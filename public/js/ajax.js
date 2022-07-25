console.log("Hii")
// AJAJ
const onClicked = () => {
    const req = new XMLHttpRequest;
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    req.open("GET", "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean", true);
    req.send();
}

const onChanged = (e) => {
    let username = document.getElementById("name").value
    const req = new XMLHttpRequest;
    req.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let msg = await JSON.parse(this.responseText);
            console.log(msg)
            document.getElementById("demo").innerHTML = msg.message;
        }
    };
    req.open("GET", "http://localhost:3000/search" + username, true);
    req.send();
}
// axios and fetch 