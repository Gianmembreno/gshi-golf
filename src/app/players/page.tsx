import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { players } from "@/data";

export default function Players() {

  return (
    <>

      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Tournament Players</h1>
          <p className="text-lg md:text-xl opacity-90">Meet the competitors</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 sm:py-6 md:py-12">
        {/* Mobile-first card layout for small screens, table for larger screens */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Mobile Card Layout */}
          <div className="block sm:hidden">
            <div className="p-4 bg-green-600">
              <h3 className="text-white font-medium uppercase tracking-wider text-center">
                Tournament Players
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {players.map((player) => {
                return (
                  <div key={player.id} className="p-4">
                    <Link 
                      href={`/players/${player.id}`}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 -m-2 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white text-lg">
                          {player.firstName} {player.lastName}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Handicap: {player.handicap}
                        </span>
                      </div>
                      {player.alias && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          "{player.alias}"
                        </p>
                      )}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>Tournaments: {player.totalTournaments}</span>
                        <span>Wins: {player.wins}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden sm:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-600 hover:bg-green-600">
                  <TableHead className="text-white font-medium uppercase tracking-wider">
                    Player Name
                  </TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wider">
                    Alias
                  </TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wider">
                    Handicap
                  </TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wider">
                    Tournaments Played
                  </TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wider">
                    Wins
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {players.map((player) => {
                  return (
                    <TableRow key={player.id} className="cursor-pointer">
                      <TableCell className="font-medium text-gray-900 dark:text-white">
                        <Link 
                          href={`/players/${player.id}`}
                          className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
                          {player.firstName} {player.lastName}
                        </Link>
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-300">
                        {player.alias || '-'}
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-300">
                        {player.handicap}
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-300">
                        {player.totalTournaments}
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-300">
                        {player.wins}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}