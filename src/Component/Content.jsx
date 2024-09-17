import React, { useState, useEffect } from 'react';
import Slider from "./slider";
import Slider2 from './slider2';
import img1 from './../image/a.webp'
import img2 from './../image/b.png'
import emptyCart from './../image/empty-cart.png'

export default function Content() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [card, setCard] = useState([])
    const [addid, setAddid] = useState([])
    const [z, setZ] = useState(0)
    useEffect(() => {
        fetch('https://one-api.ir/digikala/?token=705433:65525f4665ece&action=brand&id=2&page=1')
            .then(res => res.json())
            .then(val => {
                setData(val.result)
            })
        fetch('https://one-api.ir/digikala/?token=705433:65525f4665ece&action=brand&id=10&page=1')
            .then(res => res.json())
            .then(val => {
                setData2(val.result)
            })

    }, [])
    const updateCard = (img, title, id) => {
        document.getElementsByClassName('basket1')[0].innerHTML = document.getElementsByClassName('basket')[0].childNodes.length
        document.getElementsByClassName('basket1')[1].innerHTML = document.getElementsByClassName('basket')[0].childNodes.length
        const temp = {
            img: img,
            name: title,
            id: id,
        }
        const temp2 = {
            indexId: id,
        }
        setAddid(() => {
            return addid.concat(temp2)
        })
        let p = 0
        if (z == 0) {
            setCard(() => {
                return card.concat(temp)
            })
            setZ(1)
        } else {
            (addid.map((val) => {
                if (val.indexId == temp.id) {
                    p++
                }
            }))
            if (p == 0) {
                setCard(() => {
                    return card.concat(temp)
                })

            }
        }
        
        document.getElementById('alerts').style.display = 'flex'
        setTimeout((alertt), 1500);
    }
    
    function delBox(e) {
        let keywordss = e.target.getAttribute('data-id')
        e.target.parentElement.parentElement.parentElement.remove()
        const newSet1 = addid.filter((item) => item.indexId != keywordss)
        const newSet2 = card.filter((item) => item.id != keywordss)
        setAddid(newSet1)
        setCard(newSet2)
        console.log(card);

    }
    function filter(e) {
        let d = e.target.getAttribute('data-statuse')
        let x = document.getElementsByTagName('article')
        let y = x.length
        console.log(y);
        for (let i = 0; i < y; i++) {
            x[i].style.display = 'none'
            if ((x[i].getAttribute('data-filter')) == d) {
                x[i].style.display = 'flex'
            }
        }
    }
    function alertt() {
        document.getElementById('alerts').style.display = 'none'
    }
    return (
        <div className="w-full flex justify-center flex-wrap mb-[70px] md:mb-5">
            <div id='alerts' className="alert hidden w-[200px] h-[60px] text-[14px] font-primary text-white bg-red-700 rounded-[7px] fixed top-[30px] left-[50%] -translate-x-[50%] z-50 justify-center items-center">
                <strong className='font-primary'>به سبد خرید اضافه شد</strong>
            </div>
            <div className="w-full h-[50vh] hidden md:flex translate-y-[118px]">
                <Slider />
            </div>
            <div className="w-full h-[40vh]flex md:hidden">
                <Slider2 />
            </div>
            <div className="w-[80%] mt-5 flex justify-start flex-wrap">
                <h1 className="w-full flex justify-start text-[40px] font-primary mb-2">فروشگاه</h1>
                <div className="flex justify-start items-center">
                    <a href="#" className="text-[16px] font-primary" >صفحه اصلی</a>

                    <svg className="ml-2 mr-2 flex items-center" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                    <div className="text-[16px] text-gray-500 font-primary">فروشگاه </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center filter">
                <ul className="w-[80%] flex justify-center content-center md:items-center flex-wrap mt-8 mb-8">
                    <li data-statuse="لپ تاپ و الترابوک" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 rounded-t-[7px] md:rounded-[7px] hover:bg-white duration-300 bg-[#eedac3] cursor-pointer mb-2">
                        <svg data-statuse="لپ تاپ و الترابوک" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path data-statuse="لپ تاپ و الترابوک" onClick={filter} d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                        </svg>
                        <div data-statuse="لپ تاپ و الترابوک" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2" >لپ تاپ</div>
                    </li>
                    <li data-statuse="تبلت" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#cce0ec] cursor-pointer mb-2">
                        <svg data-statuse="تبلت" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-tablet" viewBox="0 0 16 16">
                            <path data-statuse="تبلت" onClick={filter} d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                            <path data-statuse="تبلت" onClick={filter} d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <div data-statuse="تبلت" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">تبلت</div>
                    </li>
                    <li data-statuse="گوشی موبایل" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#dadbe8] cursor-pointer mb-2">
                        <svg data-statuse="گوشی موبایل" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path data-statuse="گوشی موبایل" onClick={filter} d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path data-statuse="گوشی موبایل" onClick={filter} d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <div data-statuse="گوشی موبایل" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">موبایل</div>
                    </li>
                    <li data-statuse="هدفون، هدست و هندزفری" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#dfe2d7] cursor-pointer mb-2">
                        <svg data-statuse="هدفون، هدست و هندزفری" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-earbuds" viewBox="0 0 16 16">
                            <path data-statuse="هدفون، هدست و هندزفری" onClick={filter} fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z" />
                        </svg>
                        <div data-statuse="هدفون، هدست و هندزفری" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">هندزفری</div>
                    </li>
                    <li data-statuse="ساعت هوشمند" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#d8d8f4] cursor-pointer mb-2">
                        <svg data-statuse="ساعت هوشمند" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                            <path data-statuse="ساعت هوشمند" onClick={filter} d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z" />
                            <path data-statuse="ساعت هوشمند" onClick={filter} d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z" />
                        </svg>
                        <div data-statuse="ساعت هوشمند" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">ساعت هوشمند</div>
                    </li>
                    <li data-statuse="ماوس (موشواره)" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#eae1b8] cursor-pointer mb-2">
                        <svg data-statuse="ماوس (موشواره)" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
                            <path data-statuse="ماوس (موشواره)" onClick={filter} d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z" />
                        </svg>
                        <div data-statuse="ماوس (موشواره)" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">ماوس</div>
                    </li>
                    <li data-statuse="کیبورد (صفحه کلید)" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] hover:bg-white duration-300 bg-[#f0dbd5] cursor-pointer mb-2">
                        <svg data-statuse="کیبورد (صفحه کلید)" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16">
                            <path data-statuse="کیبورد (صفحه کلید)" onClick={filter} d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
                            <path data-statuse="کیبورد (صفحه کلید)" onClick={filter} d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
                        </svg>
                        <div data-statuse="کیبورد (صفحه کلید)" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">کیبورد</div>
                    </li>
                    <li data-statuse="شارژر تبلت و موبایل" onClick={filter} className="h-[90px] w-full md:w-[130px] md:h-[130px] flex flex-wrap justify-center content-center grow m-0 md:m-2 md:rounded-[7px] rounded-b-[7px] hover:bg-white duration-300 bg-[#d5ebdd] cursor-pointer">
                        <svg data-statuse="شارژر تبلت و موبایل" onClick={filter} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-usb-plug" viewBox="0 0 16 16">
                            <path data-statuse="شارژر تبلت و موبایل" onClick={filter} d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM6 5a1 1 0 0 0-1 1v4.394c0 .494.146.976.42 1.387l1.038 1.558c.354.53.542 1.152.542 1.789 0 .481.39.872.872.872h1.256c.481 0 .872-.39.872-.872 0-.637.188-1.26.541-1.789l1.04-1.558A2.5 2.5 0 0 0 12 10.394V6a1 1 0 0 0-1-1H6Zm0 1h5v4.394a1.5 1.5 0 0 1-.252.832L9.71 12.784A4.224 4.224 0 0 0 9.002 15H7.998a4.224 4.224 0 0 0-.707-2.216l-1.04-1.558A1.5 1.5 0 0 1 6 10.394V6Z" />
                        </svg>
                        <div data-statuse="شارژر تبلت و موبایل" onClick={filter} className="w-full flex justify-center items-center font-primary mt-2">شارژر</div>
                    </li>
                </ul>
            </div>
            <div className="w-[80%] flex justify-center items-center md:content-center flex-wrap">
                <div className="w-full flex content-center justify-center">

                    <main className="w-full flex justify-center content-center flex-wrap">
                        {data.map((val) => {
                            return (
                                <article data-filter={val.category_title} key={val.id} className="w-full md:w-[23%] flex p-4 bg-white rounded-[7px] m-2 flex-wrap relative group overflow-hidden	">
                                    <Figure src={val.images.main} title={val.title_fa} />
                                    <Txt img={img1} price={val.price.selling_price + ' ریال '} />
                                    <Box updateCard={() => updateCard(val.images.main, val.title_fa, val.id)} filter2={val.category_title} img2={val.images.main} title2={val.title_fa} brand2={img1} price2={val.price.selling_price + ' ریال '} id2={val.id} number2={val.product_badge.text} />
                                </article>
                            )
                        })}
                        {data2.map((val) => {
                            return (
                                <article data-filter={val.category_title} key={val.id} className="w-full md:w-[23%] flex p-4 bg-white rounded-[7px] m-2 flex-wrap relative group overflow-hidden	">
                                    <Figure2 src={val.images.main} title={val.title_fa} />
                                    <Txt2 img={img2} price={val.price.selling_price + ' ریال '} />
                                    <Box updateCard={() => updateCard(val.images.main, val.title_fa, val.id)} filter2={val.category_title} img2={val.images.main} title2={val.title_fa} brand2={img1} price2={val.price.selling_price + ' ریال '} id2={val.id} number2={val.product_badge.text} />
                                </article>
                            )
                        })}

                    </main>
                    <Basket card={card} />


                </div>
            </div>
        </div>
    )
    function Basket({ card }) {
        return (
            <ul className='basket w-full md:w-[35%] h-[50vh] rounded-[10px] overflow-y-scroll fixed top-[75px] left-[-100%] bg-white shadow-inner duration-500 z-50 flex justify-center content-start flex-wrap'>
                <div id='emptyCart' className='w-full h-full flex justify-center content-center flex-wrap'>
                    <figure>
                        <img className='h-[150px] object-cover flex justify-center items-center m-2 mx-auto' src={emptyCart} alt="" />
                        <figcaption className='w-full flex justify-center items-center text-gray-800 font-primary text-[30px] font-bold'>
                            سبد خرید شما خالی است!
                        </figcaption>
                    </figure>
                </div>
                {card.map((val) => {
                    return (
                        <li id={'id' + val.id} className='border w-full flex justify-center items-center shadow ' key={val.id}>
                            <img className='w-[45px] object-cover flex justify-center items-center m-2' src={val.img} alt="" />
                            <div className='w-[60%] text-[12px] font-primary text-gray-800 m-2' >{val.name}</div>
                            <div className='w-[20%] border rounded-[10px] font-primary text-[12px] flex justify-evenly items-center p-2'>
                                <span onClick={add} className='cursor-pointer font-serif text-[14px]'>+</span>
                                <span className='plus text-[14px] font-sans'>1</span>
                                <span onClick={LowOff} className='cursor-pointer font-serif text-[14px]'>-</span>
                                <span onClick={delBox} data-id={val.id} className='flex cursor-pointer'>
                                    <svg data-id={val.id} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path className='cursor-pointer' d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                </span>

                            </div>
                        </li>
                    )
                })}

            </ul>
        )
    }

}
function Figure({ title, src }) {
    return (
        <figure className="w-full flex justify-center content-center flex-wrap">
            <img className="w-[80%] m-4" src={src} alt="" />
            <figcaption className="w-full flex justify-center items-center flex-wrap font-primary text-[14px] text-center cursor-pointer" >{title}</figcaption>
        </figure>
    )
}

