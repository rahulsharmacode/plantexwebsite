
import homeImg from '../../../../assets/img/home.png'

const index = () => {

    const data  = {
        home__img : homeImg,
        home__title : <p>Plants will make <br /> your life better</p>,
        home__description : <p>Create incredible plant design for your offices or apastaments.
        Add fresness to your new ideas.</p>,
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
        home_explore_path : "#about"
        
    }
  return (<>
  
  
  <section className="home" id="home">
            <div className="home__container container grid">
                <img src={data.home__img} alt="" className="home__img" />

                <div className="home__data">
                    <h1 className="home__title">
                        {data.home__title}
                    </h1>
                    <p className="home__description">
                    {data.home__description}
                    </p>
                    <a href={data.home_explore_path} className="button button--flex">
                        Explore <i className="ri-arrow-right-down-line button__icon"></i>
                    </a>
                </div>

                <div className="home__social">
                    <span className="home__social-follow">Follow Us</span>

                    <div className="home__social-links">
                        {
                            data.social_box.map((val:any,index:number)=>{
                                return <a key={index} href={val.path} target="_blank" className="home__social-link">
                                <i className={val.icon}></i>
                            </a>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
  
  </>)
}

export default index