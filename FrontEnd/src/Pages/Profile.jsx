import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../Redux/userSlice";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { app } from "../firebase";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);
  console.log(filePerc);
  console.log(fileUploadError);
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/user/update/${currentUser._id}`, {
        userName: formData.userName,
        password: formData.password,
        email: formData.email,
        avatar: formData.avatar,
      });
      dispatch(updateCurrentUser(response.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="pt-16 max-w-lg m-auto">
        <h1 className="text-3xl font-bold text-center py-4">Profile</h1>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          accept="image/*"
          className="hidden"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full w-14 object-cover m-auto cursor-pointer"
          src={formData.avatar || currentUser.avatar}
          alt="avatar"
          id="avatar"
          onChange={handleChange}
        />
        <p>
          {fileUploadError ? (
            <span className="text-red-700">Error Image Upload !</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-lime-300">{`Uploading ${filePerc} % Done`}</span>
          ) : filePerc === 100 ? (
            <span className="text-lime-300">Image Successfully Uploaded!</span>
          ) : null}
        </p>
        <form className="flex flex-col gap-3 pt-3">
          <input
            className="p-3 rounded-lg"
            placeholder="username"
            id="userName"
            type="text"
            defaultValue={currentUser.userName}
            onChange={handleChange}
          />
          <input
            className="p-3 rounded-lg"
            id="email"
            placeholder="email"
            type="text"
            defaultValue={currentUser.email}
            onChange={handleChange}
          />
          <input
            className="p-3 rounded-lg"
            placeholder="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="p-3 rounded-lg bg-indigo-900 font-semibold text-white hover:bg-indigo-800"
          >
            UPDATE
          </button>
        </form>
        <div className="flex justify-between pt-4">
          <span className="text-red-600  font-medium cursor-pointer">
            Delete Account
          </span>
          <span className="text-red-600 font-medium cursor-pointer">
            Sign Out
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
