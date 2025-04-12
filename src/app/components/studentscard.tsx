// src/components/StudentCard.tsx
import Image from 'next/image';
import React from 'react'

interface Iprops {
  Name: string,
  RollNumber: number,
  Course: string,
  City: string,
  PhoneNo: number,
  Day: string,
  Batch: number,
}

const StudentCard = (props: Iprops) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-black border-solid p-28 w-80 min-h-lvh m-4 relative">
      <Image src={"/blueback.jpg"} alt={"background"} layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0  p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-serif text-lime-300">Student ID Card</h1>
        <div className='absolute top-24 left-16'>
          <Image src={"/study.png"} alt={"studentpic"} width={170} height={100} />
        </div>
        <div className='absolute top-72 left-7 space-y-2 font-serif text-slate-950 '>
          <p className="text-lg font-semibold text-gray-800">Name:<span className="font-normal text-blue-600">{props.Name}</span> </p>
          <p className="text-lg font-semibold text-gray-800">Roll Number: <span className="font-normal text-blue-600">{props.RollNumber}</span></p>
          <p className="text-lg font-semibold text-gray-800">Course:<span className="font-normal text-blue-600">{props.Course}</span> </p>
          <p className="text-lg font-semibold text-gray-800">City: <span className="font-normal text-blue-600">{props.City}</span></p>
          <p className="text-lg font-semibold text-gray-800">Phone No: <span className="font-normal text-blue-600">{props.PhoneNo}</span></p>
          <p className="text-lg font-semibold text-gray-800">Day: <span className="font-normal text-blue-600">{props.Day}</span></p>
          <p className="text-lg font-semibold text-gray-800">Batch:  <span className="font-normal text-blue-600">{props.Batch}</span></p>
        </div>
      </div>
    </div>
  )
}

export default StudentCard;
