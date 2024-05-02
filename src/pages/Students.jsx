import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

function Students() {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/registrations');
        setRegisters(response.data); // Set the list of students from the API response
      } catch (error) {
        console.log('Error fetching students:', error);
      }
    };

    fetchStudents(); // Fetch students when the component mounts
  }, []);

  const toggleDetails = (index) => {
    // Create a new copy of the registers array with toggled details visibility
    const updatedRegisters = [...registers];
    updatedRegisters[index].showDetails = !updatedRegisters[index].showDetails;
    setRegisters(updatedRegisters);
  };

  return (
    <div>
      <h1 className='font-serif font-bold text-xl text-center'>Students Details</h1>
      <div>
        {registers.map((user, index) => (
          <div key={user.id}>
            <div
              className='flex items-center justify-between border-black border-2 h-12 p-2 w-[300px] font-bold mb-4 cursor-pointer hover:bg-slate-400'
              onClick={() => toggleDetails(index)}
            >
              <strong>{user.admission}</strong>
              <span>
                {user.showDetails ? <FaAngleDown className='ml-2' /> : <FaAngleRight className='ml-2' />}
              </span>
            </div>
            {user.showDetails && ( // Show details only if showDetails is true
              <div className='p-2'>
                  {user.imagePreview && (
                  <div>
                    <img src={user.imagePreview} alt={`Image of ${user.name}`} className='h-[100px] w-[100px]' />
                  </div>
                )}
                <p>Admission Number: {user.admission}</p>
                <p>Email: {user.email}</p>
                <p>Fathers Name: {user.father}</p>
                <p>Mothers Name: {user.mother}</p>
                <p>Caste: {user.caste}</p>
                <p>Mobile Number: {user.mobile}</p>
                <p>Date of Birth: {user.dob}</p>
                <p>Aadhar Number: {user.aadhar}</p>
                <p>Reference Number: {user.reference}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
