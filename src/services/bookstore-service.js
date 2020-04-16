export default class BookstoreService {
  data = [
    {
      title: "Sonets", 
      author: "Author", 
      price: 50, 
      id: 11,
      count: 1,
      total: 50,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      title: "Novels", 
      author: "Author", 
      price: 100, 
      id: 12,
      count: 1,
      total: 100,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {
      title: "Emotional Intellect", 
      author: "Author", 
      price: 200, 
      id: 13,
      count: 1,
      total: 200,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'}
  ];

  getBooks(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.data);
        reject(new Error("smthg gone wrong"))
      }, 700)
    })
  }
}