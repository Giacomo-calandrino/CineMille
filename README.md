# CineMille
Web app di prova per la gestione della programmazione di un cinema multisala.

## Tecnologie
L'applicazione è sviluppata utilizzando Angular 13 e Bootstrap.
Per la gestione del database ho utilizzato json-server.

## Funzionamento
Prima di lanciare l'applicazione è necessario avviare json-server per recuperare i dati dal database,
utilizziamo da terminale il comando:

"npm run server"

Una volta aperta l'applicazione ci troviamo nella sezione "Film" (home.component) dove viene visualizzata una lista
di tutti i film già inseriti in programmazione, per ogni film vediamo una card che riporta titolo, data di inizio e fine programmazione,
numero della sala e locandina.
Sulla card è presente anche un pulsante "dettagli" che ci porta ad un'altra pagina (movie-details.component),
che ci permette di recuperare tutte le informazioni riguardanti lo specifico film selezionato, compresa una breve descrizione.

Da questa pagina l'utente può anche:
- modificare i dati riguardanti le date della programmazione,
- modificare il numero della sala in cui verrà proiettato,
- eliminare il film dal database

Utilizzando la navbar possiamo accedere ad una pagina contenente un form (new-movie.component) che ci permette di aggiungere i dati di un nuovo film,
per l'immagine è possibile inserire un url trovato sul web o il percorso del file in locale.