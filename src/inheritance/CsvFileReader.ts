import fs from 'fs';

export abstract class CsvFileReader<T> {
  //T is a TypeScript generic
  /**
   * It can be called anything, but by convention
   * is called just T and it could be any type.
   */
  data: T[] = [];
  
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow);
  }
}