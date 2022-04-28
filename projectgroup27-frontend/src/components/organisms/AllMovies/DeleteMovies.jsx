import React from 'react';
import './delete-movies.css'
import {Button} from '../../atoms/Button/Button';
import {AiFillStar} from "react-icons/ai";
import {IoAddCircle} from "react-icons/io5";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {Input} from "../../atoms/Input/Input";
import Select from 'react-select';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {Card, CardBody} from "reactstrap";
import CardHeader from "@material-ui/core/CardHeader";
import {Link} from "react-router-dom";

class DeleteMovies extends React.Component {
    render() {
        const options = [
            { value: 'Action', label: 'Action' },
            { value: 'Crime', label: 'Crime' },
            { value: 'Drama', label: 'Drama' }
        ]
        return (
            <div className='delete-movies'>
                <div className='imgBx'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
                        id="img1"
                        alt="alternatetext"
                    />
                </div>
                <div className='content'>
                    <label style={{marginLeft: '50px', fontSize: "20px"}}>Avatar </label>&nbsp;&nbsp;&nbsp; <label
                    style={{fontSize: "18px"}}>5.0 <AiFillStar color='pink'/></label>
                </div>
                <br/><br/>
                <Button id="btnDelete" rounded={true} label={"DELETE"} color={"red"} onClick={
                    (e) =>
                        confirmAlert({
                            customUI: ({onClose}) => {
                                return (
                                    <div className='popup-box'>
                                        <div className='box'>
                                            <br/><br/>
                                            <h3 style={{textAlign: 'center'}}>Are you sure you want to delete this
                                                movie?</h3>
                                            <br/><br/>
                                            <Button
                                                className="btn btnCancel"
                                                label="CANCEL"
                                                rounded={true} color={"pink"}
                                                onClick={event => window.location.href = '/deleteMovie-admin'}

                                            />
                                            <Button
                                                className="btn btnDelete2"
                                                label="DELETE"
                                                rounded={true} color={"red"}
                                            />

                                        </div>
                                    </div>
                                );
                            },
                            closeOnEscape: true,
                            closeOnClickOutside: true,
                            willUnmount: () => {
                            },
                            afterClose: () => {
                            },
                            onClickOutside: () => {
                            },
                            onKeypressEscape: () => {
                            },
                            overlayClassName: "overlay-custom-class-name",
                        })
                }/>&nbsp;&nbsp;&nbsp;
                <Button id="btnEdit" rounded={true} label={"EDIT"} color={"green"} onClick={event => window.location.href = '/editMovie'}/>

                <div className='imgBx'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
                        id="img2"
                        alt="alternatetext"
                    /></div>
                <div className='content' style={{marginTop: '-10.5%', marginLeft: '-10%'}}>
                    <label style={{marginLeft: '50px', fontSize: "20px"}}>Avatar </label>&nbsp;&nbsp;&nbsp; <label
                    style={{fontSize: "18px"}}>5.0 <AiFillStar color='pink'/></label>
                </div>
                <br/><br/>
                <Button id="btnDelete" rounded={true} label={"DELETE"} color={"red"} onClick={
                    (e) =>
                        confirmAlert({
                            customUI: ({onClose}) => {
                                return (
                                    <div className='popup-box'>
                                        <div className='box'>
                                            <br/><br/>
                                            <h3 style={{textAlign: 'center'}}>Are you sure you want to delete this
                                                movie?</h3>
                                            <br/><br/>
                                            <Button
                                                className="btn btnCancel"
                                                label="CANCEL"
                                                rounded={true} color={"pink"}
                                                onClick={event => window.location.href = '/deleteMovie-admin'}

                                            />
                                            <Button
                                                className="btn btnDelete2"
                                                label="DELETE"
                                                rounded={true} color={"red"}
                                            />

                                        </div>
                                    </div>
                                );
                            },
                            closeOnEscape: true,
                            closeOnClickOutside: true,
                            willUnmount: () => {
                            },
                            afterClose: () => {
                            },
                            onClickOutside: () => {
                            },
                            onKeypressEscape: () => {
                            },
                            overlayClassName: "overlay-custom-class-name",
                        })
                }/>&nbsp;&nbsp;&nbsp;
                <Button id="btnEdit" rounded={true} label={"EDIT"} color={"green"} onClick={event => window.location.href = '/editMovie'}/>
                <br/><br/>


                <div className='add-icon' style={{fontSize: "90px"}} >
                    <IoAddCircle color='#eb7b75' onClick={
                        (e) =>
                            confirmAlert({
                                customUI: ({onClose}) => {
                                    return (
                                        <div className='popup-box'>
                                            <div className='box'>
                                                <h3 style={{textAlign: 'center', fontSize: "35px"}}>Add new movie</h3>
                                                <div className="input-AddMovie" style={{width: '90%',textAlign: 'center'}}>
                                                    <Input label="Description"/>
                                                    <Input label="Director"/>
                                                    <Input label="Writers"/>
                                                    <Input label="Stars"/>
                                                    <Input label="TrailerURL"/>
                                                    <Input label="Image"/>
                                                    <Select options={options}/>
                                                </div>
                                                <Button
                                                    id="btnCancel"
                                                    label="CANCEL"
                                                    rounded={true} color={"pink"}
                                                    onClick={event => window.location.href = '/deleteMovie-admin'}
                                                />
                                                <Button
                                                    id="add-movie"
                                                    label="ADD MOVIE"
                                                    rounded={true}
                                                    color={"green"}
                                                    onClick={event => window.location.href = '/deleteMovie-admin'}
                                                />
                                            </div>
                                        </div>
                                    );
                                },
                                closeOnEscape: true,
                                closeOnClickOutside: true,
                                willUnmount: () => {
                                },
                                afterClose: () => {
                                },
                                onClickOutside: () => {
                                },
                                onKeypressEscape: () => {
                                },
                                overlayClassName: "overlay-custom-class-name",
                            })
                    }/>
                </div>
            </div>
        );
    }
}

export default DeleteMovies;