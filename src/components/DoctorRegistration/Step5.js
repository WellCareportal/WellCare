import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";

const Step5 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();
  const imgRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateImage = (e) => {
    setUserData({ ...userData, profile_pic: imgRef.current.files[0] });
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      if (!userData.bio) {
        return false;
      }
      if (!userData.username) {
        return false;
      }
      if (!userData.password) {
        return false;
      }
      return true;
    },
  }));

  return (
    <div className="flex flex-col ">
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Upload Profile Pic
        </label>
        <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1">
          <input
            onChange={updateImage}
            name="profile_pic"
            type="file"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            ref={imgRef}
          />
        </div>
      </div>

      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Your Bio(Include Experience)
        </label>
        <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["bio"] || ""}
            name="bio"
            placeholder="your bio"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Create Username
        </label>
        <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="username"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Create Password
        </label>
        <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="••••••••"
            type="password"
            required
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
});

export default Step5;
