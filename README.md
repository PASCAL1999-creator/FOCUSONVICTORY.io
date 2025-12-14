# VIKFIT - Focus on Victory 🔥

Een moderne, professionele website voor personal training services.

## 📋 Overzicht

Vikfit is een complete personal trainer website met:
- Responsive design voor alle apparaten
- Moderne animaties en interacties
- Contactformulier met validatie
- Service overzicht en prijspakketten
- Klant testimonials
- Mobiel menu

## 🚀 Features

### Secties
- **Hero Section**: Aantrekkelijke landing met call-to-action buttons
- **Over Mij**: Trainer introductie met credentials
- **Diensten**: 6 verschillende service cards (Personal Training, Voedingscoaching, etc.)
- **Programma's**: 3 prijspakketten (Starter, Victory, Elite)
- **Testimonials**: 6 klantreviews met ratings
- **Contact**: Contactformulier en contactinformatie
- **Footer**: Links en bedrijfsinformatie

### Functionaliteit
- Smooth scrolling tussen secties
- Mobiel hamburger menu
- Form validatie
- Scroll animaties
- Parallax effecten
- Active navigation highlighting
- Lazy loading voor afbeeldingen

## 📁 Bestanden

```
Vikfit - focus on Victory/
├── index.html          # Hoofdpagina
├── styles.css          # Alle styling
├── script.js           # JavaScript functionaliteit
├── images/             # Map voor afbeeldingen
│   └── trainer.jpg     # Plaats hier je trainer foto
└── README.md           # Deze file
```

## 🎨 Kleuren

- **Primary**: `#ff6b35` (Oranje)
- **Secondary**: `#004e89` (Blauw)
- **Accent**: `#ffcc00` (Geel)
- **Dark**: `#1a1a1a` / `#0d0d0d`
- **Success**: `#10b981` (Groen)

## 📱 Responsive Breakpoints

- Desktop: > 992px
- Tablet: 768px - 992px
- Mobile: < 768px
- Small Mobile: < 480px

## 🖼️ Afbeeldingen Toevoegen

Plaats de volgende afbeeldingen in de `/images` map:
- `trainer.jpg` - Professionele foto van de trainer (aanbevolen: 800x1000px)

Optioneel kunnen meer afbeeldingen toegevoegd worden voor:
- Service illustraties
- Background hero image
- Client transformatie foto's

## ⚙️ Installatie

1. Open de folder in je browser
2. Open `index.html` in je favoriete browser
3. Geen server of installatie nodig!

## 🔧 Aanpassen

### Contactgegevens
Pas de contactinformatie aan in `index.html`:
- Email: Zoek naar `info@vikfit.nl`
- Telefoon: Zoek naar `+31 6 1234 5678`
- Locatie: Zoek naar `Amsterdam, Nederland`

### Prijzen
Pas de prijzen aan in de "Programs" sectie:
- Starter: €49/maand
- Victory: €89/maand  
- Elite: €149/maand

### Kleuren
Pas de CSS variabelen aan in `styles.css` onder `:root`

### Content
Alle tekst kan aangepast worden in `index.html`

## 🌐 Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobile browsers

## 📧 Contactformulier

Het contactformulier is momenteel ingesteld als demo en logt alleen naar de console.

Voor productie:
1. Vervang de API call in `script.js` (regel 123-140)
2. Integreer met een backend service (EmailJS, Formspree, etc.)
3. Of gebruik PHP voor email verzending

Voorbeeld integratie met EmailJS:
```javascript
emailjs.send("service_id", "template_id", formData)
    .then(() => {
        showFormMessage('Bericht verzonden!', 'success');
    });
```

## 🚀 Deployment

### GitHub Pages
1. Upload naar GitHub repository
2. Ga naar Settings > Pages
3. Selecteer main branch
4. Website is live!

### Netlify
1. Drag & drop de folder naar Netlify
2. Website is direct live

### Eigen Hosting
Upload alle bestanden via FTP naar je webhost

## 📝 TODO voor Launch

- [ ] Voeg echte trainer foto toe
- [ ] Pas contactgegevens aan
- [ ] Configureer contactformulier backend
- [ ] Voeg Google Analytics toe (optioneel)
- [ ] Test op verschillende devices
- [ ] Optimaliseer afbeeldingen
- [ ] Voeg favicon toe
- [ ] Update social media links
- [ ] Privacy policy & algemene voorwaarden pagina's

## 💡 Tips

- Gebruik hoge kwaliteit afbeeldingen voor professional uitstraling
- Houd de content kort en krachtig
- Update testimonials regelmatig
- Test het contactformulier uitgebreid
- Optimaliseer voor SEO (meta tags, alt teksten)

## 🎯 Performance

De website is geoptimaliseerd voor:
- Snelle laadtijd
- Smooth animaties
- Mobile first design
- Accessibility
- SEO friendly

## 📞 Support

Voor vragen of hulp bij aanpassingen, zie de comments in de code bestanden.

---

**Gemaakt met ❤️ voor Vikfit - Focus on Victory**
