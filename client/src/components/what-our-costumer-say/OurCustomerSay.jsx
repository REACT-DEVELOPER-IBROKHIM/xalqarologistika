import React, {useRef, useState} from 'react'
import "./OurCustomerSay.scss"
import img from "./Photo.png"
import cardImg from "./card-img.svg"
import customer1 from "./customer1.png"
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiFillStar} from "react-icons/ai"


const OurCustomerSay = () => {
const scrollCards = useRef();
const [scroll, setScroll] = useState(0);







const scrollLeft =()=>{
    let width = scrollCards.current.clientWidth
    let b = 0
    if(width>800){
        if(scroll>0){
            if(scroll-width/2<0){
                b = scroll-width/2
            }        
            scrollCards.current?.scrollTo({left: b+(scroll - width/2), behavior: "smooth"})
            setScroll(b+(scroll - width/2))
        }
    }else{
        if(scroll>0){
            if(scroll-width<0){
                b = scroll-width
            }        
            scrollCards.current?.scrollTo({left: b+(scroll - width), behavior: "smooth"})
            setScroll(b+(scroll - width))
        }
    }
}
const scrollRight =()=>{
    let width = scrollCards.current.clientWidth 
    if(width>800){
        let max = Arr.length*(width/2)
        if(scroll<max){
            scrollCards.current?.scrollTo({left: scroll + width/2, behavior: "smooth"})
            setScroll(scroll + width/2)
            }
    }else{
        let max = Arr.length*width
        if(scroll<max){
            scrollCards.current?.scrollTo({left: scroll + width, behavior: "smooth"})
            setScroll(scroll + width)
        }
    }
}




const Arr = [    
    {
        img : img,
        name : "John Martin",
        workplace : "Restoration Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
    {
        img : customer1,
        name : "Kathleen Smith",
        workplace : "Fuel Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
    {
        img : img,
        name : "John Martin",
        workplace : "Restoration Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
    {
        img : customer1,
        name : "Kathleen Smith",
        workplace : "Fuel Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
    {
        img : img,
        name : "John Martin",
        workplace : "Restoration Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
    {
        img : customer1,
        name : "Kathleen Smith",
        workplace : "Fuel Company",
        description : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rate : 5
    },
]



return (
    <>
        <section className='our-customer-say'>
            <div className="our-customer-container">
                <div className="our-customer-say-main-div">
                    <div className="our-customer-say-nav">
                        <p>Tesmonial</p>
                        <h2>What Our Customer Say</h2>
                        <button className='our-customer-say-btn-swipe-left' onClick={scrollLeft}><AiOutlineArrowLeft/></button>
                        <button className='our-customer-say-btn-swipe-right' onClick={scrollRight}><AiOutlineArrowRight/></button>
                    </div>
                    <div className="our-customer-say-body" ref={scrollCards}>
                          
                            {
                                Arr.map((e, i)=>                                     
                                        <div data-coun-element={i} className='customer-say-card' key={i} >
                                            <div className="customer-title">
                                                <img src={e.img} alt="" />
                                                <div className="customer-info">
                                                    <h3>{e.name}</h3>
                                                    <p>{e.workplace}</p>
                                                </div>
                                                <img src={cardImg} alt="" className='addintional'/>
                                            </div>
                                            <p>{e.description}</p>
                                            <div className="rating">
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                            </div>
                                        </div>
                                )
                            }                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurCustomerSay