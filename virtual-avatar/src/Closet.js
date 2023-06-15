import React from 'react'
import {Link} from "react-router-dom";
import HeaderTopNews from './HeaderTopNews';

const Demo = [
    {
        Url : "/business-consulting",
        Image: "./images/demo/business-consulting.png" ,
        Imagelight: "./images/demo/business-consulting-light.png" ,
        Title: "Business Consulting",
        badge: "",
    },

    {
        Url : "/business-consulting-2",
        Image: "./images/demo/business-consulting-2.png" ,
        Imagelight: "./images/demo/business-consulting-2-light.png" ,
        Title: "Business Consulting",
        badge: "",
    },
    {
        Url : "/corporate",
        Image: "./images/demo/corporate.png" ,
        Imagelight: "./images/demo/corporate-light.png" ,
        Title: "Corporate",
        badge: "",
    },
]

const Closet = () => {
    return (
        <>
        <main className="page-wrapper">
                <HeaderTopNews />
                <div className="row row--30">
                            {Demo.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                                {data.badge ? <span className="label-badge">{data.badge}</span> : ''}
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link> </h4>
                                    </div>
                                </div>
                            ))} 
                        </div>
                        </main>
        </>
    )
}

export default Closet;