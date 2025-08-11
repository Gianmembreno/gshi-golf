import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPlayerById, players, lastTournament, getResultByTeamId, teams } from "@/data";
import RadarChart from "@/components/RadarChart";

export default function PlayerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const player = getPlayerById(id);

  if (!player) {
    notFound();
  }

  // Find player's team and tournament result
  const playerTeam = teams.find(team => 
    team.player1Id === player.id || team.player2Id === player.id
  );
  const teamResult = playerTeam ? getResultByTeamId(playerTeam.id) : null;

  // Mock past tournament data
  const pastTournaments = [

  ];

  // Use radar chart stats from player data
  const radarStats = player.radarStats;

  return (
    <>

      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <Link 
            href="/players"
            className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Players
          </Link>
          
          {/* Player Header Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {player.firstName} {player.lastName}
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl opacity-90 mb-2">
                  Alias: "{player.alias || 'N/A'}"
                </p>
                <p className="text-base md:text-lg opacity-80">
                  Current Handicap: <span className="font-bold text-green-300">{player.handicap}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 sm:py-6 md:py-12">
        {/* Radar Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-green-800 dark:text-green-300">
            Player Performance Stats
          </h2>
          
          <div className="flex justify-center">
            <RadarChart data={radarStats} title="Player Performance" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Career Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-800 dark:text-green-300">
              Career Achievements
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-2 sm:p-3  rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">
                  Tournament Wins: <strong>{player.wins}</strong>
                </span>
              </div>
              {player.superlatives && player.superlatives.length > 0 && (
                <>
                  {player.superlatives.map((superlative, index) => (
                    <div key={index} className="p-2 sm:p-3  rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>{superlative}</strong>
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}