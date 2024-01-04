import  express  from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1704300554043-4c1a4c112fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1704300554043-4c1a4c112fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1704300554043-4c1a4c112fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1704300554043-4c1a4c112fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1704300554043-4c1a4c112fd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  if(req.query.search){
    const filterProduct = products.filter(p => p.name.toLowerCase().includes(req.query.search.toLowerCase()));
    res.send(filterProduct);
    return
  }


  setTimeout(() => {
    res.send(products);
  }, 3000);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
