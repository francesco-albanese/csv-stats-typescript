# Aggregate stats with TypeScript
This project will extract statistics from a CSV file using TypeScript.

## Run project

`npm run start` will run typescript compiler in watch mode and will run nodemon at the same time using `concurrently`.

Nodemon will restart the service at every file change.

## Inheritance vs Composition
`CsvFileReader` and `MatchReader` have been refactored in order to follow two different approaches: *Inheritance* and *Composition*.

*Inheritance* is characterized by an `is a` relationship between two classes.
*Composition* is characterized by an `has a` relationship between two classes.