"use client";

import { Calendar, Users, Trophy } from "lucide-react";

export default function NextTournament() {
  return (
    <>

      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Next Tournament</h1>
          <p className="text-lg md:text-xl opacity-90">Join us for the next GSHI championship</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* Tournament Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8 text-center">
          <div className="flex justify-center mb-6">
            <Calendar className="w-16 h-16 md:w-20 md:h-20 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Tournament Planning in Progress
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          </p>

        </div>

        {/* What to Expect */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800 dark:text-green-300 text-center">
            What to Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Tournament Format
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Scramble format </li>
                <li>• 18 holes of competitive golf</li>
                <li>• Team-based competition</li>
                <li>• Handicap adjustments for fair play</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Team Structure
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• 2-person teams</li>
                <li>• Open to all skill levels</li>
                <li>• Team assignments by organizers</li>
              </ul>
            </div>
          </div>
        </div>


      </main>
    </>
  );
}
