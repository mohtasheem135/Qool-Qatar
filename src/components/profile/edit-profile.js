import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Input } from 'reactstrap';
import Axios from 'axios';
import "../../assets/css/Pages.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [initialState, setInitialState] = useState({});
    const { name, email, mobile } = initialState;

    const [imgURL, setImgURL] = useState('')

    // console.log(JSON.parse(localStorage.getItem('Profile_Data')).payload.name)


    

    async function handelImgChange(e) {
        console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append('image', e.target.files[0])
        setSelectedImage(e.target.files[0]);
        const { data } = await Axios.post('/upload/assets/image', formData);
        setImgURL(data.payload);
        // console.log({data})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data } = await Axios.post('profile/update', {
            name: name,
            phoneNumber: mobile,
            gender: 'm',
            email: email,
            profilePic: imgURL,
            uid: JSON.parse(localStorage.getItem('Profile_Data')).payload.uid,
        });

       !data.error && toast.success(data.message, {position: toast.POSITION.BOTTOM_CENTER});
    }



    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
        })
    }

    return (
        <div className="edit-profile">
            <h3>Edit Profile</h3>
            <ToastContainer/>
            <div className="upload-box">
                <div>
                    <div className="rounded-box">
                        <div className="outer">
                          
                            {selectedImage === null ? <img className="outer" src={JSON.parse(localStorage.getItem('Profile_Data'))?.payload?.profilePic} alt="user" /> :
                                <img className="outer" src={URL.createObjectURL(selectedImage)} alt="user" />
                            }
                            <div className="inner">
                                <input
                                    className="inputfile"
                                    type="file"
                                    name="myImage"
                                    onChange={handelImgChange}
                                />
                                <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg></label>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="del-box">
                    {/* <input type='image' src={require('../../assets/images/Delete.png')} onClick={() => setSelectedImage(null)} /> */}
                    <img onClick={() => setSelectedImage(null)} src={require('../../assets/images/Delete.png')} alt="delete" />

                </div>
            </div>
            <Form className="edit-form">
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <Input
                        onChange={handelInputChange}
                        type="text"
                        name="name"
                        defaultValue={JSON.parse(localStorage.getItem('Profile_Data')).payload?.name}
                        placeholder="Full Name"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Input
                        onChange={handelInputChange}
                        type="email"
                        name="email"
                        defaultValue={JSON.parse(localStorage.getItem('Profile_Data')).payload?.email}
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input
                        onChange={handelInputChange}
                        type="text"
                        name="mobile"
                        defaultValue={[JSON.parse(localStorage.getItem('Profile_Data')).payload?.phoneNumber?.slice(0, 3), " ", JSON.parse(localStorage.getItem('Profile_Data')).payload?.phoneNumber?.slice(3,7), " ", JSON.parse(localStorage.getItem('Profile_Data')).payload?.phoneNumber?.slice(7)].join('')}
                        placeholder="mobile number"
                    />
                </FormGroup>
                <Button onClick={handleSubmit} className='contact-form-btn' >Submit</Button>
                {/* <Input  type="submit" value="Submit" className="review-btn" /> */}
            </Form>
        </div>
    )
}

export default EditProfile;