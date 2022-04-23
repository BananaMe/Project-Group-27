import React from 'react';
import './delete-movies.css'
import { Button } from '../../atoms/Button/Button';
import {AiFillStar} from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class DeleteMovies extends React.Component {
	render() {
		return (      
      <div className='delete-movies'>
     <div className='imgBx'>
           <img
           src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
           id="img1"
           alt="alternatetext"
         /></div>
         <div className='content'>
          <label style={{marginLeft:'50px', fontSize:"20px"}}>Avatar </label>&nbsp;&nbsp;&nbsp; <label style={{ fontSize:"18px"}}>5.0 <AiFillStar color='pink'/></label>
          </div>
        <br/><br/>
        <Button id="btnDelete" rounded={true} label={"DELETE"} color={"red"} onClick={
             (e) =>
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                     <div className='popup-box'>
                     <div className='box'>
                         <br/><br/>
                      <h3 style={{textAlign: 'center'}}>Are you sure you want to delete this movie?</h3> 
                      <br/><br/>
                      <Button
                           id="btnCancel"
                           label="CANCEL"
                           rounded={true} color={"pink"}
                           onClick={event => window.location.href = '/deleteMovie-admin'}

                         />
                         <Button
                           id="btnDelete2"
                           label="DELETE"
                           rounded={true} color={"red"}
                         />
                      
                       </div>
                 </div>
                  );
                },
                closeOnEscape: true,
                closeOnClickOutside: true,
                willUnmount: () => {},
                afterClose: () => {},
                onClickOutside: () => {},
                onKeypressEscape: () => {},
                overlayClassName: "overlay-custom-class-name",
              })
          }/>&nbsp;&nbsp;&nbsp;
          <Button id="btnEdit" rounded={true} label={"EDIT"} color={"green"}/>
       
           <div className='imgBx'>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
          id="img2"
          alt="alternatetext"
        /></div>
        <div className='content' style={{marginTop:'-10.5%', marginLeft:'-10%'}}>
            <label style={{marginLeft:'50px', fontSize:"20px"}}>Avatar </label>&nbsp;&nbsp;&nbsp; <label style={{ fontSize:"18px"}}>5.0 <AiFillStar color='pink'/></label>
         </div>
         <br/><br/>
         <Button id="btnDelete" rounded={true} label={"DELETE"} color={"red"} onClick={
             (e) =>
             confirmAlert({
               customUI: ({ onClose }) => {
                 return (
                    <div className='popup-box'>
                    <div className='box'>
                        <br/><br/>
                     <h3 style={{textAlign: 'center'}}>Are you sure you want to delete this movie?</h3> 
                     <br/><br/>
                     <Button
                          id="btnCancel"
                          label="CANCEL"
                          rounded={true} color={"pink"}
                          onClick={event => window.location.href = '/deleteMovie-admin'}

                        />
                        <Button
                          id="btnDelete2"
                          label="DELETE"
                          rounded={true} color={"red"}
                        />
                      
                      </div>
                </div>
                 );
               },
               closeOnEscape: true,
               closeOnClickOutside: true,
               willUnmount: () => {},
               afterClose: () => {},
               onClickOutside: () => {},
               onKeypressEscape: () => {},
               overlayClassName: "overlay-custom-class-name",
             })
         }/>&nbsp;&nbsp;&nbsp;
         <Button id="btnEdit" rounded={true} label={"EDIT"} color={"green"}/>
         <br/><br/>
        </div>
		);
	}
}

export default DeleteMovies;