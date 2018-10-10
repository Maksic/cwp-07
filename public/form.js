function createArticle(){
    let reqTitle = document.getElementById("title").value;
    let reqText = document.getElementById("text").value;
    let reqAuthor = document.getElementById("author").value;
    let date = new Date();
    let currDate = '' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    let req = {
        title : reqTitle,
        text : reqText,
        author : reqAuthor,
        date : currDate
    }        
    alert("Post add");
    $.post("./api/articles/create", JSON.stringify(req), (data) => {
        alert("create successfull");
    })
}

function create(){
    let IdPost = document.getElementById("idc").value;
    let Title = document.getElementById("titlec").value;
    let Text = document.getElementById("textc").value;
    let Author = document.getElementById("authorc").value;
    let date = new Date();
    let currDate = '' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    let reqs = {
        articleId : IdPost,
        title : Title,
        text : Text,
        author : Author,
        date : currDate
    }        
    alert("Comment add");
    $.post("./api/comments/create", JSON.stringify(reqs), (data) => {
        alert("create successfull");
    })
}