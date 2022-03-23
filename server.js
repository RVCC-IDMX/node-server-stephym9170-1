const{appendFile} = require("fs");

const newContent = "\n This is some more new text";

appendFile("hi.txt", newContent, (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log("content written!");
})