function Txt({ price, img }) {
    return (
        <div className="w-full flex justify-center items-center">
            <img className="w-[40px] object-cover" src={img} alt="" />
            <h2 className="mr-5 flex justify-center items-center flex-wrap font-primary text-[13px] font-bold text-gray-500" >{price}</h2>
        </div>
    )
}



function Figure2({ title, src }) {
    return (
        <figure className="w-full flex justify-center content-center flex-wrap">
            <img className="w-[80%] m-4" src={src} alt="" />
            <figcaption className="w-full flex justify-center items-center flex-wrap font-primary text-[14px] text-center cursor-pointer">{title}</figcaption>
        </figure>
    )
}

function Txt2({ price, img }) {
    return (
        <div className="w-full flex justify-center items-center">
            <img className="w-[30px] object-cover" src={img} alt="" />
            <h2 className="mr-5 flex justify-center items-center flex-wrap font-primary text-[13px] font-bold text-gray-500">{price}</h2>
        </div>
    )
}
function Box({ img2, title2, price2, brand2, id2, number2, filter2, updateCard }) {
    return (
        <div className="w-[30px] h-[75%] absolute top-[8%] -right-[100px] flex justify-center content-center flex-wrap group-hover:right-2 duration-500">
            <span className="flex justify-center items-center w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500">
                <svg className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path className="w-[30px] h-[30px] cursor-pointer mb-2 p-2" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </span>
            <span className="flex justify-center items-center w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500">
                <svg className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                    <path className="w-[30px] h-[30px] cursor-pointer mb-2 p-2" d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
            </span>
            <span data-img={img2} data-title={title2} data-price={price2} data-brand={brand2} data-id={id2} data-number={number2} className="flex jc items-center w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500">
                <svg onClick={para} data-img={img2} data-title={title2} data-price={price2} data-brand={brand2} data-id={id2} data-number={number2} className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path className="w-[30px] h-[30px] cursor-pointer mb-2 p-2" fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z" />
                </svg>
            </span>
            {/* box  */}
            <div className='w-full h-full hidden z-10 fixed top-0 left-0 justify-center content-center md:items-center'>
                <div className='w-full h-full bg-black opacity-70 z-20 fixed top-0 left-0'></div>
                <div className=' md:w-[70%] md:h-[55%] w-full h-[100vh] flex justify-center content-center md:items-center bg-white fixed md:top-[20%] md:left-[15%] top-0 left-0 z-30 flex-wrap'>
                    <span onClick={close} className='fixed md:top-[22%] md:left-[17%] top-2 left-4 cursor-pointer rotate-45 text-[25px]'>
                        +
                    </span>
                    <figure className='w-full h-[30%] md:w-[35%] md:h-full flex justify-center md:justify-end items-end md:items-center'><img className='mt:[40px] md:mt-[0px] w-[70%] md:w-[90%] object-cover' src={img2} alt="" /></figure>
                    <div className='w-full h-[50%] md:w-[65%] md:h-full flex justify-center content-center flex-wrap'>
                        <div className='w-[50%] mb-6 flex justify-center items-center font-primary text-[22px] font-bold p-1 text-black rounded-[7px]'>{filter2}</div>
                        <div className='w-[90%] text-center mb-3 flex justify-center items-center font-primary text-[18px] font-bold'>{title2}</div>
                        <div className='w-[80%] mb-3 flex justify-center items-center font-primary text-[16px]'>{"شناسه محصول : " + id2}</div>
                        <div className='w-[80%] mb-3 flex justify-center items-center font-primary text-[16px] text-gray-500'>{"قیمت : " + price2}</div>
                        <div className='w-[80%] mb-3 flex justify-center items-center font-primary text-gray-600 text-[16px]'>
                            <span className='ml-3 -scale-x-[1]'><svg className='ml-3 -scale-x-[1] text-gray-600' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path className='ml-3' d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                            </span>
                            {number2}
                        </div>
                        <div className='w-[80%] mb-3 flex justify-center items-center '>
                            <span onClick={updateCard} data-img={img2} data-title={title2} data-price={price2} data-brand={brand2} data-id={id2} data-number={number2} className="p-2 cursor-pointer mb-2 bg-red-600 rounded-[5px] text-gray-100 flex justify-center items-center mr-2">
                                <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                                    <path className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 ml-1" d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                                </svg>
                                <span className='font-primary text-[14px] text-white pr-2'>افزودن به سبد خرید</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ******  */}
            <span onClick={updateCard} data-img={img2} data-title={title2} data-price={price2} data-brand={brand2} data-id={id2} data-number={number2} className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500 flex justify-center items-center">
                <svg data-img={img2} data-title={title2} data-price={price2} data-brand={brand2} data-id={id2} data-number={number2} className="w-[30px] h-[30px] cursor-pointer mb-2 p-2 bg-gray-300 rounded-[5px] text-gray-800 hover:bg-black hover:text-white duration-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                    <path className="w-[30px] h-[30px] cursor-pointer mb-2 p-2" d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
            </span>
            {/* card  */}
        </div>
    )
}


function para(e) {
    e.target.parentElement.nextSibling.style.display = 'flex'
}
function close(e) {
    e.target.parentElement.parentElement.style.display = 'none'
}
let i = 0
let f = 0

function add(e) {
    let c = Number(e.target.nextSibling.innerHTML)
    e.target.nextSibling.innerHTML = c + 1
    i = c
}
function LowOff(e) {
    let c = Number(e.target.previousElementSibling.innerHTML)
    if (c > 1) {
        e.target.previousElementSibling.innerHTML = c - 1
    }
    i = c
}
