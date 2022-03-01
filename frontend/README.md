# Dokumentation

## Installera följande

```shell

   npm install react-icons
   npm install axios
   npm i -D nodemon
   npm i cors
   npm i express
   npm i dotenv
   npm i helmet
   npm i morgan 
```

<details>
<summary> ## Getting Started with Create React App </summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

## Planering

Jag planerade mitt arbete i små steg som jag sedan utförde och tycker att resultatet blev som jag tänkt mig att det skulle bli.

## Vad var besvärligt att få till? / Varför jag bytte lösning

Det som var mest problematiskt för mig var att jag först valde att uppdatera alla "tasks" med varsitt input field. När jag skrev i ett input field så kom det text i alla andra som var öppna också. Jag försökte, men lyckades inte få till att det endast gick att skriva i ett fält åt gången. Dock lyckades jag göra så att varje task uppdaterades för sig.

Jag löste detta genom att istället göra ett gemensamt input field som kommer fram då man klickar på någon edit-knapp. På så sätt löste jag problemet med att texten uppdateras parallellt. Jag tycker lösningen var tillfredställande då jag egentligen inte ser någon mening med att det finns möjlighet att uppdatera flera "tasks" samtidigt.

## Några kodexempel

I fontend har jag egentligen inte använt mig av någonting nytt. Jag har många funktioner och ternary operators.
Nedan är ett exempel på en ternary operator som har använts för att lägga till en klassen linethrough om propertyn "done" är sann. Om den inte är sann ska inte linethrough läggas till som klass. Klassen linethrough gör så att texten får en linje genom sig.

```javascript

  <p className={obj.done === true ? 'task linethrough' : 'task'}>{obj.task}</p>

```

Att göra en backend som tillhandahåller all funktionalitet verkade till en början vara en stor utmaning. När jag väl började med projektet och förstod principen gick det dock jättebra. Själv logiken i backenden är vanlig javascript. Ett exempel på en lösning som jag tycker fungerar bra är hur jag tilldelar id till alla "todos". När ett id ska tilldelas anropas funktionen getId() där en variabel (counter) räknas upp.

```javascript

let counter = 0
const getId = () => {
        return counter ++
}

```

Nedan är ett exempel på hur jag valt att sortera ut alla Todos som markerats som färdiga. När användaren markerar en todo som färdig ändras done från false till true. Funktionen nedan går igenom alla objekt i arrayen och letar upp de som har done: true. Dessa läggs sedan i en egen array som heter completedTasks. Sedan mappas den arrayen ut då användaren väljer att visa endast de todos som är färdiga.

```javascript

const getCompletedTasks = () => {
    const completedTasks = []
        todoArray.forEach(item => {
            if(item.done === true)
            completedTasks.push(item)
        })
        return completedTasks
  }


```

## Felsökning

De gånger jag har behövt felsöka har jag använt mig av console.log för att ta reda på hur koden körs och var det möjligtvis kan ha gått snett. Jag har också använt mig av metoden att jag har backat och byggt en liten bit i taget och få det att fungera för att sedan utöka koden i små steg.

## Vad som gick bra / Vad som gick dåligt

När jag väl kom igång att bygga så gick det både snabbt och ganska lätt. Jag försökte göra en intressant design men hade inte så mycket roliga idéer på design och animeringar för en Todo-lista.

Det enda som egentligen gick dåligt var problemet jag beskrev ovan med att det blev text i flera input-fields samtidigt, men jag löste problemet på ett bra sätt.

## Vad jag har lärt mig

Jag har lärt mig att koppla ihop frontend och backend. Jag har lärt mig använda axios och andra npm paket som är användbara. Jag har även lärt mig att använda Insomnia.

## Framtida möjligheter

Kursen i webbserverprogrammering har gett mig en inblick i hur frontend/backend och API hänger ihop. Jag tror att jag kan ta med dessa kunskaper i framtida arbeten och projekt.

## UX/UI

Jag valde att arbeta med ett enhetligt färgschema i skalan omkring fägen teal. Jag ville ha en lugn färg som inte sticker ut så mycket och stressar.

Jag använde mig av typsnittet Monospace som liknar typsnittet på skrivmaskin.

Jag har placerat fält och knappar så att det ska bli tydligt och lätt att använda. Jag har inte med någonting "extra" utan andast Todo-listan och det som är nödvändigt för att den ska fungera på ett bra sätt.

## Lösningar jag valde att INTE implementera

Jag valde att utgå i så stor utsträckning som möjligt från de verktyg vi fått under lektionerna. Jag försökte använda mig av de lösningar vi fått och inte leta på nätet eller på Youtube-tutorials efter alternativa lösningar. Jag tycker att jag till stor del har lyckats med det.

Jag valde att använda mig av det här förhållningssättet för att utmana mig själv och fundera på hur jag kunde lösa uppgiften med de verktyg jag har fått på lektionerna. Det finns garanterat flera olika sätt att lösa uppgiften på om man hade letat på nätet.

## Förslag på förbättringar

Jag kunde kanske ha lagt ned mer tid på designen, färgerna och utformningen. Min kreativitet blev inte så stimulerad av karaktären på det här projektet.

Jag kunde ha delat upp koden lite mer i TodoList.js- filen. Kanske lagt en del av koden i andra filer.
