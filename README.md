# 🍝 Raviolo d'Oro — Sito Web Ufficiale & Motore di Prenotazione

> **Progetto Luxury Web Experience (Bilingue Italiano / Inglese)** per il ristorante **Raviolo d'Oro**  
> *Via della Guglia, 63, 00186 Roma (Piazza Montecitorio / Pantheon)*  
> Valutazione: **★ 4.7 su oltre 15.000 recensioni verificate**

---

## 🌟 Caratteristiche Principali del Sito

1. **Bilingue Completo Istantaneo (IT / EN):**
   - Switch in tempo reale senza ricaricare la pagina.
   - Traduzione automatica di navigazione, descrizioni dei piatti, titoli, campi del modulo, segnaposto e ricevuta di prenotazione.
   - Salvataggio automatico della lingua scelta in `localStorage`.

2. **Motore di Prenotazione Tavoli Completo & Interattivo:**
   - Selezione del numero di ospiti con counter interattivo `+` / `−`.
   - Data con blocco automatico delle date passate.
   - Scelta del servizio e dello slot orario (Pranzo 12:00–14:30 | Cena 19:00–22:00).
   - Scelta dell'ambiente: *Sala Interna Storica Climatizzata* oppure *Dehors & Giardino con Luci*.
   - Generazione istantanea del **Ticket Ufficiale di Prenotazione** con Codice Univoco (es. `ROMA-4892`).
   - Pulsante **"Invia Notifica WhatsApp al Locale"**: apre WhatsApp precompilato con tutti i dati formattati per la conferma immediata con il ristorante.
   - Pulsante **"Aggiungi a Google Calendar"** automatico.
   - Pulsante **"Stampa / Salva Ricevuta"**.
   - Memorizzazione della prenotazione nel browser (banner per visualizzare la ricevuta attiva o annullare).

3. **Menu Digitale Interattivo con Filtri per Categoria:**
   - Categorie: *Tutto*, *Ravioli Artigianali*, *Primi Romani*, *Antipasti*, *Secondi Piatti*, *Dolci della Casa*, *Vini & Cantina*.
   - Prezzi trasparenti in € e badge speciali (*Piatto Consigliato*, *Pasta Fatta in Casa*, *Senza Glutine*).

4. **Design Moderno ad Altissimo Impatto Visivo:**
   - Palette Luxury Roman: Terracotta/Wine Burgundy (`#8B1D1D`), Oro Romano (`#D4AF37`), Ardesia dark (`#0C0A0B`), dettagli in vetro satinato (*glassmorphism*).
   - Tipografia premium: *Marcellus* + *Cinzel* + *Plus Jakarta Sans*.
   - Micro-animazioni silky fluide e responsive al 100% (Mobile, Tablet, Desktop).

5. **SEO Avanzato & Social Sharing (Open Graph / Twitter):**
   - Tag Open Graph completi (`og:title`, `og:description`, `og:image`, `og:locale`).
   - Immagine di anteprima sociale dedicata (`assets/images/og_image.jpg`, 1200x630px).
   - Dati strutturati Schema.org JSON-LD (`Restaurant`) con coordinate geografiche, orari, menu e recensioni per scalare Google Maps e Rich Snippets.

6. **Standard Modern Web Guidance Applicati:**
   - Utilizzo di `<dialog closedby="any">` per i modali nativi e accessibili con fallback cross-browser.
   - Validazione form reattiva con pseudoclassi native CSS `:user-valid` e `:user-invalid`.
   - Attributi semantici e accessibilità ARIA integrata.

---

## 🚀 Come Pubblicare su GitHub Pages (Deploy in 3 Passaggi)

Il sito è statico al 100%, senza bisogno di server complessi, pronto per essere pubblicato gratuitamente con certificato SSL (HTTPS) su GitHub Pages.

### Opzione A: Tramite GitHub Desktop o Interfaccia Web
1. Crea un nuovo repository su GitHub (es. `raviolodoro-roma` oppure `raviolodoro.github.io`).
2. Trascina tutti i file presenti in questa cartella (`index.html`, `.nojekyll`, le cartelle `css/`, `js/`, `assets/`) nel repository.
3. Vai su **Settings** > **Pages** del repository:
   - Sotto **Branch**, seleziona `main` (o `master`) e `/ (root)`.
   - Clicca **Save**.
4. In meno di 60 secondi il sito sarà online all'indirizzo `https://<tuo-utente>.github.io/<nome-repo>/`.

### Opzione B: Da Terminale Git
```bash
git init
git add .
git commit -m "Deploy sito Raviolo d'Oro bilingue con motore prenotazioni"
git branch -M main
git remote add origin https://github.com/<TUO-USERNAME>/<TUO-REPO>.git
git push -u origin main
```

---

## 📁 Struttura della Cartella

```
SITO_RAVIOLO_D_ORO/
├── index.html                  # File principale HTML5 semantico bilingue
├── .nojekyll                   # File di configurazione per GitHub Pages
├── README.md                   # Questa documentazione
├── css/
│   └── style.css               # Foglio di stile luxury responsive con glassmorphism
├── js/
│   └── app.js                  # Motore bilingue, logica prenotazioni e dialog nativi
└── assets/
    └── images/
        ├── logo.png            # Logo ufficiale Raviolo d'Oro
        ├── favicon.png         # Favicon e icona apple-touch
        ├── og_image.jpg        # Copertina per condivisione social (1200x630)
        ├── hero_dish.jpg       # Foto hero principale
        ├── raviolo_classic.jpg # Piatto ravioli signature
        ├── dish_carbonara.jpg  # Carbonara romana
        ├── dish_cacio_pepe.jpg # Ravioli cacio e pepe
        ├── dish_carciofo.jpg   # Carciofo alla giudia
        ├── dish_dessert.jpg    # Tiramisù fatto in casa
        ├── restaurant_ambience.jpg # Atmosfera sala ristorante
        ├── wine_cellar.jpg     # Cantina dei vini
        └── icon_*.png          # Icone per le sezioni del menu
```

---

## 📞 Informazioni Locale
* **Indirizzo:** Via della Guglia, 63, 00186 Roma RM (Piazza Montecitorio / Pantheon)
* **Telefono:** +39 06 678 2885
* **WhatsApp:** +39 352 089 1239
* **Orari:** Lunedì – Domenica: 11:30 – 23:30 (Orario Continuato)
