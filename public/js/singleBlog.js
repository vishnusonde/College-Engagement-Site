const upvoted = () => {
    const blogId= document.getElementById("blogId").innerHTML;

    const req = new XMLHttpRequest;
    req.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = await JSON.parse(this.responseText);
            document.getElementById("upvoteValue").innerHTML = data.upvote;
        }
    };
    req.open("GET", `http://localhost:3000/blog/vote/${blogId}/1`, true);
    req.send();
}

// const downvoted = () => {
//     const blogId= document.getElementById("blogId").innerHTML;

//     const req = new XMLHttpRequest;
//     req.onreadystatechange = async function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = await JSON.parse(this.responseText);
//             document.getElementById("upvoteValue").innerHTML = data.upvote;
//         }
//     };
//     req.open("GET", `http://localhost:3000/blog/vote/${blogId}/0`, true);
//     req.send();
// }