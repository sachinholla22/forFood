import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios";
import Veg from '../assets/veg.jpg'
import NonVeg from '../assets/nonveg.jpg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar,AvatarFallback,AvatarImage } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"

function Recepies() {
    const [getFood,setFood]=useState([])
    useEffect(()=>{
async function getData(){
    try{
    let res=await axios.get("http://localhost:4300/foodDetails");
    setFood(res.data);
    console.log('gotdata')
    }catch(err){
        console.log("Error occurred from backend",err)
    }

}
getData();
    },[])
  return (
    <>
    <section className='w-full  min-h-screen bg-slate-200'>
    <h1 className="flex justify-center items-center  font-extrabold text-gray-500 xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl" style={{ fontFamily: 'Caveat, serif',fontWeight: '700'}}>Available Dishes</h1>
    <div className='xl:m-10 lg:m-9 md:m-8 sm:m-10 mx-6'>
    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-8 flex justify-center  items-center '>
     
        
        {getFood.map((datas,idx)=>(
            <div className="">
            <Card className='bg-yellow-50 xl:min-h-[300px] lg:min-h-[300px] md:min-h-[250px] sm:min-h-[100px] min-h-[200px] '>
            <CardHeader>
              <section className=' flex flex-row  gap-8'>
                <Avatar className='xl:w-[100px] xl:h-[100px]  lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:w-[80px] sm:h-[80px] border-2 border-gray-400'>
                <AvatarImage src={`http://localhost:4300/${datas.image}`}/>
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              
                <div>
                <CardTitle>
                    <p className='text-xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-red-900' style={{fontFamily :'Hammersmith One, serif'}}>{datas.name}</p>
                </CardTitle>
                <div className='flex flex-row gap-2'>
                  <Avatar className="w-[20px] h-[20px] ">
                    { datas.isVeg ? (
                    <AvatarImage src={Veg} /> ) : ( <AvatarImage src={NonVeg} />)
}
                  </Avatar>
                  
                <CardDescription><p className='text-gray-600' style={{fontFamily :"Philosopher,ital", fontWeight:"400"}}>{datas.isVeg ? "Veg" : "Non Veg"}</p>
                <p className='text-xs text-gray-500 font-bold flex justify-center'>{datas.isBestSeller ? "Best Seller" : ''}</p></CardDescription>
                
                </div>
                </div>
                </section>
            </CardHeader>
            <CardContent>
                <h2>{datas.description}</h2>
            </CardContent>
            <CardFooter >
              <div className='flex  justify-between w-full'>
                <Button className="rounded-xl bg-orange-500 hover:bg-orange-600  text-yellow-100">
              <p className='text-xl'> Rs<span className='text-xl font-bold'>{datas.price}</span></p>
              </Button>
              <Badge className={`rounded-xl ${datas.ratings >=4 ? "bg-green-400 hover:bg-green-500" : (datas.ratings <4 && datas.ratings >=3) ? "bg-yellow-400 hover:bg-yellow-500" : "bg-red-500 hover:bg-red-600 text-white" } w-[40px] flex align-middle justify-center text-center`}>
                {datas.ratings}
              </Badge>
              </div>
             
              </CardFooter>
            
          </Card>
          </div>
        ))}
        
        </div>
      
    </div>
    </section>
    </>
  )
}

export default Recepies
