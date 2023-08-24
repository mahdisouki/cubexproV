import React  from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './portfolio.scss';
import axios from 'axios'


export default function Portfolio({setOffers,offer,key,isAdmin, token,callback,setCallback ,variant}) {
  const deleteOffer = async() =>{
    console.log(offer)
    try {
      await axios.delete(`/api/offer/${offer._id}` ,{headers : {Authorization:token}})
      setCallback(!callback)
    
    } 
    
    catch (error) {
      alert(error.response.data.msg)
    }
  }
  
  return (
   
    
    <Link to={`/portfolio/editOffer/${offer._id}`}
    className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}> 
     <>
  <Div className="cs-portfolio_hover" />
        <Div className="cs-portfolio_bg cs-bg" >
        <img src={offer.img} alt="" style={{objectFit:'cover' , width :'100%' , height :'100%' }}></img>
        </Div>
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{offer.poste}</h2>
          <Div className="cs-portfolio_subtitle">Modifier</Div>
          
        </Div>
     </>
     </Link>
  );
}
