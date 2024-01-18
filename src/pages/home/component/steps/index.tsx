


const index = () => {

    const data  = {
      
       steps__title : <p>Steps to start your <br /> plants off right</p>,
       steps_cards : [
            {
            title : "Choose Plant",
            description : "We have several varieties plants you can choose from."
            },
            {
                title : "Place an order",
                description : "Once your order is set, we move to the next step which is the shipping."
                },
                {
                    title : "Get plants delivered",
                    description : "Our delivery process is easy, you receive the plant direct to your door."
                    }
        ],
        
    }

  return (<>
  
  <section className="steps section container">
            <div className="steps__bg">
                <h2 className="section__title-center steps__title">
                    {data.steps__title}
                </h2>

                <div className="steps__container grid">

                    {
                        data.steps_cards.map((val:any,index:number)=>{
                            return <div key={index} className="steps__card">
                            <div className="steps__card-number">0{index}</div>
                            <h3 className="steps__card-title">{val.title}</h3>
                            <p className="steps__card-description">
                                {val.description}
                            </p>
                        </div>
                        })
                    }
                   
                </div>
            </div>
        </section>
  
  </>)
}

export default index