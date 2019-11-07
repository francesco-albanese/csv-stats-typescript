import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    const wins = this.getWins(matches);

    return `${this.teamName} won ${wins} matches.`;
  }

  getWins = (matches: MatchData[]): number => {
    return matches.reduce((wins: number, [,homeTeam, awayTeam,,, matchOutcome]): number => {
      if (
        (homeTeam && homeTeam.includes(this.teamName) && MatchResult.HomeWin === matchOutcome) ||
        (awayTeam && awayTeam.includes(this.teamName) && matchOutcome === MatchResult.AwayWin)
      ) {
        wins += 1;
      }
      return wins;
    }, 0);
  }
}