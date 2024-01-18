




const index = () => {

    const data  = {
        title  : <p>Some common questions <br /> were often asked</p>,
        cards : [
            {
                question : "My flowers are falling off or dying?",
                answer : <p>Plants are easy way to add color energy and transform your
                space but which planet is for you. Choosing the right plant.</p>
            },
            {
                question : "What causes leaves to become pale?",
                answer : <p>Plants are easy way to add color energy and transform your
                                    space but which planet is for you. Choosing the right plant.</p>
            },
            {
                question : "What causes brown crispy leaves?",
                answer : <p>Plants are easy way to add color energy and transform your
                space but which planet is for you. Choosing the right plant.</p>
            },
            {
                question : "How do i choose a plant?",
                answer : <p>Plants are easy way to add color energy and transform your
                space but which planet is for you. Choosing the right plant.</p>
            },
            {
                question : "How do I change the pots?",
                answer : <p>Plants are easy way to add color energy and transform your
                space but which planet is for you. Choosing the right plant.</p>
            },
            {
                question : "Why are gnats flying around my plant?",
                answer : <p>Plants are easy way to add color energy and transform your
                space but which planet is for you. Choosing the right plant.</p>
            },
    
        ]
    }
        
    
  return (<>
  
  <section className="questions section" id="faqs">
            <h2 className="section__title-center questions__title container">
                {data.title}
            </h2>

            <div className="questions__container container grid">
                <div className="questions__group">

                    {
                        data.cards.slice(0,3).map((val:any,index:number) =>{
                            return <div key={index} className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    {val.question}
                                </h3>
                            </header>
    
                            <div className="questions__content">
                                <p className="questions__description">
                                   {val.answer}
                                </p>
                            </div>
                        </div>
                        })
                    }
                    
                </div>

                <div className="questions__group">

{
    data.cards.slice(3,6).map((val:any,index:number) =>{
        return <div key={index} className="questions__item">
        <header className="questions__header">
            <i className="ri-add-line questions__icon"></i>
            <h3 className="questions__item-title">
                {val.question}
            </h3>
        </header>

        <div className="questions__content">
            <p className="questions__description">
               {val.answer}
            </p>
        </div>
    </div>
    })
}

</div>
            </div>
        </section>
  
  </>)
}

export default index