import  { useState } from "react";
import { CgProfile } from "react-icons/cg";

const FileChooserIcon = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setImagePreview(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };


  return (
    <div>
      <div className="cursor-pointer" onClick={handleIconClick}>
        <div className="flex justify-end mr-16 pt-4">
          {!imagePreview && (
            <CgProfile className="h-[150px] w-[150px] bg-gray-400" />
          )}
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="h-[150px] w-[150px]" />
          )}
        </div>
      </div>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />
      
    </div>
  );
};

export default FileChooserIcon;
