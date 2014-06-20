var Book = function(title, genre, author, read, read_date, is_current) {
    this.title = title || "Unknown Title";
    this.genre = genre || "Unknown Genre";
    this.author = author || "Unknown Author";
    this.read = read || false;
    this.read_date = read_date;
    this.is_current = is_current || false;
};

var BookList = function(books) {
    this.bookShelf = books || [];
    
    this.readBooks = function () {
        var count = 0;
        for (var i = 0; i < this.bookShelf.length; i++){
            if (this.bookShelf[i].read) {
                count++;
            }
        }
        return count;
    };
    
    this.notreadBooks = function () {
        var count = 0;
        for (var i = 0; i < this.bookShelf.length; i++){
            if (this.bookShelf[i].read === false) {
                count++;
            }
        }
        return count;
    };
    
    this.addBook = function (new_book){
        if (this.bookShelf.indexOf(new_book) === -1){
            bookShelf.push(new_book);
        }
    };
    
    this.nextBook = null;
    this.findNextBook = function () {
        var unread_books = [];
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read === false) {
                unread_books.push(this.bookShelf[i]);
            }
        }
        return unread_books[Math.floor(Math.random() * unread_books.length)]
    }
    
    this.finishCurrentBook = function (mybook, read_date) {
      for (var i = 0; i < this.bookShelf.length; i++) {
          if (this.bookShelf[i].is_current && this.bookShelf[i].title === mybook) {
              this.bookShelf[i].is_current = false;
              this.bookShelf[i].read = true;
              this.bookShelf[i].read_date = read_date;
              this.nextBook = this.findNextBook();
          }
      }  
    };
    
};


    
    