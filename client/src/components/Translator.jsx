import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../App.css"

const Translator = (props) => {

    let [mongoQuery, setMongoQuery] = useState("");
    let [sqlQuery, setSqlQuery] = useState("");

    //function for form submission
    const translateQuery = (e) => {
        
        e.preventDefault();
        axios.post("http://localhost:8000/api/translate", {
            mongoQuery
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log(err))

        //receive the query as a string, pull apart and grab the values
        //translate the data to a sql query
        //have it displayed on the right box

        //logic to grab the query
        //logic to translate the query
        //logic to show the query on the page in the sqlQuery div
    }

    return (

        <>
            <div>
                <h1>MongoDB Query Translator</h1>
                <h5>The translator uses a Pokemon database, with a collection name pokemons to practice query translation. Key values include name, type, and color.</h5>
            </div>
            
            <div className="main">

            <form onSubmit={ translateQuery }>
                <div>
                    <input className="mongoQuery" type="text" onChange = { (e) => setMongoQuery(e.target.value) } />
                </div>

            <div className="translate">
                <input type="submit" value="Translate" />
            </div>

                {/* <div className="translate">
                    <button>Translate</button>
                </div> */}
            </form>
            
            <div className="sqlQuery"> 
                { sqlQuery }
            </div>
            
            </div>
        </>
        
    )
}

export default Translator;