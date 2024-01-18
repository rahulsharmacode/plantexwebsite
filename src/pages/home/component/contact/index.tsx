import { useState } from "react"

const index = () => {

    const data  = {
        title  : <p>Reach out to us today <br /> via any of the given <br /> information</p>,
        contact_number : "+999 888 777",
        contact_email : "user@email.com",
    }


    const [contactData,setcontactData] = useState({
        email : "",
        subject : "",
        message : ""
    });
    const handelChange = (e:any) =>{
        let name = e.target.name;
        let value = e.target.value;
        setcontactData(()=> ({...contactData , [name] : value}))
    }
    const handerAction = (e:any) =>{
        e.preventDefault();
        console.log('form data: ' , contactData )
    }

  return (
    <>
    
    <section className="contact section container" id="contact">
            <div className="contact__container grid">
                <div className="contact__box">
                    <h2 className="section__title">
                        {data.title}
                    </h2>

                    <div className="contact__data">
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Call us for instant support</h3>
                            <span className="contact__description">
                                <i className="ri-phone-line contact__icon"></i>
                                {data.contact_number}
                            </span>
                        </div>

                        <div className="contact__information">
                            <h3 className="contact__subtitle">Write us by mail</h3>
                            <span className="contact__description">
                                <i className="ri-mail-line contact__icon"></i>
                                {data.contact_email}
                            </span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form" onSubmit={handerAction}>
                    <div className="contact__inputs">
                        <div className="contact__content">
                            <input value={contactData.email} onChange={handelChange} type="email" name="email" placeholder=" " className="contact__input" />
                            <label className="contact__label">Email</label>
                        </div>

                        <div className="contact__content">
                            <input value={contactData.subject} onChange={handelChange} type="text" name="subject" placeholder=" " className="contact__input" />
                            <label className="contact__label">Subject</label>
                        </div>

                        <div className="contact__content contact__area">
                            <textarea value={contactData.message} onChange={handelChange} name="message" placeholder=" " className="contact__input"></textarea>
                            <label className="contact__label">Message</label>
                        </div>
                    </div>

                    <button type="submit" className="button button--flex">
                        Send Message
                        <i className="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </form>
            </div>
        </section>
    
    </>
  )
}

export default index