export interface Book {
    title: String;
    subtitle: String;
    isbn: String;
    abstract: String;
    numPages: number;
    author: String;
    publisher: {
        name: String,
        url: String
      };
}
