import { MatchReader } from './MatchReader';
import { ReportSummary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = ReportSummary.winsAnalysisWithHtmlReport('Fulham');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);