"use client";

import Link from "next/link";
import { useState } from "react";
import { players } from "@/data";

interface PlayerAvatar {
  initials: string;
  className?: string;
}

const PlayerAvatar = ({ initials, className = "" }: PlayerAvatar) => (
  <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-lg shadow-lg ${className}`}>
    {initials}
  </div>
);

const StatCard = ({ value, label, accent = false }: { value: number | string; label: string; accent?: boolean }) => (
  <div className={`rounded-xl px-4 py-3 text-center ${accent ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-800'}`}>
    <div className={`text-2xl font-bold ${accent ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
      {value}
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
  </div>
);

export default function Players() {
  const [sortBy, setSortBy] = useState<string>('custom');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedPlayers = [...players].sort((a, b) => {
    let aValue: string | number, bValue: string | number;
    
    switch (sortBy) {
      case 'custom':
        // Gian Membreno first, then sort by name
        if (a.firstName === 'Gian' && a.lastName === 'Membreño') return -1;
        if (b.firstName === 'Gian' && b.lastName === 'Membreño') return 1;
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
        break;
      case 'name':
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
        break;
      case 'handicap':
        aValue = a.handicap;
        bValue = b.handicap;
        break;
      case 'tournaments':
        aValue = a.totalTournaments;
        bValue = b.totalTournaments;
        break;
      case 'wins':
        aValue = a.wins;
        bValue = b.wins;
        break;
      default:
        // Default to custom sort
        if (a.firstName === 'Gian' && a.lastName === 'Membreño') return -1;
        if (b.firstName === 'Gian' && b.lastName === 'Membreño') return 1;
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    
    // At this point, both values are guaranteed to be numbers
    const aNum = aValue as number;
    const bNum = bValue as number;
    return sortOrder === 'asc' ? aNum - bNum : bNum - aNum;
  });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortOptions = [
    { value: 'custom', label: 'Default' },
    { value: 'name', label: 'Name' },
    { value: 'handicap', label: 'Handicap' },
    { value: 'tournaments', label: 'Tournaments' },
    { value: 'wins', label: 'Wins' },
  ];

  return (
    <>
      <header className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="px-6 py-8 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            Tournament Players
          </h1>
          <p className="text-lg opacity-90 font-light">Meet the competitors</p>
        </div>
      </header>

      <main className="px-4 py-6">
        {/* Mobile-First Sorting Controls */}
        <div className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg font-medium text-sm active:scale-95 transition-transform"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>

        {/* Mobile-Optimized Player Cards */}
        <div className="space-y-4">
          {sortedPlayers.map((player, index) => {
            return (
              <Link 
                key={player.id} 
                href={`/players/${player.id}`}
                className="relative block bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 border border-gray-100 dark:border-gray-800"
              >
                {/* Ranking Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    #{index + 1}
                  </div>
                </div>

                <div className="p-6">
                  {/* Player Header */}
                  <div className="flex items-start gap-4 mb-5 pr-12">
                    <PlayerAvatar initials={player.initials} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                            {player.firstName} {player.lastName}
                          </h3>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Player #{player.id.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-semibold">
                          HCP {player.handicap}
                        </span>
                      </div>
                      
                      {player.alias && (
                        <div>
                          <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            &ldquo;{player.alias}&rdquo;
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <StatCard value={player.totalTournaments} label="Tournaments" />
                    <StatCard 
                      value={player.wins > 0 ? `🏆 ${player.wins}` : '0'} 
                      label="Wins" 
                      accent={player.wins > 0} 
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}