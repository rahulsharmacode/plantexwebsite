import { useState } from 'react';
import card1Img from '../../assets/img/card1.png';
import card2Img from '../../assets/img/card2.png';
import card3Img from '../../assets/img/card3.png';
import card4Img from '../../assets/img/card4.png';




const index = () => {

    const data  = {
        logo_title : "Plantex",
        footer__title : <p>Subscribe to our newsletter <br /> to stay update</p>,
        footer__description : <p>Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.</p>,
        social_box : [
            {
                
                icon : "ri-facebook-fill",
                path : "https://www.facebook.com/"
            },
            {
                icon : "ri-instagram-line",
              
                path : "https://www.instagram.com/"
            },
            {
                icon : "ri-twitter-fill",
                path : "https://twitter.com/",
               
            }
        ],
        address_list : [
            "1234 - Peru",
            "La Libertad - 43210",
            "123-456-789"
        ],
        payCard : [
            card1Img,card2Img,card3Img,card4Img
        ],
        contact_number : "+999 888 777",
        copyright : <p>&#169; Bedimcode. All rigths reserved</p>
        
    }

    const [subemail,setsubemail] = useState("")
    const handelAction = () =>{
        console.log('email data :', subemail)
    }

  return (<>
  
  <footer className="footer section">
        <div className="footer__container container grid">
            <div className="footer__content">
                <a href="#" className="footer__logo">
                    <i className="ri-leaf-line footer__logo-icon"></i> Plantex
                </a>

                <h3 className="footer__title">
                    Subscribe to our newsletter <br /> to stay update
                </h3>

                <div className="footer__subscribe">
                    <input onChange={(e)=>{setsubemail(e.target.value)}} type="email" placeholder="Enter your email" className="footer__input" />

                    <button onClick={handelAction} className="button button--flex footer__button">
                        Subsribe
                        <i className="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Our Address</h3>

                <ul className="footer__data">
                    {
                        data.address_list.map((val:any,index:number) =>{
                            return <li key={index} className="footer__information">{val}</li>
                        })
                    }
                    
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Contact Us</h3>

                <ul className="footer__data">
                    <li className="footer__information">{data.contact_number}</li>

                    <div className="footer__social">
                    {
                            data.social_box.map((val:any,index:number)=>{
                                return <a key={index} href={val.path} target="_blank" className="home__social-link">
                                <i className={val.icon}></i>
                            </a>
                            })
                        }
                    </div>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">
                    We accept all credit cards
                </h3>

                <div className="footer__cards">
                    {
                        data.payCard.map((val:any,index:number)=>{
                            return  <img key={index} src={val} alt="" className="footer__card" />

                        })
                    }
                   
                </div>
            </div>
        </div>

        <p className="footer__copy">{data.copyright}</p>
    </footer>
  
  </>)
}

export default index