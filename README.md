# Pacman
Pacman game created with Next.js 13, React and Tailwind CSS. Unit tests were written with Jest and React Testing library

To run the game locally:
```
npm install
npm run dev
```

To run unit tests:
```
npm run test
``` 

## Assumptions made
The following assumptions were made whilst implementing the game rules:

- if user enters `PLACE` command with any invalid, or no values for, x, y, f instructions, then Pacman will be placed at origin
- assuming place command is entered in the order x,y,f
