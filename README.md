## Live link
https://eloquent-allen-9611ae.netlify.app

## Dette prosjektet bruker

[Create React App](https://github.com/facebook/create-react-app) for å få de første filene og React strukturen\
[React Router](https://reactrouter.com/web/guides/quick-start) for å kunne navigere de forskjellige sidene\
[Styled Components](https://styled-components.com/) for styling\
[Netlify](https://netlify.com/) for deployment


## Annen kode jeg har brukt

[Code Pen - Google button](https://codepen.io/mupkoo/pen/YgddgB)

## Metode

Jeg forsøkte først å gjøre markup og styling med kun HTML og CSS, da jeg er vant med det og det føltes
som en god måte å få oversikt når jeg begynte med React. 

Jeg delte opp de delene som skulle gjenbrukes over de to sidene, og la til props for å kunne endre de
for å få de til å passe.

Jeg brukte Flexbox for å dele opp sidene i to kolonner, og Grid for å dele opp høyre kolonne med 2fr
for grafikken og 1fr for underteksten.

Selvom det kanskje er andre metoder jeg er mer vant med ønsket jeg å jobbe med React ferdighetene mine,
så jeg bestemte meg for å bruke det. Det samme gjelder Styled Components, React Router og Netlify.

## Utfordringer

Dette var første gangen jeg brukte både Styled Components og React Router, men jeg tok det som en
utfordring og lærte mye i prosessen. Jeg er sikker på at det finnes bedre måter å bruke Styled 
Components på, men dette er noe jeg kommer til å bli bedre på over tid. React Router var relativt
greit i development, men når det kom til production med Netlify bydde det på flere problemer. Foreløpig
når man besøker siden går den direkte til login, via en redirect fra root, men når jeg prøver å skifte til
signup får jeg opp en 404. Dette er et problem jeg jobbet lenge med å fikse (som kan sees i commit historien),
men som jeg ikke klarte å fikse til slutt. Ved å kjøre koden selv kan dere se at begge sidene er 
velfungerende i development.

Jeg var litt usikker på hvordan jeg skulle bruke grafikken i høyre kolonne, så får ordens skyld er
de screenshots tatt fra design fila.

## Endringer

ACO-filen virket ikke riktig, så jeg brukte Figma for å finne ut hva de egentlig fargene som ble 
brukt var. ACO fargene var litt for mørke, så det så ikke like bra ut.

## Forbedringer

Koden kan være mer oversiktelig, jeg kan lage flere komponenter med egen styling, og dermed ikke 
trenge å bruke noen CSS filer i det hele tatt. Jeg føler meg foreløpig mest komfortabel med å 
bruke stylesheets, så jeg har valgt å bruke styled components på komponentene, og stylesheets 
for generelt layout. Men akkurat nå kan det virke litt rotete i og med at jeg velger å bruke 
styled components og stylesheets om hverandre. Jeg valgte å gå for dette for å få erfaring med å
bruke styled components. Tankegangen ved hva som ble en styled component og hva som gikk i 
stylesheets var at om det var kun ett element i komponenten, så ble det SC, men om jeg hadde flere
elementer i komponenten, så brukte jeg stylesheets.

Jeg var usikker på om grafikken i høyre kolonne egentlig var ment å være en JS bilde karusell.
Dette kunne vært en kul utfordring å få til, men denne gangen valgte jeg å fokusere mest på UI.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

