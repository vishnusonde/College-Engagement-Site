const Post = require("../model/post");

exports.getInputForm = (req, res) => {
    res.render("create-post.ejs");
}

exports.createPost = async (req, res) => {
    console.log(req.body.title, req.body.content);
    let postData = new Post({
        title: req.body.title,
        content: req.body.content,
        type: "Blog",
        // author: "vishnu",
        author: req.session.user.username,
        date: new Date(),
        upvote: 0
    })
    let {content, title} = req.body;

    let hashTags = content.split(" ").filter(st => st.startsWith("#"));
    console.log(hashTags);


    try {
        const post = await Post.create({
            title,
            content,
            type: "Blog",
            // author: "vishnu",

            author: req.session.user.username,

            date: new Date(),
            upvote: 0,
            hashTags: hashTags,
            upvoteLists : []
        })
        const posts = await Post.find({});
        // res.render("posts.ejs", {posts: posts});
        res.redirect("/blog")
    } catch (err) {
        console.log(err)
    }
}
