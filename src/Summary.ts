import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchData } from './MatchData'; 

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class ReportSummary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  static winsAnalysisWithHtmlReport(teamName: string): ReportSummary {
    return new ReportSummary(
      new WinsAnalysis(teamName),
      new HtmlReport()
    );
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}