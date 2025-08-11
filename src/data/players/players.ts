export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  alias?: string;
  initials: string;
  handicap: number;
  email?: string;
  phone?: string;
  totalTournaments: number;
  wins: number;
  bestScore?: number;
  superlatives?: string[];
  skills?: string[];
  radarStats: {
    driving: number;
    irons: number;
    chipping: number;
    putting: number;
    mental: number;
    drinking: number;
  };
}

export const players: Player[] = [
  {
    id: "gm",
    firstName: "Gian",
    lastName: "Membreño",
    alias: "Tiger",
    initials: "GM",
    handicap: 26,
    email: "gian@example.com",
    totalTournaments: 1,
    wins: 1,
    bestScore: -6,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 30,
      irons: 70,
      chipping: 45,
      putting: 90,
      mental: 10,
      drinking: 100
    }
  },
  {
    id: "jp",
    firstName: "Juanpa",
    lastName: "Egas",
    alias: "JP",
    initials: "JP",
    handicap: 15,
    email: "juanpa@example.com",
    totalTournaments: 1,
    wins: 1,
    bestScore: -4,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "f",
    firstName: "Teto",
    lastName: "Fonseca",
    alias: "Teto",
    initials: "F",
    handicap: 26,
    email: "teto@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: -4,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "m",
    firstName: "Fabrizio",
    lastName: "Monterroso",
    alias: "Fabri",
    initials: "M",
    handicap: 22,
    email: "fabrizio@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: -3,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "c",
    firstName: "Dito",
    lastName: "Canahuati",
    alias: "Dito",
    initials: "C",
    handicap: 11,
    email: "dito@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: 1,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "mf",
    firstName: "Matteo",
    lastName: "Fasquelle",
    alias: "Johnny Sins",
    initials: "F",
    handicap: 24,
    email: "matteo@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: 0,
    superlatives: ["Most beers drank in tournament: 11 beers"],
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "er",
    firstName: "Ernesto",
    lastName: "Reyes",
    alias: "Nex",
    initials: "ER",
    handicap: 18,
    email: "ernesto@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: 0,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  },
  {
    id: "mr",
    firstName: "Marcel",
    lastName: "Reynaud",
    alias: "Marcel",
    initials: "MR",
    handicap: 9,
    email: "marcel@example.com",
    totalTournaments: 1,
    wins: 0,
    bestScore: -1,
    skills: ["Footwedge Master", "Pussy Putter"],
    radarStats: {
      driving: 0,
      irons: 0,
      chipping: 0,
      putting: 0,
      mental: 0,
      drinking: 0
    }
  }
];

export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

export const getPlayersByIds = (ids: string[]): Player[] => {
  return ids.map(id => getPlayerById(id)).filter(Boolean) as Player[];
};
