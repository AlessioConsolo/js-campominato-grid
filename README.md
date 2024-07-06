# js-campominato-grid

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1. Creo un bottone e un div con id grid che andrà a contenere la mia griglia sull'html
2. Creo la variabile button e grid che si ricolleghino agli elementi HTML precedentemente creati
3. Creo la funzione createSquare, che mi servirà allo scopo di creare elementi div a cui assocerò la classe square
4. Creo l'eventlistener collegato al mio bottone facendo si che al click vada a creare 100 Square collegandosi alla precedente funzione e che li vada ad appendere all'interno della mia griglia
5. Creo un ulteriore EventListener al click stavolta collegato ad ogni quadrato in modo che cambi il proprio colore di sfondo e stampi in console il proprio numero
