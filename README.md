# LoanStreet Frontend Challenge

## Overview

LoanStreet has recently taken on some new credit union clients! These credit unions need a way to quickly see their deals portfolio. Your task is to add a few pieces of functionality to the existing frontend. Please read the instructions carefully and allocate six hours to complete these prompts.

_*DO NOT SPEND MORE THAN SIX HOURS ON THIS PROJECT.*_

## Project Setup

1. Clone or Fork the repo
2. You need yarn installed (For Mac, `brew install yarn`).
3. To install run `yarn`
4. To start the local frontend server run the command `yarn start` in the root directory of the repository.
5. _For Bonus Section:_ To access the mock API, first run `yarn global add json-server`. Then, run `yarn server`.

## Your Tasks

- Add validation so that a deal isn't created unless all fields are entered. Display errors when a field is missing or contains bad data according to the UX form fields design.

- Add ability to remove deals from the `DealsTable` (interface up to you).

- Add ability to publish a deal from the `DealsTable` (interface up to you).

- Add ability to sort deal rows in ascending or descending order by clicking the header cell of the different fields by which you wish to order. You can find the `SortIcon` is in the `assets` folder.

## Bonus

If you have time left over, feel free to attempt any of the challenges below that you feel are best suited to your interests and skills!

- Style the `DealsTable` according to the new Data Table component design that UX has given you. 

- Connect to the mock json server using the HTTP client of your choice so that any data that you manipulate saves into the `db.json` file.

- Write tests for any of the requirements that you implement.

## Delivery

Please push your code to the branch provided to you by your recruiter.

_*Please contact careers@loan-street.com if you have not yet received a branch.*_

## Discussion

This project will assist fellow engineers in getting to know you and your work. Please do not hesitate to ask questions and request clarifications.

The engineering team will debrief and review this code with you as part of the interview process. Be prepared to answer questions such as:

- `NewDealForm` will rerender some of its children unnecessarily. Why? What is the generally recommended solution?

- In the real world, how would you hook this frontend to a backend (vs the mock API). How would you load initial data that the credit union sends us?

- How would you think about scaling the UI components you built and used for these features to future parts of the app?

- What other suggestions can you make to improve the quality of the code?
