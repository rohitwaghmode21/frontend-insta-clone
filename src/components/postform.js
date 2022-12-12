import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './postform.css'




const Postform = () => {
    const navigate = useNavigate();
    let [data, setData] = useState({
        name: "",
        description: "",
        image: "",
        location: "",
        date: ""
    })
    let [error,seterror]=useState("");
    const { name, description, formData, location } = data;

    const handleChange = (e) => {
        const { name } = e.target;
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        e.preventDefault();
        console.log(data)
        let d = new Date();
        let mon = month[d.getMonth()];
        let date = d.getDate();
        let year = d.getUTCFullYear();
        let finaldate = date + "-" + mon + "-" + year;
        console.log("d", finaldate)
        const datas = new FormData();
        datas.append("name", data.name);
        datas.append("description", data.description);
        datas.append("location", data.location);
        datas.append("file", data.image);
        datas.append("date", finaldate);
        //console.log(datas);

        //console.log("data", formData);
        try {
            fetch("https://rohitn-instaclone.onrender.com/post", {
                method: "POST",
                body: datas

            }).then(resp => resp.json()).then(response => {
               // console.log(response)
                if(response.ok)
                {
                    console.log(response)
                navigate("/content")
                }
                else{
                    seterror("recheck the data sent")
                }
                
            })

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="formContainer">
            <form encType="multipart/form-data" className="innerform">
                <div >
                    <label>Image</label>
                    <input
                        className="inputcontainer"
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="labelcontainer">Name</label>
                    <input
                    className="inputcontainer"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Location</label>
                    <input
                    className="inputcontainer"
                        type="text"
                        name="location"
                        value={location}
                        onChange={handleChange} />
                </div>

                <div>
                    <label>Description</label>
                    <input
                    className="inputcontainer"
                        type="text"
                        name="description"
                        value={description}
                        onChange={handleChange} />
                </div>
                <div className='buttonpost'>
                <button className='button post' type="submit" onClick={handleSubmit}>Post</button>
                <div className="errorclass">{error}</div>  
                </div> 
                         
            </form>
        </div>
    )
}
export default Postform;