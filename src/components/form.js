import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react'; 



function Former() {

    const [title,subtitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="subform">
                <label for="fname">Имя автора</label><br></br>
                <input type="text" id="fname" name="fname" ></input><br></br>
                <label for="fname">Заголовок записи</label><br></br>
                <input type="text" id="fname" name="fname" ></input><br></br>
                <label for="lname">Контент записи</label><br></br>
                <Editor
                initialValue="<p></p>"
                apiKey='5f4qa39o2piv8j058xe2ipo8n11mljv4ow6yby38546hrc3t'
                />
                <input type="submit" value="Submit"></input>
            </form> 
        </div>
    );
}


export default Former