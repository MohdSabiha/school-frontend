import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRegistration = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [admission, setAdmission] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [caste, setCaste] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [reference, setReference] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setImagePreview(dataURL);
        setFileSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validation for mobile number (10 digits)
    const isValidMobile = /^[0-9]{10}$/.test(mobile);
    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validation for Aadhaar number (12 digits)
    const isValidAadhaar = /^[0-9]{12}$/.test(aadhar);
    if (!isValidAadhaar) {
      alert("Please enter a valid 12-digit Aadhaar number.");
      return;
    }

    try {
      // Check if admission number is unique
      const response = await axios.get(`http://localhost:5000/checkadmission/${admission}`);
      if (response.data.exists) {
        alert("Admission number already exists. Please choose a different one.");
      } else {
        // Proceed with form submission if admission number is unique
        await submitForm();
      }
    } catch (error) {
      console.error("Error checking admission number", error);
      alert("Error checking admission number. Please try again.");
    }
  };

  const submitForm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/newregistration', {
        imagePreview,
        admission,
        email,
        name,
        father,
        mother,
        caste,
        mobile,
        dob,
        aadhar,
        reference
      });
      
      console.log(response.data); // Assuming your server returns data upon successful registration
      navigate('/students');
      // Navigate to the '/students' page after successful registration
      // Simply navigate to the '/students' route
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit registration form. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-cover" style={{backgroundImage: "url('../src/images/hero-bg.jpg')"}}>
      <div className="flex justify-center items-center">
      
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-1">
              <div className="flex justify-end pt-2">
                {fileSelected && imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-[100px] w-[100px]" />
                ) : (
                  <div className="h-[100px] w-[100px] bg-gray-200 border border-dashed flex justify-center items-center">
                    <span className="text-gray-400  text-xs">Upload Image</span>
                  </div>
                )}
              </div>
              <div className="rounded lg:px-8 lg:pt-2 space-x-7 pr-7 space-y-1  grid grid-cols-1 flex-wrap mt-5 lg:w-[700px] lg:h-[400px] border-gray-400 border-2">

              <div className="flex flex-wrap ml-6 lg:gap-[158px] ">
                <label className="block text-gray-700 text-sm mb-2  ">Upload Photo:</label>
                <input className="" type="file" required onChange={handleFileChange} />
              </div>
  
              <div className="flex flex-wrap lg:flex-nowrap lg:p lg:gap-[155px]">
                <label htmlFor="admission" className="block text-gray-700 text-sm mb-2">Admission_No</label>
                <input id="admission" type="text" name="admission" placeholder="Admission_No" required onChange={(e) => setAdmission(e.target.value)} className="shadow appearance-none border rounded w-full py-1 px-1  text-gray-700 leading-tight focus:outline-none focus:shadow-outline  lg:w-[400px] " />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap  lg:gap-[210px]">
                <label htmlFor="email" className="block text-gray-700  text-sm mb-2">Email</label>
                <input  type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} name="user_email" className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
              </div>
              <div className="flex  flex-wrap lg:flex-nowrap  lg:gap-[207px]">
                <label htmlFor="name" className="block text-gray-700 text-sm mb-2">Name</label>
                <input type="text" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
              </div>
             
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[205px]">
              <label htmlFor="father" className="block text-gray-700 text-sm mb-2">Father</label>
              <input id="father" type="text" name="father"
               placeholder="Father" required onChange={(e) => setFather(e.target.value)}
              
                className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[198px]">
              <label htmlFor="mother" className="block text-gray-700 text-sm mb-2">Mother</label>
              <input id="mother" type="text" name="mother"
               placeholder="Mother" required onChange={(e) => setMother(e.target.value)}
               className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[209px]">
              <label htmlFor="caste" className="block text-gray-700 text-sm mb-2">Caste</label>
              <input id="caste" type="text" name="caste"
               placeholder="Caste"  required onChange={(e) => setCaste(e.target.value)}
                className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[200px]">
              <label htmlFor="mobile" className="block text-gray-700 text-sm mb-2">Mobile</label>
              <input id="mobile" type="text" name="mobile"
               placeholder="Mobile" required onChange={(e) => setMobile(e.target.value)}
                className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[215px]">
              <label htmlFor="dob" className="block text-gray-700 text-sm mb-2">DOB</label>
              <input id="dob" type="date" name="dob" required
               placeholder="DOB"  onChange={(e) => setDob(e.target.value)}
               className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-[192px]">
              <label htmlFor="aadhar" className="block text-gray-700 text-smd mb-2">Aadhar</label>
              <input id="aadhar" type="text" name="aadhar"
               placeholder="Aadhar" required onChange={(e) => setAadhar(e.target.value)}
               className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap  lg:gap-[155px]">
              <label htmlFor="reference" className="block text-gray-700 text-sm mb-2">Reference_No</label>
              <input id="reference" type="text" name="reference"
               placeholder="Reference_No"  required onChange={(e) => setReference(e.target.value)}
                className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-[400px]" />
            </div>
            <div></div>
          </div>
          <div className=" text-center mt-2 ">
            <button type="submit" className="bg-white text-black   lg:w-[300px] text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" 
            >Submit</button>
          </div>
          </div>
        </form>
      
    </div>
    </div>
  );
}

export default NewRegistration;
