const Post = require("../model/post");

exports.getUpvoteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const isUpvote = req.params.isUpvote;
        const userId = req.session.user._id._id.toString();

        const blog = await Post.findById({_id: blogId});
        if (isUpvote === "1") { 
            console.log(userId);
            blog.upvoteLists.push(userId);
            let updatedUpvotedLists = []

            blog.upvoteLists.map(id => {
                if (userId !== id) {
                    updatedUpvotedLists.push(id)
                }
                // if (userId._id.toString() !== id._id.toString()) {
                //     updatedUpvotedLists.push(id)
                // }
            })

            console.log(updatedUpvotedLists);


            // let updatedUpvotedLists = blog.upvoteLists.filter(id => id == userId)
            // console.log(updatedUpvotedLists);

            // const updatedBlog = await blog.save();
            const updatedBlog = blog;

            let data = await JSON.stringify({upvote: updatedBlog.upvoteLists.length})
            res.send(data)
        }
        // else
        //     blog.upvote -= 1;


    } catch (err) {
        console.log(err)
    }
}


exports.getSingleBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Post.findById({_id: id})
        res.render("singleBlog.ejs", {blog: blog})
    } catch (err) {
        console.log(err)
    }
}

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({});
        // let blogs_eg = {
        //     blogs: blogs
        // }
        // let data = await JSON.stringify(blogs_eg)
        // res.send(data);
        res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotices = async (req, res) => {
    try {
        const notices = await Post.find({type: 'notice'});
        res.render("notice.ejs", {notices});
    } catch (err) {
        console.log(err);
    }
};
