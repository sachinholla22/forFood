const express=require("express");
const app=express();
const cors=require("cors");
const PORT =4300;
const path=require('path')
app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE"
}))
const db=require('./connectdb')
app.use(express.static(path.join(__dirname, 'Images'))); 
let foodDetails = [
    { 
        id: 1, 
        name: "Veg Pulav", 
        image: "pulav.jpg", 
        isVeg: true, 
        ratings:4.2,
        isBestSeller:true,
        price: " 130.00", 
        description: "A fragrant rice dish made with a mix of vegetables and aromatic spices. Light yet flavorful, perfect for a satisfying meal." 
    },
    { 
        id: 2, 
        name: "Paneer Butter Masala", 
        image: "paneer_butter_masala.jpg", 
        isVeg: true, 
        isBestSeller:false,
        ratings:4.1,
        price: " 180.00", 
        description: "Soft cubes of paneer cooked in a rich, creamy tomato gravy with a hint of butter and fragrant spices." 
    },
    { 
        id: 3, 
        name: "Aloo Gobi", 
        image: "aloo_gobi.jpg", 
        isVeg: true, 
        isBestSeller:false,
        ratings:4.7,
        price: " 120.00", 
        description: "A comforting dish made with spiced potatoes and cauliflower, cooked with cumin, turmeric, and other aromatic spices." 
    },
    { 
        id: 4, 
        name: "Chole Bhature", 
        image: "chole.jpg", 
        isBestSeller:true,
        isVeg: true, 
        ratings:4.2,
        price: " 150.00", 
        description: "A classic North Indian dish of spicy chickpeas served with deep-fried bread, a combination loved by many." 
    },
    { 
        id: 5, 
        name: "Palak Paneer", 
        image: "palak_paneer.jpg", 
        isVeg: true, 
        isBestSeller:true,
        ratings:4.9,
        price: " 170.00", 
        description: "Paneer cubes cooked in a smooth spinach gravy, lightly spiced, and packed with nutrients and flavors." 
    },
    { 
        id: 6, 
        name: "Baingan Bharta", 
        image: "baigen.jpg", 
        isVeg: true, 
        isBestSeller:false,
        ratings:3.5,
        price: " 140.00", 
        description: "Smoked eggplant mashed and cooked with tomatoes, onions, and a blend of spices, resulting in a smoky and savory dish." 
    },
    { 
        id: 7, 
        name: "Dal Makhani", 
        image: "dal_makani..jpg", 
        isVeg: true, 
        isBestSeller:false,
        ratings:3.9,
        price: " 130.00", 
        description: "A creamy and rich lentil dish made from black lentils and kidney beans, simmered slowly for hours with butter and cream." 
    },
    { 
        id: 8, 
        name: "Veg Biryani", 
        image: "veg_biriyani.jpg", 
        isVeg: true,
        isBestSeller:true,
        ratings:4.0, 
        price: " 160.00", 
        description: "A fragrant rice dish made with mixed vegetables, saffron, and a variety of spices. Aromatic and flavorful." 
    },
    { 
        id: 9, 
        name: "Butter Naan", 
        image: "butter_naan.jpg", 
        isVeg: true,
        isBestSeller:true,
        ratings:4.3, 
        price: " 50.00", 
        description: "Soft, fluffy flatbread brushed with butter. A perfect accompaniment to any curry or dish." 
    },
    { 
        id: 10, 
        name: "Chicken Tikka", 
        image: "chicken_tikka.jpg", 
        isVeg: false, 
        ratings:4.0,
        isBestSeller:false,
        price: " 250.00", 
        description: "Tender chicken marinated in yogurt and spices, grilled to perfection, and served with tangy mint chutney." 
    },
    { 
        id: 11, 
        name: "Butter Chicken", 
        image: "Butter_Chicken.jpg", 
        isVeg: false, 
        isBestSeller:true,
        ratings:3.9,
        price: " 280.00", 
        description: "Delicious, juicy chicken pieces cooked in a smooth, creamy tomato-based gravy with a rich buttery flavor." 
    },
    { 
        id: 12, 
        name: "Mutton Rogan Josh", 
        image: "Mutton_Rogan_Josh.jpg", 
        isVeg: false, 
        isBestSeller:false,
        ratings:2.9,
        price: " 320.00", 
        description: "A slow-cooked mutton dish with a rich, flavorful gravy made from a blend of spices and yogurt, a signature Kashmiri dish." 
    },
    { 
        id: 13, 
        name: "Chicken Biryani", 
        image: "chicken_biriyani.jpg", 
        isVeg: false, 
        isBestSeller:true,
        ratings:4.5,
        price: " 250.00", 
        description: "A flavorful and aromatic rice dish with tender chicken, saffron, and a perfect mix of spices." 
    },
    { 
        id: 14, 
        name: "Fish Curry", 
        image: "fish_curry.jpg", 
        isVeg: false, 
        isBestSeller:false,
        ratings:3.4,
        price: " 270.00", 
        description: "A tangy and spicy curry made with fresh fish cooked in a flavorful tomato and onion-based gravy." 
    },
    { 
        id: 15, 
        name: "Keema Pav", 
        image: "keema_pavj.jpg", 
        isVeg: false,
        isBestSeller:false, 
        ratings:4.7,
        price: " 200.00", 
        description: "Minced meat cooked with spices and served with soft pav (bread rolls), a popular street food in India." 
    }
];

db.connect(function(error){
    const sql="CREATE TABLE dishes (Id int PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100),image VARCHAR(100), isVeg BOOLEAN NOT NULL 0, price VARCHAR (50) ,description VARCHAR(200) )"
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            console.log('Table created successfully or already exists.');
        }
    })
})

app.get("/foodDetails",(req,res)=>{
    res.json(foodDetails);
})

app.listen(PORT ,()=>{
    console.log(`App is running on the port ${PORT}`)
})