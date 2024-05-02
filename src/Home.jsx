
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         <h1 className='text-[90px] text-center m-16'>Welcome</h1>
     <div className='text-center'>
      <Link to="/register">
     <button className='text-2xl bg-blue-500 p-3 rounded-full '>Click to start</button>
     </Link>
     </div>
    </div>
  )
}

export default Home