import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()  
        if (!name || !email || !password) {
            alert("Please fill in all fields");
            return;
        }
        axios.post('http://localhost:5000/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login',{state:{id:email}})
        })
        .catch(err => {
            console.error("Registration failed:", err);
            alert("Registration failed. Please try again later.");
        });
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className=" p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>  
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                 onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                 onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Register</button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">Already have an account? <a href="/login" className="text-blue-500">Log In</a></p>
      
    </div>
</div>
  )
}

export default Signup