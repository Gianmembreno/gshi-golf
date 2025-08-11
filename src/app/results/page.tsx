"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp, Trophy, Calendar } from "lucide-react";
import { useState } from "react";
import { lastTournament, getPastTournaments, getPlayerById, getTeamById } from "@/data";

export default function Results() {
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null);
  
  // Get past tournaments from centralized data
  const pastTournaments = getPastTournaments();

  // Get winner information for recent tournament
  const winnerResult = lastTournament.results.find(result => result.position === 1);
  const winnerTeam = winnerResult ? getTeamById(winnerResult.teamId) : null;
  const winnerPlayer1 = winnerTeam ? getPlayerById(winnerTeam.player1Id) : null;
  const winnerPlayer2 = winnerTeam ? getPlayerById(winnerTeam.player2Id) : null;

  const toggleTournament = (tournamentId: string) => {
    setExpandedTournament(expandedTournament === tournamentId ? null : tournamentId);
  };

  return (
    <>

      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">Tournament Results</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90">Complete tournament history and scores</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* Recent Tournament */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-green-800 dark:text-green-300 flex items-center gap-2">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            Recent Tournament
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {lastTournament.name}
            </h3>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-green-600 dark:text-green-400 font-medium">
                <span className="block sm:inline">Winner: {winnerPlayer1?.firstName} {winnerPlayer1?.lastName} & {winnerPlayer2?.firstName} {winnerPlayer2?.lastName}</span>
                <span className="block sm:inline sm:ml-2">Score: {winnerResult?.score}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="block sm:inline">{new Date(lastTournament.date).toLocaleDateString()}</span>
                <span className="block sm:inline sm:ml-1">• Club Campestre La Lima</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Teams & Scores:</h4>
            {lastTournament.results.map((result) => {
              const team = getTeamById(result.teamId);
              const player1 = team ? getPlayerById(team.player1Id) : null;
              const player2 = team ? getPlayerById(team.player2Id) : null;
              
              return (
                <div key={result.teamId} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg font-bold text-gray-500 w-6 text-center flex-shrink-0 mt-0.5">
                        {result.position}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                          {player1?.firstName} {player1?.lastName} & {player2?.firstName} {player2?.lastName}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                          <Link 
                            href={`/results/scorecard/${player1?.id}`}
                            className="text-sm text-green-600 dark:text-green-400 hover:underline"
                          >
                            View Scorecard
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between sm:justify-end items-center">
                      <span className="text-sm text-gray-500 sm:hidden">Score:</span>
                      <span className={`text-lg font-bold ${result.score < 0 ? "text-red-600" : "text-green-600"}`}>
                        {result.score > 0 ? "+" : ""}{result.score}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Past Tournaments */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-green-800 dark:text-green-300 flex items-center gap-2">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            Past Tournaments
          </h2>
          
          <div className="space-y-4">
            {pastTournaments.map((tournament) => (
              <div key={tournament.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => toggleTournament(tournament.id)}
                  className="w-full flex justify-between items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {tournament.name}
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Winner: {(() => {
                        const winnerResult = tournament.results.find(result => result.position === 1);
                        const winnerTeam = winnerResult ? getTeamById(winnerResult.teamId) : null;
                        const winnerPlayer1 = winnerTeam ? getPlayerById(winnerTeam.player1Id) : null;
                        const winnerPlayer2 = winnerTeam ? getPlayerById(winnerTeam.player2Id) : null;
                        return winnerPlayer1 && winnerPlayer2 
                          ? `${winnerPlayer1.firstName} ${winnerPlayer1.lastName} & ${winnerPlayer2.firstName} ${winnerPlayer2.lastName} - ${winnerResult?.score}`
                          : 'TBD';
                      })()}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {new Date(tournament.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {expandedTournament === tournament.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {expandedTournament === tournament.id && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="mt-4 space-y-2">
                      {tournament.results.map((result) => {
                        const team = getTeamById(result.teamId);
                        const player1 = team ? getPlayerById(team.player1Id) : null;
                        const player2 = team ? getPlayerById(team.player2Id) : null;
                        
                        return (
                          <div key={result.teamId} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                            <div className="flex items-center gap-3">
                              <span className="text-base font-bold text-gray-500 w-6 text-center">
                                {result.position}
                              </span>
                              <p className="font-medium text-gray-900 dark:text-gray-100">
                                {player1?.firstName} {player1?.lastName} & {player2?.firstName} {player2?.lastName}
                              </p>
                            </div>
                            <span className={`font-bold ${result.score < 0 ? "text-red-600" : "text-green-600"}`}>
                              {result.score > 0 ? "+" : ""}{result.score}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
