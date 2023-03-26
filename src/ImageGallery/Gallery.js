import React, { useState } from 'react'
import images from './images'

function Gallery() {
    const [items, setItems] = useState(images)
   

    const changeHandler = (categItem) => {
            const updatedItems = images.filter((Elements) => {
                return Elements.category === categItem;
            });
            console.log(setItems(updatedItems))
             
                // if(categItem==="bike"){
                //     return setItems(updatedItems)
                // }else if(categItem==="car"){
                //     return setItems(updatedItems)  
                // }else if(categItem==='bird'){
                //     return setItems(updatedItems)
                // }else if(categItem==='fruits'){
                //     return setItems(updatedItems)
                // }else{
                //     return setItems(updatedItems)
                // }
        }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Image Gallery</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-outline-danger" onClick={()=>setItems(images)} >All</button>
                    <button className="btn btn-warning" onClick={()=>changeHandler("bike")} >Bikes</button>
                    <button className="btn btn-warning" onClick={()=>changeHandler("car")} >Cars</button>
                    <button className="btn btn-warning" onClick={()=>changeHandler("bird")} >Birds</button>
                    <button className="btn btn-warning" onClick={()=>changeHandler("fruits")}>Fruits</button>

                    {/* <button className="btn btn-warning" onClick={()=>setItems(images)} >All</button>
                    <button className="btn btn-warning" onClick={changeHandler} >Bikes</button>
                    <button className="btn btn-warning" onClick={changeHandler} >Cars</button>
                    <button className="btn btn-warning" onClick={changeHandler} >Birds</button>
                    <button className="btn btn-warning" onClick={changeHandler}>Fruits</button> */}
                    
                </div>
            </div>

            {/* Image Galley main */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { name, image } = elem;
                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="card">
                                                    
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                    <div className="title">
                                                    <h4>{name}</h4>
                                                </div> 
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery