import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import LoginInput from './LoginPage/LoginInput';
import LoginBtn from './LoginPage/LoginBtn';
import '../styles/UpdateProfile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest, userDetailsRequest } from '../Redux/action/index'
import { useEffect } from 'react';
import { useHistory } from "react-router";


function UpdateProfile({ handleClose, showUpdate, handleModalClose }) {
    const [updateProfile, setUpdateProfile] = useState({
        firstName: "",
        lastName: "",
        imageUrl: "",
        imagePreviewUrl: "",
        file: ""
    })
    const dispatch = useDispatch();
    const router = useHistory();
    const UpdateProfileStatus = useSelector((state) => state.UpdateProfile)
    const _handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let imageUrl = window.URL.createObjectURL(file);
        setUpdateProfile({ ...updateProfile, imageUrl: file })

        reader.onloadend = () => {
            setUpdateProfile({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
    }


    let $imagePreview = null;
    if (updateProfile.imagePreviewUrl) {
        $imagePreview = <img src={updateProfile.imagePreviewUrl} alt="updateProfile" />
    } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    const formData = new FormData();
    formData.append("image", updateProfile.file);
    formData.append("userId", JSON.parse(localStorage.getItem("userid")));
    formData.append("firstName", updateProfile.firstName);
    formData.append("lastName", updateProfile.lastName);

    const handleSubmit = () => {
        dispatch(updateProfileRequest(formData))
    }
    useEffect(() => {
        if (UpdateProfileStatus?.data?.error == 0) {
            router.push('/profile')
        }
    }, [UpdateProfileStatus])


    return (
        <div>

            <div className="edit-profile">
                <div className="update-user-img container">
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                    <form onSubmit={(e) => _handleSubmit(e)}>
                        <input className="fileInput"
                            type="file"
                            onChange={(e) => _handleImageChange(e)} />
                    </form>
                </div>
                <div className="edit-user-detail mt-5 container">
                    <LoginInput placeholder="First Name" type="text" handleLogin={(e) => { setUpdateProfile({ ...updateProfile, firstName: e.target.value }) }} /> <br />
                    <LoginInput placeholder="Last Name" type="text" handleLogin={(e) => { setUpdateProfile({ ...updateProfile, lastName: e.target.value }) }} /><br />

                    {/* <LoginBtn handleSubmit={handleSubmit} buttonText="Update Profile" /> */}
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="updateProfile" onClick={handleSubmit}>{UpdateProfileStatus?.isLoading ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> : "Update Profile"}</button>
                </div>

            </div>

            {/* </Modal.Header>

            </Modal> */}

        </div>
    )
}
export default UpdateProfile;