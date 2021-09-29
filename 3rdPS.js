class library {
    constructor(myBookList) {
        this.booklist = myBookList;
        this.issuedBooks = {};
    }
    getBookList() {
        // return this.booklist;
                    // Or,
        this.booklist.forEach(function (element) {
            console.log(element);
        });
    }
    issueBook(bookName, userName) {
        if (this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = userName;        }
        else {
        console.log("This Book is Already Issued");
                    //    OR,
        // return `This Book is Already Issued`;
        }
    }
    returnBook(bookName) {
        delete this.issuedBooks[bookName];
    }
}
let obj = new library(["aBook", "bBook", "cBook", "dBook"]);
console.log(obj);
console.log(obj.getBookList());
console.log(obj.issuebook("aBook", "pankaj"));
console.log(obj.issuebook("aBook", "suraj"));
console.log(obj.issuedBooks);