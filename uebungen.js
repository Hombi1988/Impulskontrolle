// Übungen für die Impulskontrolle-App.
//
// Felder pro Übung (nur id und titel sind Pflicht):
//   id          eindeutig, nie mehr ändern (daran hängen Bewertungen und Statistik)
//   titel       Name der Übung
//   bild        Bilddatei (liegt neben index.html)
//   haeufigkeit z. B. "Täglich 3 Minuten"
//   intro       Liste von Absätzen vor den Schritten
//   schritte    Liste: Ablauf
//   nummeriert  true = Schritte nummeriert, sonst Aufzählungspunkte
//   zusatzTitel / zusatz   optionale zweite Liste (z. B. Steigerung)
//   schluss     Hinweis am Ende

window.UEBUNGEN = [
  {
    id: 'ampel', titel: 'Das Ampel-Spiel 🚦', bild: 'ampel.jpg',
    intro: ['Dein Hund lernt, dass Ziehen nicht schneller ans Ziel führt.'],
    schritte: [
      'Grüne Ampel: Leine locker, ihr geht weiter.',
      'Rote Ampel: Sobald die Leine straff wird, bleibst du stehen.',
      'Wieder grün: Sobald die Leine locker wird, geht es weiter.'
    ],
    schluss: 'Später kannst du das auch vor interessanten Stellen üben.'
  },
  {
    id: 'leckerli-jackpot', titel: 'Der Leckerli-Jackpot', bild: 'leckerli-jackpot.jpg',
    schritte: [
      'Verstecke 5–10 kleine Leckerlis im Gras.',
      'Gib ein Signal wie «Such!».',
      'Lass ihn suchen.',
      'Beende das Spiel mit «Fertig».'
    ],
    schluss: 'Das trainiert auch das Umschalten zwischen Aktivität und Ruhe.'
  },
  {
    id: 'tueren', titel: 'Das Warten an Türen', bild: 'tueren.jpg',
    schritte: [
      'Öffne die Tür einen Spalt.',
      'Will er hinausstürmen, schliesst du sie ruhig wieder.',
      'Bleibt er kurz ruhig, öffnest du weiter.',
      'Mit Freigabesignal darf er hinaus.'
    ],
    schluss: 'Nicht als Gehorsamstest, sondern als kleine Selbstkontrollübung.'
  },
  {
    id: 'name-test', titel: 'Der Name-ist-wichtig-Test', bild: 'name-test.jpg',
    schritte: [
      'Sage seinen Namen genau einmal.',
      'Schaut er dich an, belohne ihn.',
      'Übe an immer interessanteren Orten.',
      'Später auch mit sichtbaren Ablenkungen.'
    ],
    schluss: 'Bei Hundesichtungen zunächst nur auf einer Distanz üben, auf der er noch reagieren kann.'
  },
  {
    id: 'versteckspiel', titel: 'Das Versteckspiel', bild: 'versteckspiel.jpg',
    schritte: [
      'Verstecke dich hinter einem Baum oder einer Ecke, während er sicher bei dir ist.',
      'Rufe ihn.',
      'Wenn er dich findet, gibt es eine tolle Belohnung.',
      'Mach es spielerisch und einfach.'
    ],
    schluss: 'Das fördert die Orientierung an dir.'
  },
  {
    id: 'futterbeutel', titel: 'Das Futterbeutel-Spiel', bild: 'futterbeutel.jpg',
    schritte: [
      'Zeige ihm einen Futterbeutel.',
      'Lass ihn kurz warten.',
      'Verstecke ihn in der Nähe.',
      'Gib das Signal «Such!».',
      'Er darf ihn finden und bekommt daraus seine Belohnung.'
    ]
  },
  {
    id: 'rueckwaerts', titel: 'Das Rückwärtslaufen', bild: 'rueckwaerts.jpg',
    schritte: [
      'Laufe langsam rückwärts.',
      'Lock ihn mit einer freundlichen Stimme zu dir.',
      'Belohne ihn, wenn er dir folgt.',
      'Baue kurze Richtungswechsel ein.'
    ],
    schluss: 'Das ist auch eine gute Ergänzung zu eurem bereits funktionierenden Weglauf-Spiel.'
  },
  {
    id: 'parcours', titel: 'Der Impulskontroll-Parcours', bild: 'parcours.jpg',
    intro: ['Baue einen kleinen Parcours:'],
    schritte: [
      'Um ein Hütchen laufen.',
      'Über eine niedrige Stange steigen.',
      'Kurz sitzen.',
      'Auf einer Matte warten.',
      'Weitergehen.'
    ],
    schluss: 'Nicht Geschwindigkeit, sondern kontrolliertes Arbeiten belohnen.'
  },
  {
    id: 'spielzeug-aus', titel: 'Das Spielzeug-aus-Spiel', bild: 'spielzeug-aus.jpg',
    intro: ['Besonders gut für Hunde, die gerne spielen.'],
    schritte: [
      'Spiele kurz mit ihm.',
      'Sage «Aus».',
      'Halte das Spielzeug ruhig.',
      'Sobald er loslässt, markiere und belohne.',
      'Danach darf das Spiel wieder beginnen.'
    ],
    schluss: 'Er lernt, dass Aufhören nicht bedeutet, dass der Spass vorbei ist.'
  },
  {
    id: 'beobachten-sitzen', titel: 'Das Beobachten im Sitzen', bild: 'beobachten-sitzen.jpg',
    intro: ['Setze dich mit ihm an einen ruhigen Ort.'],
    schritte: [
      'Er darf Menschen, Fahrräder und andere Reize beobachten.',
      'Belohne ruhiges Verhalten.',
      'Er muss nicht ständig dich anschauen.',
      'Sobald er von selbst wieder zu dir schaut, gibt es eine Belohnung.'
    ]
  },
  {
    id: 'drei-leckerli', titel: 'Das Drei-Leckerli-Spiel', bild: 'drei-leckerli.jpg',
    schritte: [
      'Lege drei Leckerlis in etwas Abstand zueinander.',
      'Lass ihn das erste suchen.',
      'Danach wartet er kurz auf dein Signal.',
      'Dann darf er das zweite suchen.',
      'Wiederhole das mit dem dritten.'
    ],
    schluss: 'Du trainierst damit das Wechseln zwischen Aktivität und Warten.'
  },
  {
    id: 'ruhe-signal', titel: 'Das Ruhe-Signal', bild: 'ruhe-signal.jpg',
    schritte: [
      'Setze dich mit ihm an einen ruhigen Ort.',
      'Belohne ihn, wenn er sich entspannt hinlegt.',
      'Sprich ruhig mit ihm.',
      'Belohne ruhiges Beobachten und Liegen.',
      'Beende die Übung, bevor er unruhig wird.'
    ]
  },
  {
    id: 'handtarget', titel: 'Das Handtarget – «Touch»', bild: 'handtarget.jpg', nummeriert: true,
    intro: ['Ziel: Dein Hund lernt, sich aktiv zu dir zu bewegen.'],
    schritte: [
      'Halte deine offene Hand vor seine Nase.',
      'Sobald er sie mit der Nase berührt: «Yes!»',
      'Belohnen.',
      'Wiederhole das aus verschiedenen Positionen.',
      'Später kannst du deine Hand auch seitlich oder etwas weiter weg anbieten.'
    ],
    schluss: 'Das ist später eine tolle Möglichkeit, seine Aufmerksamkeit umzulenken.'
  },
  {
    id: 'leckerli-boden', titel: 'Das Leckerli-am-Boden-Spiel', bild: 'leckerli-boden.jpg', nummeriert: true,
    intro: ['Ziel: Nicht alles sofort nehmen, was interessant ist.'],
    schritte: [
      'Lass ein Leckerli auf den Boden fallen und decke es mit deiner Hand ab.',
      'Warte, bis dein Hund kurz zurückweicht oder dich anschaut.',
      'Sag «Okay» und gib ihm ein anderes Leckerli aus deiner Hand.',
      'Steigere die Schwierigkeit langsam.'
    ],
    schluss: 'Wichtig: Er soll nicht lernen, dass er sich das Leckerli irgendwann doch selbst holen kann.'
  },
  {
    id: 'richtungswechsel', titel: 'Das Richtungswechsel-Spiel', bild: 'richtungswechsel.jpg',
    intro: ['Ziel: Dein Hund achtet darauf, wohin du gehst.'],
    schritte: [
      'Laufe geradeaus.',
      'Ändere plötzlich, aber freundlich die Richtung.',
      'Wenn dein Hund mitkommt, belohne ihn.',
      'Baue verschiedene Richtungen ein.'
    ],
    schluss: 'Später kannst du ein Signal wie «Mit mir!» einführen.'
  },
  {
    id: 'spielzeug-frust', titel: 'Das Spielzeug-Frust-Spiel', bild: 'spielzeug-frust.jpg', nummeriert: true,
    intro: ['Ziel: Begeisterung kontrollieren, obwohl etwas Tolles passiert.'],
    schritte: [
      'Nimm einen Ball.',
      'Bewege ihn ein wenig.',
      'Dein Hund soll kurz warten.',
      'Sobald er ruhig bleibt, gibst du das Freigabesignal.',
      'Er darf dem Ball hinterherlaufen.'
    ],
    schluss: 'Wenn er schon beim ersten Versuch explodiert, mach die Bewegung kleiner.'
  },
  {
    id: 'blickkontakt', titel: 'Der freiwillige Blickkontakt', bild: 'blickkontakt.jpg',
    intro: ['Ziel: Dein Hund soll dich von selbst anschauen.',
            'Gehe an einen interessanten Ort, beispielsweise in die Nähe des Tierparks.'],
    schritte: [
      'Sag nichts.',
      'Warte auf einen freiwilligen Blick.',
      'Sofort markieren und belohnen.',
      'Wiederhole das.'
    ],
    schluss: 'Das ist eine besonders wichtige Grundlage für Hundebegegnungen.'
  },
  {
    id: 'decke-draussen', titel: 'Das Deckentraining draussen', bild: 'decke-draussen.jpg', nummeriert: true,
    intro: ['Ziel: Auch bei interessanter Umgebung zur Ruhe kommen.'],
    schritte: [
      'Nimm eine kleine Decke mit.',
      'Belohne deinen Hund, wenn er daraufgeht.',
      'Belohne zunächst das Stehen, später das Sitzen und Liegen.',
      'Übe an unterschiedlichen Orten.',
      'Belohne ruhiges Beobachten.'
    ],
    schluss: 'Nicht erzwingen. Er soll lernen, dass er auch draussen entspannen kann.'
  },
  {
    id: 'schau-weg', titel: 'Das «Schau und wieder weg»-Spiel', bild: 'schau-weg.jpg', nummeriert: true,
    intro: ['Ziel: Andere Hunde wahrnehmen, ohne sich darin zu verlieren.',
            'Das ist für euch vermutlich eine der wertvollsten Übungen.'],
    schritte: [
      'Dein Hund sieht einen anderen Hund.',
      'Er darf kurz hinschauen.',
      'Sobald er seinen Blick freiwillig wieder löst, markierst du.',
      'Belohne ihn.',
      'Wiederhole das.'
    ],
    schluss: 'Wichtig: Nicht warten, bis er sich festgestarrt hat. Beginne mit ausreichend Abstand.'
  },
  {
    id: 'erst-schauen', titel: 'Das «Erst schauen, dann los»-Spiel', bild: 'erst-schauen.jpg', nummeriert: true,
    haeufigkeit: 'Täglich 3–5 Minuten',
    intro: ['Übe zunächst ohne andere Hunde.'],
    schritte: [
      'Nimm ein Leckerli in die geschlossene Hand.',
      'Dein Hund wird versuchen, daran zu kommen.',
      'Warte, bis er kurz aufhört und dich anschaut.',
      'Sofort loben und Leckerli aus der anderen Hand geben.',
      'Wiederholen.'
    ],
    schluss: 'Er lernt: Nicht Drängeln, sondern Selbstkontrolle bringt mich ans Ziel.'
  },
  {
    id: 'freigabesignal', titel: 'Das Freigabesignal', bild: 'freigabesignal.jpg', nummeriert: true,
    haeufigkeit: 'Täglich 3 Minuten',
    intro: ['Das ist eine meiner Lieblingsübungen für deinen Fall.'],
    schritte: [
      'Lass ihn sitzen.',
      'Lege ein Spielzeug vor ihn.',
      'Er soll warten.',
      'Sag beispielsweise «Okay!».',
      'Jetzt darf er das Spielzeug holen.'
    ],
    zusatzTitel: 'Steigere langsam die Schwierigkeit:',
    zusatz: [
      'Spielzeug näher an ihn legen.',
      'Spielzeug bewegen.',
      'Kurz um ihn herumgehen.',
      'Wartezeit verlängern.'
    ],
    schluss: 'Nicht minutenlang warten lassen. Lieber viele kurze Erfolge.'
  },
  {
    id: 'hunde-beobachtung', titel: 'Das Hunde-Beobachtungstraining', bild: 'hunde-beobachtung.jpg', nummeriert: true,
    haeufigkeit: '2–3 Mal pro Woche',
    intro: ['Das ist die wichtigste Übung für euch.',
            'Du brauchst dafür einen bekannten Hund und dessen Besitzer.'],
    schritte: [
      'Ihr stellt euch mit genügend Abstand auf.',
      'Dein Hund darf den anderen Hund sehen.',
      'Sobald er ruhig bleibt oder sich kurz zu dir umdreht, belohnst du ihn.',
      'Geht gemeinsam ein paar Schritte näher.',
      'Wird er hektisch, geht ihr wieder auf Distanz.',
      'Bleibt er ansprechbar, kann es als Belohnung eine kurze Spielpause geben.'
    ],
    schluss: 'So lernt er, dass er seine Begeisterung kontrollieren kann und trotzdem Hundekontakt bekommt.'
  },
  {
    id: 'umorientierung', titel: 'Das Umorientierungsspiel', bild: 'umorientierung.jpg',
    haeufigkeit: 'Bei jedem Spaziergang',
    schritte: [
      'Laufe ganz normal.',
      'Wenn dein Hund von sich aus zu dir schaut, sag «Yes!».',
      'Belohne ihn.',
      'Laufe weiter.'
    ],
    schluss: 'Du belohnst damit freiwillige Aufmerksamkeit, ohne ständig seinen Namen rufen zu müssen.'
  }
];
