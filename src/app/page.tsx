import Link from "next/link";
import { Trophy, Users, Clock, } from "lucide-react";
import RecentResults from "@/components/RecentResults";

export default function Home() {

  return (
    <>
      <header className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-800">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          {/* Trophy with enhanced styling */}
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-xl bg-yellow-400/30 rounded-full scale-150" />
            <Trophy className="relative w-20 h-20 mx-auto text-yellow-400 drop-shadow-lg" />
          </div>
          
          {/* Main heading with improved typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white">
            <span className="block">Gente Seria</span>
            <span className="block text-yellow-400">y Honesta</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-green-200 mt-2">
              Invitational
            </span>
          </h1>
          
          {/* Location with enhanced styling */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-lg md:text-xl text-green-100 border border-white/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-medium">Club Campestre</span>
            <span className="text-green-300">•</span>
            <span>La Lima, Honduras</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Tournament Status Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-white via-green-50/50 to-white dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900 rounded-2xl shadow-xl border border-green-100/50 dark:border-green-800/30 mb-8 md:mb-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/30 dark:bg-green-800/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100/40 dark:bg-yellow-800/20 rounded-full blur-2xl transform -translate-x-12 translate-y-12" />
          
          <div className="relative p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Last Tournament Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-sm scale-110" />
                      <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-lg shadow-lg">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        Last Tournament
                      </h3>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">August 9, 2025</p>
                    <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                      <Trophy className="w-3 h-3" />
                      Winners: GM & JP
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Tournament Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm scale-110" />
                      <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        Next Tournament
                      </h3>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Schedule</p>
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      TBA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RecentResults />

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {/* <Link href="/results" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow group">
            <div className="text-center">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-green-600 group-hover:text-green-700 transition-colors" />
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-green-800 dark:text-green-300">Results</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden md:block">Last tournament details and complete results</p>
            </div>
          </Link> */}

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
