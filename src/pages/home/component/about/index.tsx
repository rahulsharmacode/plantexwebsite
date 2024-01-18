import aboutImg from '../../../../assets/img/about.png'


const index = () => {

    const data  = {
        about__img : aboutImg,
        about__title : <p>Who we really are & <br /> why choose us</p>,
        about__description : <p> We have over 4000+ unbiased reviews and our customers
        trust our plant process and delivery service every time</p>,
        about_keypoints : [
            {
              icon : "ri-checkbox-fill about__details-icon",
                title : "We always deliver on time."
            },

            {
              icon : "ri-checkbox-fill about__details-icon",
                title : "We give you guides to protect and care for your plants."
            },
                
            {
              icon : "ri-checkbox-fill about__details-icon",
                title : "We always come over for a check-up after sale."
            },
                
            {
              icon : "ri-checkbox-fill about__details-icon",
                title : "100% money back guaranteed."
            }
        ],
        shopnow_path : "#"
        
    }


  return (<>
  
  <section className="about section container" id="about">
            <div className="about__container grid">
                <img src={data.about__img} alt="" className="about__img" />

                <div className="about__data">
                    <h2 className="section__title about__title">
                        {data.about__title}
                    </h2>

                    <p className="about__description">
                        {data.about__description}
                    </p>

                    <div className="about__details">
                        {
                            data.about_keypoints.map((val:any,index:number) =>{
                                return <p key={index} className="about__details-description">
                                <i className={val.icon}></i>
                                {val.title}
                            </p>
                            })
                        }
                       
                    </div>

                    <a href={data.shopnow_path} className="button--link button--flex">
                        Shop Now <i className="ri-arrow-right-down-line button__icon"></i>
                    </a>
                </div>
            </div>
        </section>
  
  </>)
}

export default index