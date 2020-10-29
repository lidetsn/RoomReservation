import React, {useState,useEffect } from "react";
import Title from "./Title";
import servicesData from "../data/servicesData"


const Services =()=> {
               
                const [serviceOffered, setServiceOffered]=useState([])
    useEffect(()=>{
           setServiceOffered([...servicesData])

    },[])
    
    return (
      <section className="services">
            <Title title="Services" />
              <div className="services-center">
                    {serviceOffered.map(item => 
                              (
                                <article key={`item-${item.title}`} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                              )          
                    )}
            </div>
      </section>
    );
  }
// }
 
export default Services