import Image from 'next/image';
import React from 'react';

interface Iprops {
  Name: string;
  RollNumber: number;
  Course: string;
  City: string;
  PhoneNo: number;
  Day: string;
  Batch: number;
}

const StudentCard = (props: Iprops) => {
  return (
    <div className="relative bg-white border border-black rounded-xl shadow-lg overflow-hidden w-full p-6 sm:p-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/blueback.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-4 bg-white/70 backdrop-blur-md rounded-lg p-4">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-lime-700">
          Student ID Card
        </h1>

        {/* Student Image */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src="/study.png"
            alt="studentpic"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-gray-800 font-serif text-sm sm:text-base space-y-1">
          <p><strong>Name:</strong> <span className="text-blue-700">{props.Name}</span></p>
          <p><strong>Roll Number:</strong> <span className="text-blue-700">{props.RollNumber}</span></p>
          <p><strong>Course:</strong> <span className="text-blue-700">{props.Course}</span></p>
          <p><strong>City:</strong> <span className="text-blue-700">{props.City}</span></p>
          <p><strong>Phone No:</strong> <span className="text-blue-700">{props.PhoneNo}</span></p>
          <p><strong>Day:</strong> <span className="text-blue-700">{props.Day}</span></p>
          <p><strong>Batch:</strong> <span className="text-blue-700">{props.Batch}</span></p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
