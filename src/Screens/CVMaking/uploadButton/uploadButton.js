import React, { useState, useEffect } from 'react';
import {Col} from 'antd'
import {useDispatch} from 'react-redux'
import {getProfilePhoto} from './../../../actions/resumeDetailsActions'
import './../BasicInfo/BasicInfo.css'
import image from './../BasicInfo/image.png'

const UploadButton = () => {

    let dispatch=useDispatch()
    const [profilePhoto, setProfilePhoto] = useState(null);
    useEffect(() => {
    dispatch(getProfilePhoto(profilePhoto));

    }, [dispatch, profilePhoto]);

    return ( 
        <Col className="uploadPhoto" lg={6} md={6} sm={24} xs={24}>
                            <div>
                                <img width={60} src={image}></img></div>
                                
                                {/* <p className="uploadPhotoText">Upload your Photo
                            </p>  */}
                            <input hidden id="actual-btn" type="file" accept="image/*" onChange={(e)=>setProfilePhoto(URL.createObjectURL(e.target.files[0]))}></input>
                            <label className="uploadPhotoText" for="actual-btn">No file chosen</label>

                        </Col>
     );
}
 
export default UploadButton;