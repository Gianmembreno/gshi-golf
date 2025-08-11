"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPlayerById, teams } from "@/data";
import { use } from "react";

interface Hole {
  hole: number;
  par: number;
  score: number;
  scoreToPar: number;
}

interface ScorecardPageProps {
  params: Promise<{
    playerId: string;
  }>;
}

// Team scorecard data for Gian and Juanpa - based on actual round
const generateMockTeamScorecard = (playerId: string) => {
  const player = getPlayerById(playerId);
  if (!player) return null;

  // Find the team this player belongs to
  const playerTeam = teams.find(team => 
    team.player1Id === player.id || team.player2Id === player.id
  );
  
  if (!playerTeam) return null;

  const teammate = getPlayerById(
    playerTeam.player1Id === player.id ? playerTeam.player2Id : playerTeam.player1Id
  );

  // Actual scores from the scorecard - Club Campestre La Lima (70.7/115)
  const par = [4, 4, 4, 3, 5, 5, 3, 4, 4, 4, 3, 4, 5, 3, 4, 4, 4, 5];
  const teamHandicap = 5; // Team A handicap as shown in scorecard
  
  // Actual team scores from the scorecard image
  const scores = [4, 5, 4, 4, 4, 4, 3, 4, 5, 4, 3, 4, 5, 3, 4, 5, 5, 5];

  const totalPar = par.reduce((sum, p) => sum + p, 0);
  const totalScore = scores.reduce((sum, s) => sum + s, 0);
  const scoreToPar = totalScore - totalPar;

  return {
    player,
    teammate,
    team: playerTeam,
    teamHandicap,
    holes: par.map((holePar, index) => ({
      hole: index + 1,
      par: holePar,
      score: scores[index],
      scoreToPar: scores[index] - holePar
    })),
    totalPar,
    totalScore,
    scoreToPar
  };
};

export default function ScorecardPage({ params }: ScorecardPageProps) {
  const { playerId } = use(params);
  const scorecard = generateMockTeamScorecard(playerId);

  if (!scorecard || !scorecard.teammate) {
    return (
      <div className="font-sans min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Team Not Found</h1>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Link>
        </div>
      </div>
    );
  }

  const frontNine = scorecard.holes.slice(0, 9);
  const backNine = scorecard.holes.slice(9, 18);
  
  const frontNineScore = frontNine.reduce((sum: number, hole: Hole) => sum + hole.score, 0);
  const backNineScore = backNine.reduce((sum: number, hole: Hole) => sum + hole.score, 0);
  const frontNinePar = frontNine.reduce((sum: number, hole: Hole) => sum + hole.par, 0);
  const backNinePar = backNine.reduce((sum: number, hole: Hole) => sum + hole.par, 0);

  return (
    <>

      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            SCORECARD
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-2">
            August 09, 2025
          </p>
          <p className="text-sm md:text-base opacity-80 mb-2">
            Club Campestre La Lima 🏌️ 70.7 / 115
          </p>
          <p className="text-base md:text-lg opacity-90 mb-2">
            {scorecard.player.firstName} {scorecard.player.lastName} & {scorecard.teammate.firstName} {scorecard.teammate.lastName}
          </p>
          <p className="text-sm md:text-base opacity-80">
            Team Handicap: {scorecard.teamHandicap} • Net: 70
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Score Summary */}
          <div className="bg-green-800 text-white p-4 md:p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm opacity-80">Total Score</p>
                <p className="text-2xl md:text-3xl font-bold">{scorecard.totalScore}</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Par</p>
                <p className="text-2xl md:text-3xl font-bold">{scorecard.totalPar}</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Score to Par</p>
                <p className={`text-2xl md:text-3xl font-bold ${scorecard.scoreToPar < 0 ? "text-red-300" : scorecard.scoreToPar > 0 ? "text-yellow-300" : "text-green-300"}`}>
                  {scorecard.scoreToPar > 0 ? "+" : ""}{scorecard.scoreToPar}
                </p>
              </div>
            </div>
          </div>

          {/* Front Nine */}
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Front Nine</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="p-2 text-left">Hole</th>
                    {frontNine.map((hole: Hole) => (
                      <th key={hole.hole} className="p-2 text-center">{hole.hole}</th>
                    ))}
                    <th className="p-2 text-center font-bold">OUT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-2 font-medium">Par</td>
                    {frontNine.map((hole: Hole) => (
                      <td key={hole.hole} className="p-2 text-center">{hole.par}</td>
                    ))}
                    <td className="p-2 text-center font-bold">{frontNinePar}</td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 bg-green-50 dark:bg-green-900">
                    <td className="p-2 font-medium">Team Score</td>
                    {frontNine.map((hole: Hole) => (
                      <td key={hole.hole} className={`p-2 text-center font-bold ${
                        hole.scoreToPar < 0 ? "text-red-600" : 
                        hole.scoreToPar === 0 ? "text-green-600" : 
                        "text-gray-900 dark:text-gray-100"
                      }`}>
                        {hole.score}
                      </td>
                    ))}
                    <td className="p-2 text-center font-bold">{frontNineScore}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Back Nine */}
          <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Back Nine</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="p-2 text-left">Hole</th>
                    {backNine.map((hole: Hole) => (
                      <th key={hole.hole} className="p-2 text-center">{hole.hole}</th>
                    ))}
                    <th className="p-2 text-center font-bold">IN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-2 font-medium">Par</td>
                    {backNine.map((hole: Hole) => (
                      <td key={hole.hole} className="p-2 text-center">{hole.par}</td>
                    ))}
                    <td className="p-2 text-center font-bold">{backNinePar}</td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 bg-green-50 dark:bg-green-900">
                    <td className="p-2 font-medium">Team Score</td>
                    {backNine.map((hole: Hole) => (
                      <td key={hole.hole} className={`p-2 text-center font-bold ${
                        hole.scoreToPar < 0 ? "text-red-600" : 
                        hole.scoreToPar === 0 ? "text-green-600" : 
                        "text-gray-900 dark:text-gray-100"
                      }`}>
                        {hole.score}
                      </td>
                    ))}
                    <td className="p-2 text-center font-bold">{backNineScore}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Summary */}
          <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Front 9</p>
                <p className="text-lg font-bold">{frontNineScore}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Back 9</p>
                <p className="text-lg font-bold">{backNineScore}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-lg font-bold">{scorecard.totalScore}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">vs Par</p>
                <p className={`text-lg font-bold ${scorecard.scoreToPar < 0 ? "text-red-600" : scorecard.scoreToPar > 0 ? "text-yellow-600" : "text-green-600"}`}>
                  {scorecard.scoreToPar > 0 ? "+" : ""}{scorecard.scoreToPar}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-600">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Round Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Putts</p>
                <p className="text-2xl font-bold">26</p>
                <p className="text-xs text-gray-500">Front: 11 | Back: 15</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Driving</p>
                <p className="text-2xl font-bold text-green-600">100%</p>
                <p className="text-xs text-gray-500">7/7 Fairways</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">GIR%</p>
                <p className="text-2xl font-bold text-yellow-600">39%</p>
                <p className="text-xs text-gray-500">Front: 22% | Back: 56%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Penalties</p>
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-gray-500">Clean round!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Link>
        </div>
      </main>
    </>
  );
}
