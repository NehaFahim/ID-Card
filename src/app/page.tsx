import React from 'react'
import StudentCard from './cards/page'

const details = () => {
  return (
    <div className="bg-slate-200 p-2 border border-gray-300 rounded-lg shadow-md flex items-center justify-center m-4 ">
      <div className=' mr-12'>
        <StudentCard Name='Neha' RollNumber={12345} Course='Artificial Intelligence'  City='Karachi' PhoneNo={1234567890}  Day='Monday' Batch={1}></StudentCard>
      </div>

      <div className=' mr-12'>
        <StudentCard Name='Hiba' RollNumber={12326}  Course='Artificial Intelligence'  City='Karachi' PhoneNo={1234567890}   Day='Tuesday' Batch={1} ></StudentCard>
      </div>

      <div className='10'>
        <StudentCard Name='Aiza' RollNumber={12357}  Course='Artificial Intelligence'  City='Karachi' PhoneNo={1234567890} Day='Wednesday' Batch={1}></StudentCard>
      </div>
    </div>
  )
}

export default details







