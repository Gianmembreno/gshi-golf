import Link from "next/link";
import { Trophy, Users, Clock } from "lucide-react";
import RecentResults from "@/components/RecentResults";

export default function Home() {

  return (
    <>
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">Gente Seria y Honesta Invitational</h1>
          <p className="text-lg md:text-xl opacity-90">Golf Tournament</p>
          <p className="text-lg md:text-xl opacity-90">Club Capestre</p>
          <p className="text-lg md:text-xl opacity-90">La Lima, Honduras</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Tournament Status Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-base md:text-lg font-semibold text-green-800 dark:text-green-300">Last Tournament</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  August 9, 2025 - Winner: GM & JP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-base md:text-lg font-semibold text-green-800 dark:text-green-300">Next Tournament</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">TBA</p>
              </div>
            </div>
          </div>
        </div>

        <RecentResults />

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <Link href="/results" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow group">
            <div className="text-center">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-600 group-hover:text-green-700 transition-colors" />
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-green-800 dark:text-green-300">Results</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden md:block">Last tournament details and complete results</p>
            </div>
          </Link>

          <Link href="/players" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow group">
            <div className="text-center">
              <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-600 group-hover:text-green-700 transition-colors" />
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-green-800 dark:text-green-300">Players</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden md:block">Current standings and player statistics</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
