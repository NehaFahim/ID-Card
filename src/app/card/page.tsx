import React from 'react';
import StudentCard from '../components/studentscard';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StudentCard
          Name="Neha"
          RollNumber={12345}
          Course="Artificial Intelligence"
          City="Karachi"
          PhoneNo={1234567890}
          Day="Monday"
          Batch={1}
        />
        <StudentCard
          Name="Hiba"
          RollNumber={12326}
          Course="Artificial Intelligence"
          City="Karachi"
          PhoneNo={1234567890}
          Day="Tuesday"
          Batch={1}
        />
        <StudentCard
          Name="Aiza"
          RollNumber={12357}
          Course="Artificial Intelligence"
          City="Karachi"
          PhoneNo={1234567890}
          Day="Wednesday"
          Batch={1}
        />
      </div>
    </div>
  );
}

