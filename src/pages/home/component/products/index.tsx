import aboutImg from '../../../../assets/img/about.png';
import product1Img from '../../../../assets/img/product1.png';
import product2Img from '../../../../assets/img/product2.png';
import product3Img from '../../../../assets/img/product3.png';
import product4Img from '../../../../assets/img/product4.png';
import product5Img from '../../../../assets/img/product5.png';
import product6Img from '../../../../assets/img/product6.png';




const index = () => {

    const data  = {
        products__img : aboutImg,
        products__title : <p>Check out our <br /> products</p>,
        products__description : <p>Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.</p>,
        products_cards : [
            {
            image : product1Img,
            title : "Cacti Plant",
            price : '$19.99'
            },
            {
                image : product2Img,
                title : "Cactus Plant",
                price : '$19.99'
                },
                {
                    image : product3Img,
                    title : "Aloe Vera Plant",
                    price : '$19.99'
                    },
                    {
                        image : product4Img,
                        title : "Succulent Plant",
                        price : '$19.99'
                        },
                        {
                            image : product5Img,
                            title : "Succulent Plant",
                            price : '$19.99'
                            },
                            {
                                image : product6Img,
                                title : "Green",
                                price : '$19.99'
                                }
        ]
        
    }

  return (<>
  
  <section className="product section container" id="products">
            <h2 className="section__title-center">
                {data.products__title}
            </h2>

            <p className="product__description">
                {data.products__description}
            </p>

            <div className="product__container grid">

                {
                    data.products_cards.map((val:any,index:number)=>{
                        return <ProductCard
                        key={index}
                        image={val.image}
                        title={val.title}
                        price={val.price}
                    />
                    })
                }
                
            </div>
        </section>
  
  
  </>)
}

export default index;


interface productCard {
    image : string,
    title : string,
    price : string,
}
const ProductCard = ({image,title,price}:productCard) =>{
    return <article className="product__card">
    <div className="product__circle"></div>

    <img src={image} alt="" className="product__img" />

    <h3 className="product__title">{title}</h3>
    <span className="product_price">{price}</span>

    <button className="button--flex product__button">
        <i className="ri-shopping-bag-line"></i>
    </button>
</article>
}