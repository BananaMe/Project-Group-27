import React from 'react';
import './edit-movie.css'

import {Button} from '../../atoms/Button/Button';
import {Input} from "../../atoms/Input/Input";
import Select from "react-select";

class EditMovie extends React.Component {
    render() {
        const options = [
            {value: 'Action', label: 'Action'},
            {value: 'Crime', label: 'Crime'},
            {value: 'Drama', label: 'Drama'}
        ]
        return (
            <div id="movieDetails">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
                    id="slika1"
                    alt="alternatetext"
                />{" "}
                &nbsp;
                <iframe
                    width="740"
                    height="370"
                    src="https://www.youtube.com/embed/4jNpnzpWqqI"
                />
                <br/>
                <div id="outer">
                    <div className="inner">
                        <Button
                            id="btnDef"
                            label="Action"
                            rounded={false} color={"pink"}
                        />&nbsp;&nbsp;</div>
                    <div className="inner">
                        <Button
                            id="btnDef"
                            label="Crime"
                            rounded={false} color={"pink"}
                        />&nbsp;&nbsp;</div>
                    <div className="inner">
                        <Button
                            id="btnDef"
                            label="Drama"
                            rounded={false} color={"pink"}
                            disabled
                        />&nbsp;&nbsp;
                    </div>
                    <div className="inner">
                        <Select options={options}/>
                    </div>
                    <br/>
                </div>
                <div className="input-AddMovie1" style={{width: '50%', textAlign: 'center'}}>
                    <Input label="Description"/>
                    <Input label="Director"/>
                    <Input label="Writers"/>
                    <Input label="Stars"/>
                    <Input label="TrailerURL"/>
                    <Input label="Image"/>
                </div>
                <div>
                    <br/>
                    <Button
                        onClick={event => window.location.href = '/all-movies'}
                        id="btnBack"
                        label="SAVE"
                        rounded={true} color={"green"}
                    />
                </div>
            </div>


        );
    }
}

export default EditMovie;