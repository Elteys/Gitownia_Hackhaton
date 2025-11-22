const express = require('express');
const cors = require('cors'); // dodaj tę linię
const fs = require('fs').promises;
const path = require('path');
const app = express();

// Włącz CORS
app.use(cors());

// Użyj JSON parsera
app.use(express.json());


// Ustaw ścieżkę do katalogu Gitownia/Json
const DATA_DIR = path.join(__dirname, 'Gitownia', 'Json');
const DATA_FILE = path.join(DATA_DIR, 'CommunityQuestions.json');

app.post('/api/community-deck', async (req, res) => {
  try {
    const { category, cards } = req.body;

    if (!category || !cards || !Array.isArray(cards)) {
      return res.status(400).json({ error: 'Brak wymaganych pól' });
    }

    await fs.mkdir(DATA_DIR, { recursive: true });

    let decks = {};
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      decks = JSON.parse(data);
    } catch (err) {
      // Jeśli nie istnieje, tworzymy pusty obiekt
    }

    // Zapisz pod kluczem category
    decks[category.toLowerCase()] = cards;

    await fs.writeFile(DATA_FILE, JSON.stringify(decks, null, 2), 'utf-8');
    res.status(200).json({ message: 'Zestaw zapisany' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});
