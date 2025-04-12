import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 bg-gradient-to-r from-blue-100 to-purple-200">
  <section className="text-center max-w-xl">
    <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
      Welcome to the Student Card Portal
    </h1>
    <p className="text-base sm:text-lg text-gray-700 mb-6">
      Click below to view student ID cards.
    </p>
    <Link href="/card">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all">
        View Cards
      </button>
    </Link>
  </section>
</main>

  )
}

export default HomePage




