interface TournamentResult {
  position: number;
  teamName: string;
  playerInitials: [string, string];
  playerNames: [string, string];
  score: number;
  color: string;
  netScore: number;
}

export default function RecentResults() {
  // Hardcoded tournament results for homepage
  const tournamentResults: TournamentResult[] = [
    {
      position: 1,
      teamName: "Membreno / Egas",
      playerInitials: ["GM", "JP"],
      playerNames: ["Gian", "Juanpa"],
      score: -6,
      color: "green",
      netScore: 3
    },
    {
      position: 2,
      teamName: "Fonseca / Monterroso",
      playerInitials: ["FM", "TF"],
      playerNames: ["Fabian", "Tomas"],
      score: -4,
      color: "blue",
      netScore: 7
    },
    {
      position: 3,
      teamName: "Kattan / Antunez",
      playerInitials: ["K", "A"],
      playerNames: ["Kattan", "Antunez"],
      score: -2,
      color: "purple",
      netScore: 4
    },
    {
      position: 4,
      teamName: "Reynaud / Reyes",
      playerInitials: ["MR", "ER"],
      playerNames: ["Marcel", "Ernest"],
      score: -1,
      color: "gray",
      netScore: 5
    },
    {
      position: 5,
      teamName: "Canahuati / Fasquelle",
      playerInitials: ["FC", "MF"],
      playerNames: ["Canahuati", "Fasquelle"],
      score: 2,
      color: "orange",
      netScore: 9
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      green: "bg-green-600",
      blue: "bg-blue-600", 
      purple: "bg-purple-600",
      gray: "bg-gray-600",
      orange: "bg-orange-600"
    };
    return colorMap[color] || "bg-gray-600";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-green-800 dark:text-green-300">
        Recent Tournament Results
      </h2>
      <div className="space-y-4">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 className="text-lg md:text-xl font-semibold text-green-800 dark:text-green-300 mb-3 md:mb-4">
            Final Leaderboard - Top 5 Teams
          </h3>
          <div className="space-y-2 md:space-y-3">
            {tournamentResults.map((result) => (
              <div 
                key={result.position} 
                className={`flex justify-between items-center p-2 md:p-3 rounded-lg ${
                  result.position === 1 
                    ? "bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400" 
                    : "bg-gray-50 dark:bg-gray-700"
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <span className={`text-lg md:text-xl font-bold w-8 text-center ${result.position === 1 ? "text-yellow-600" : "text-gray-500"}`}>
                    {result.position}
                  </span>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className={`w-6 h-6 md:w-8 md:h-8 ${getColorClass(result.color)} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                      {result.playerInitials[0]}
                    </div>
                    <div className={`w-6 h-6 md:w-8 md:h-8 ${getColorClass(result.color)} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                      {result.playerInitials[1]}
                    </div>
                  </div>
                  <div className="ml-1 md:ml-0">
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-gray-100">
                      {result.position === 1 ? "1st" : result.position === 2 ? "2nd" : result.position === 3 ? "3rd" : `${result.position}th`} - {result.teamName}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      (+{result.netScore}) thru 18
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className={`text-base md:text-lg font-bold ${result.score < 0 ? "text-red-600" : result.score > 0 ? "text-green-600" : "text-gray-600"}`}>
                    {result.score > 0 ? "+" : ""}{result.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}