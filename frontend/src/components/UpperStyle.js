import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

import React from "react"



const upperStyle = styled.header`
                              min-height: 60vh;
                              /* background: url(${defaultImg}); */
                              background: url(${props => (props.img ? props.img : defaultImg)});
                              display: flex;
                              align-items: center;
                              justify-content: center;
                                 `;

export default upperStyle;



export const DetailHeader=({img,children})=>{
       console.log(img)
       // const a=img.toString().split("/")
      // console.log(a)
       return <section style={{minHeight:"80vh",
                               display:"flex",
                                 backgroundImage: `url(${img})`,
                                 backgroundAttachment:"fixed",
                                 
                            //    backgroundImage: `url("../images/room-7.jpeg")`,
                               alignItems:"center", 
                               justifyContent:"center"}}
                               >
                     {children}
              </section>;
}

