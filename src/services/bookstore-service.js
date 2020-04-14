export default class BookstoreService {
  data = [
    {
      title: "Sonets", 
      author: "Author", 
      price: 50, 
      id: 1,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      title: "Novels", 
      author: "Author", 
      price: 100, 
      id: 2,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {
      title: "Emotional Intellect", 
      author: "Author", 
      price: 200, 
      id: 3,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'}
  ];

  getBooks(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.data);
        reject(new Error("smthg gone wrong"))
      }, 2000)
    })
  }
}