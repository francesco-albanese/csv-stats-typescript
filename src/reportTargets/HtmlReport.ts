import { OutputTarget } from './../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <main>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </main>`;

    fs.writeFileSync('report.html', html);
  }
}