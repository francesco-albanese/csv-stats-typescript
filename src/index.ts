import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ReportSummary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new ReportSummary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);