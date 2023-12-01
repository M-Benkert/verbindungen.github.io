const words = {
    "2023-12-01": [
		["Zeitlicher Ausgangspunkt", "Anfang", "Beginn", "Start", "Auftakt"],
		["Einzelnes Stück einer Menge an Gegenständen", "Exemplar", "Ausfertigung", "Kopie", "Muster"],
		["Spur eines Transportmittels", "Bahn", "Gasse", "Piste", "Gleis"],
		["Luft-", "Zug", "Fahrt", "Druck", "Qualität"]
    ],
    "2023-12-02": [
		["Schmuckgegenstände", "Halskette", "Armband", "Haarreif", "Brosche"],
		["Elemente einer Waffe", "Abzug", "Magazin", "Sicherung", "Kolben"],
		["Gegenstände die meist in Paaren auftreten", "Schuh", "Ohrring", "Brillenglas", "Lautsprecher"],
		["Hand-", "Tasche", "Lauf", "Werk", "Arbeit"]
    ],
    "2023-12-03": [
		["Springen im Schwimmbad", "Dreier", "Beckenrand", "Startblock", "Sprungturm"],
		["Bewerbungsunterlagen", "Anschreiben", "Lebenslauf", "Motivation", "Empfehlung"],
		["Typische Übungen in einem Assessment Center", "Diskussion", "Fallstudie", "Rollenspiel", "Gruppenübung"],
		["-Gespräch", "Streit", "Vorstellung", "Kunden", "Fern"]
    ],
    "2023-12-04": [
		["Arten von Vierecken", "Parallelogramm", "Rechteck", "Quadrat", "Trapez"],
		["Sonderzeichen Hashtag", "Raute", "Doppelkreuz", "Gartenzaun", "Nummernzeichen"],
		["Elemente im Garten", "Gartenmöbel", "Geräteschuppen", "Kompost", "Wasserspiele"],
		["Sonnen-", "Terrasse", "Blume", "Schirm", "Energie"]
    ],
    "2023-12-05": [
		["Süßigkeiten", "Kamelle", "Hefezopf", "Weckmann", "Lebkuchen"],
		["Zeit des Narrentreibens", "Karneval", "Fasching", "Fastelovend", "5. Jahreszeit"],
		["Feiertage mit Bezug zu historischen Persönlichkeiten", "Valentinstag", "Reformationstag", "Martinstag", "Nikolaustag"],
		["Feiertage, die 2023 auf einen Sonntag fallen", "Muttertag", "Erntedankfest", "Heiligabend", "Silvester"]
    ],
    "2023-12-06": [
		["Umgangssprachlich für Sex haben", "bumsen", "poppen", "schnackseln", "vögeln"],
		["Heimwerker-Tätigkeiten", "nageln", "dübeln", "hämmern", "schleifen"],
		["Disziplinen der Leichtathletik als Verben", "laufen", "springen", "werfen", "kämpfen"],
		["Innerhalb eines bestimmten Bereiches gründlich suchen: Durch-", "stöbern", "kämmen", "suchen", "wühlen"]
    ],
    "2023-12-07": [
		["Volk aus der Herr der Ringe", "Mensch", "Elbe", "Hobbit", "Ork"],
		["Objekt, das auf Zuschauer eine besondere Anziehungskraft entfaltet", "Attraktion", "Sehenswürdigkeit", "Blickfang", "Spektakel"],
		["Kleine Person", "Gnom", "Knirps", "Winzling", "Rollkoffer"],
		["Sieben an der Zahl", "Zwerg", "Todsünde", "Weltwunder", "Hügel von Rom"]
    ],
    "2023-12-08": [
		["Verschiedene Arten die Zahl 100 darzustellen", "C", "Hundert", "100", "10 x 10"],
		["Windows Versionen", "95", "XP", "10", "Server"],
		["Filmformate", "Super 8", "35 mm", "VistaVision", "IMAX"],
		["Werte in den SI Basiseinheiten", "20 s", "50 m", "80 kg", "273.15 K"]
    ],
    "2023-12-9": [
		["Alternatives Fluggerät", "Fesselballon", "Luftschiff", "Zeppelin", "Segelflugzeug"],
		["Robert", "Finanzminister", "Vater der Atombombe", "3. Detektiv", "RKI-Namensgeber"],
		["Aus dem Song 99 Luftballons", "Luftballon", "Düsenflieger", "Kriegsminister", "Krieg"],
		["Personifikationen von abstrakten Konzepten", "Mutter Natur", "Sensenmann", "Fortuna", "Justitia"]
    ],
    "2023-12-10": [
		["Kartenspielwert", "10", "Dame", "König", "Ass"],
		["Person, die in einer bedrängten Situation zeitweise einspringt", "Springer", "Aushilfe", "Hilfskraft", "Vertretung"],
		["Teppichart", "Brücke", "Flokati", "Läufer", "Perser"],
		["S-", "Turm", "Amt", "Inn", "Pinne"]
    ],
    "2023-12-11": [
		["Filme mit Zahl im Titel", "Ocean's_Eleven", "27_Dresses", "Fifty_Shades of Grey", "In 80 Tagen um_die_Welt"],
		["Filme mit fiktivem Handlungsort im Titel", "Die_Chroniken von Narnia", "Alice im Wunderland", "Die Tribute von Panem", "Avatar: Aufbruch nach_Pandora"],
		["Filme mit Leonardo DiCaprio in der Hauptrolle", "Titanic", "The Wolf of_Wall_Street", "Der große_Gatsby", "Inception"],
		["Filme mit acht oder mehr Kinofilmen", "Harry Potter", "Fast & Furious", "Star Trek", "James Bond"]
    ],
    "2023-12-12": [
		["", "", "", "", ""],
		["Währung", "Euro", "Dollar", "Yen", "Real"],
		["Altertümliche Einheiten", "Dutzend", "Schock", "Lot", "Pfund"],
		["Bekannte Felsformationen", "12 Apostel", "Bastei", "Teufelsmauer", "Donaudurchbruch"]
    ],
    "2023-12-13": [
		["Unglücksboten", "13", "schwarze Katze", "Scherben", "Salz"],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-14": [
		["", "Valentinstag", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-15": [
		["", "Mitte (des Monats)", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-16": [
		["", "Sweet Sixteen", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-17": [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-18": [
		["", "Volljährig", "Erwachsen", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-19": [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-20": [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-21": [
		["", "Blackjack", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-22": [
		["", "Narr", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-23": [
		["", "Primzahl", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "2023-12-24": [
		["", "Heiligabend", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""]
    ],
    "_": [
		["Bedeutungen des Wortes Ausgehen", "Erlöschen", "Schwinden", "Enden", "Voraussetzen"],
		["Bodenbestandteile", "Erde", "Sand", "Ton", "Hummus"],
		["Energiegewinnung: -Kraft", "Wasser", "Wind", "Solar", "Kern"],
		["Weißtöne", "Creme", "Eierschale", "Elfenbein", "Schnee", "Alt", "Rein", "Perl", "Champagner", "Nude"],  // https://www.cleverprinting.de/farbwelten-weisstoene/
		["Auszeichnung", "Pokal", "Medaille", "Trophäe", "Plakette"],
		["Tarot-Karten"], // https://de.wikipedia.org/wiki/Tarot
		["Homophone Substantiv und Verb", "Ahnen", "Eichen", "Kapern", "Rasen"],
		["Produkte, die man bei ihrem Markennamen nennt", "Zewa", "Tempo", "Plexiglas", "Uhu", "Pritt", "Labello", "Tipp-Ex", "Tesa", "Edding", "Aspirin", "Ibuprofen", "Pampers", "Tupperware", "Fön", "Hüttenkäse"],
		["Palindrome", "Bob", "Ebbe", "Ehe", "Elle", "Exe", "Gag", "Gig", "Hannah", "Kajak", "Kasak", "Level", "Madam", "neben", "nennen", "nun", "Otto", "Pop", "Radar", "tut", "Uhu"],
		["Wörter, die häufig falsch geschrieben werden (in falsch)", "brilliant", "detalliert", "einfaltslos", "Mobilar", "Orginal", "Reperatur", "seperat", "verpöhnt"], // https://sternenvogelreisen.de/haeufig-falsch-geschriebene-woerter-richtig/
		["Sonntags-", "Ruhe", "Schule", "Spiel", "Braten"]
    ]
}