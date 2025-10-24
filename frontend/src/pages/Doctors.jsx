import React, { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const {doctors}=useContext(AppContext);
  const navigate = useNavigate();
  const[filterDoc,setFilterDoc]=useState([]);

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className=' flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality==="General physician" ? navigate("/doctors"): navigate("/doctors/General physician")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='General physician' ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
          <p onClick={()=> speciality==="Gynecologist" ? navigate("/doctors"): navigate("/doctors/Gynecologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Gynecologist' ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality==="Dermatologist" ? navigate("/doctors"): navigate("/doctors/Dermatologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Dermatologist' ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality==="Pediatricians" ? navigate("/doctors"): navigate("/doctors/Pediatricians")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Pediatricians' ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality==="Neurologist" ? navigate("/doctors"): navigate("/doctors/Neurologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Neurologist' ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=> speciality==="Gastroenterologist" ? navigate("/doctors"): navigate("/doctors/Gastroenterologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==='Gastroenterologist' ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
          {/* so eg: if we click on general physician button it will give only those doctors ..if we click on that button again, we get all doctors*/}
          {/* custom css in backticks is ... if the button selected is general physician then it adds black color text and bg as indigo..to show that the button is selected...else nothing gets added */}
        </div>
        <div className='w-full grid gap-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500" key={index}>
                <img className="bg-blue-50 " src={item.image} alt=""/>
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-600'>{item.speciality}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Doctors;