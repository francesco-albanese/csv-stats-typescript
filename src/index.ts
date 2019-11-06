import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const matches = new CsvFileReader('./football.csv');
matches.read();

const manUnitedWins = matches.data.reduce((wins: number, [,homeTeam, awayTeam,,, matchOutcome]): number => {
  if (
    (homeTeam && homeTeam.includes('Man United') && MatchResult.HomeWin === matchOutcome) ||
    (awayTeam && awayTeam.includes('Man United') && matchOutcome === MatchResult.AwayWin)
  ) {
    wins += 1;
  }
  return wins;
}, 0);

console.log({manUnitedWins});