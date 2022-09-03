 import React from 'react';
 import './Dash.css';
 import { useState, useEffect } from 'react';
 
 
 import { AiOutlineAlignRight, AiOutlinePlus,AiOutlineBell } from "react-icons/ai";

 import { FaFacebookF } from "react-icons/fa";
 import {  MdPersonOutline } from "react-icons/md";
 let val1=168;
let val2=68;
let val3=24;
 import { BsFillExclamationSquareFill, BsGrid, BsCircle,BsTwitter,BsInstagram,BsLinkedin } from "react-icons/bs";


 const Dash = () => {

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);


    const fetchData = () => {
      fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data.content);
          console.log(users);
          setCount(users.length);
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

     return (

             <div style={{backgroundColor:'whitesmoke'}} >
                

<div className="row">
  <div className="column left" >
    <div className='sidebar'>
        <a className='icon_div'><BsFillExclamationSquareFill style={{marginRight:'10px', marginLeft:'-18px'}}/> SmartUp &nbsp;&nbsp; <AiOutlineAlignRight style={{marginRight:'10px', marginLeft:'-36px', float:'right'}} /> </a>
        <a className='icon_div1'><img className='img1' src='https://i.imgur.com/pKY2DH2.jpg'style={{marginRight:'10px', marginLeft:'-36px'}}/>Profile<AiOutlineBell style={{float:'right', marginTop:'5px', marginRight:'12px', backgroundColor:'orange', width:'20px', borderRadius:'50px',color:'white', fontSize:'15px'}}/></a>
        <p style={{float:'right', marginTop:'20px', marginRight:'14px', backgroundColor:'blue', width:'35px', borderRadius:'20px',color:'white', fontSize:'15px'}}>{count} </p>
        <a className='icon_div1'> <BsGrid style={{marginRight:'10px', marginLeft:'-22px', fontSize:'18px'}}/> Discover</a>
        <a className='icon_div1'> <BsCircle style={{marginRight:'10px', marginLeft:'-60px', fontSize:'18px'}}/>SmartUp</a>
        <a className='icon_div2'><img className='img1' src='https://i.imgur.com/pKY2DH2.jpg'/>&nbsp;&nbsp;Main community</a>
        <a className='icon_div2'><img className='img1' src='https://i.imgur.com/pKY2DH2.jpg'/> &nbsp;&nbsp;Fun community</a>
        <a className='icon_div2'><img className='img1' src='https://i.imgur.com/pKY2DH2.jpg'/>&nbsp;&nbsp;Tech community</a>
        <a className='icon_div2'><img className='img1' src='https://i.imgur.com/pKY2DH2.jpg'/>&nbsp;&nbsp;Lead community</a>
        <a className='icon_div1' style={{ fontWeight:'bold', fontSize:'15px', paddingTop:'20px'}} onClick={() => setShow((s) => !s)}><MdPersonOutline style={{ marginLeft:'-60px', fontSize:'22px'}}/>&nbsp;&nbsp; Personal</a>
        <div style={{ display: show ? "block" : "none" }}>
          <a>In Progress &nbsp;&nbsp; {val1}</a>
          <a>Completed  &nbsp;&nbsp;{val2}</a>
          <a>Read later &nbsp;&nbsp; {val3}</a>
        
        </div>

      





        <div className='Footer'>
        <a>About SmartUp</a>
        <a>Send Feedback</a>
        <a>Terms of Use</a>
        <a>Privacy  Policy</a><br/>
        
        <BsLinkedin style={{paddingLeft:'15px'}}/>
        <FaFacebookF style={{paddingLeft:'15px'}}/>
        <BsTwitter style={{paddingLeft:'15px'}}/>
        <BsInstagram style={{paddingLeft:'15px'}}/>
        
        
        </div>
    </div>
  </div>
  <div className="column right">
    
    <p style={{marginLeft:'-73rem', paddingTop:'10px', fontSize:'20px'}}>Discover</p>
    <p ><AiOutlinePlus href='#' style={{width:'50px', float:'right',marginRight:'40px', backgroundColor:'blue', borderRadius:'20px',color:'white',height:'20px', marginTop:'-10px'}}/></p>


<div className='row2'>
    {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <div className='column2'>
                <div className='cards'>

                <img src={user.coverImageUrl} style={{width:'340px', height: '200px' }}></img>
              <div className='desc'>{user.title}</div>
            
              
              </div>
              </div>
            
            </li>
            
          ))}
        </ul>
      )} 
      </div>

  </div>
</div>
         </div>
     )

 };
 export default Dash;


