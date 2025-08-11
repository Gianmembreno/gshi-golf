export interface Team {
  id: string;
  player1Id: string;
  player2Id: string;
  teamName: string;
  color: string;
}

export interface TournamentResult {
  teamId: string;
  position: number;
  score: number;
  holesCompleted: number;
  status: 'F' | 'Hole 9' | 'Hole 17' | string;
  currentHole?: number;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  type: 'scramble' | 'individual' | 'best-ball';
  teams: Team[];
  results: TournamentResult[];
  isCompleted: boolean;
}

export const teams: Team[] = [
  {
    id: "team1",
    player1Id: "gm",
    player2Id: "jp",
    teamName: "Membreno / Egas",
    color: "green"
  },
  {
    id: "team2",
    player1Id: "fm",
    player2Id: "tf",
    teamName: "Fonseca / Monterroso",
    color: "blue"
  },
  {
    id: "team3",
    player1Id: "k",
    player2Id: "a",
    teamName: "Kattan / Antunez",
    color: "purple"
  },
  {
    id: "team4",
    player1Id: "mr",
    player2Id: "er",
    teamName: "Reynaud / Reyes",
    color: "gray"
  },
  {
    id: "team5",
    player1Id: "c",
    player2Id: "af",
    teamName: "Canahuati / Fasquelle",
    color: "orange"
  }
];

// All tournaments - ordered from newest to oldest
export const tournaments: Tournament[] = [
  {
    id: "tournament-2025-08",
    name: "Gente Seria y Honesta Invitational - August 2025",
    date: "2025-08-09",
    location: "Club Campestre La Lima",
    type: "scramble",
    teams: teams,
    results: [
      {
        teamId: "team1",
        position: 1,
        score: -6,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team2",
        position: 2,
        score: -2,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team3",
        position: 3,
        score: -1,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team4",
        position: 4,
        score: 2,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team5",
        position: 5,
        score: 4,
        holesCompleted: 18,
        status: "F"
      }
    ],
    isCompleted: true
  },
  {
    id: "tournament-2024-12",
    name: "December 2024 Championship",
    date: "2024-12-15",
    location: "Club Campestre La Lima",
    type: "scramble",
    teams: teams,
    results: [
      {
        teamId: "team3",
        position: 1,
        score: -4,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team1",
        position: 2,
        score: -2,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team2",
        position: 3,
        score: 1,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team4",
        position: 4,
        score: 3,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team5",
        position: 5,
        score: 5,
        holesCompleted: 18,
        status: "F"
      }
    ],
    isCompleted: true
  },
  {
    id: "tournament-2024-09",
    name: "September 2024 Classic",
    date: "2024-09-15",
    location: "Yojoa Country Club",
    type: "scramble",
    teams: teams,
    results: [
      {
        teamId: "team2",
        position: 1,
        score: -5,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team1",
        position: 2,
        score: -3,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team5",
        position: 3,
        score: -1,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team3",
        position: 4,
        score: 2,
        holesCompleted: 18,
        status: "F"
      },
      {
        teamId: "team4",
        position: 5,
        score: 4,
        holesCompleted: 18,
        status: "F"
      }
    ],
    isCompleted: true
  }
];

// Most recent tournament (first in the array)
export const lastTournament: Tournament = tournaments[0];

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getResultByTeamId = (teamId: string): TournamentResult | undefined => {
  return lastTournament.results.find(result => result.teamId === teamId);
};

// Get past tournaments (excluding the most recent one)
export const getPastTournaments = (): Tournament[] => {
  return tournaments.slice(1);
};

// Get all tournaments
export const getAllTournaments = (): Tournament[] => {
  return tournaments;
};

// Get tournament by ID
export const getTournamentById = (id: string): Tournament | undefined => {
  return tournaments.find(tournament => tournament.id === id);
};
