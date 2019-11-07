import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import path from 'path';

const footballCSV = path.join(__dirname, '..', 'football.csv');

const csvFileReader = new CsvFileReader(footballCSV);
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = matchReader.matches.reduce((wins: number, [,homeTeam, awayTeam,,, matchOutcome]: (Date | string | number)[]): number => {
  if (
    (typeof homeTeam === 'string' && homeTeam.includes('Man United') && MatchResult.HomeWin === matchOutcome) ||
    (typeof awayTeam === 'string' && awayTeam.includes('Man United') && matchOutcome === MatchResult.AwayWin)
  ) {
    wins += 1;
  }
  return wins;
}, 0);

console.log({manUnitedWins});