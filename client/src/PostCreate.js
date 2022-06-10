import React, { useState } from "react";
import axios from 'axios'; 

const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
        title
    });

    setTitle('');

};

const App = () => {
    const [title, setTitle] = useState('');
    return <div>
        <form method="post" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input  type="form" value={title} onChange={e => setTitle(e.target.value)}  className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
};
 
export default App;