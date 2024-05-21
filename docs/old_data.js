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
    "2023-12-09": [
		["Alternatives Fluggerät", "Fesselballon", "Luftschiff", "Zeppelin", "Segelflugzeug"],
		["Robert", "Wirtschaftsminister", "Vater der Atombombe", "3. Detektiv", "RKI-Namensgeber"],
		["Aus dem Song 99 Luftballons", "Luftballon", "Düsenflieger", "Kriegsminister", "Krieg"],
		["Personifikationen von abstrakten Konzepten", "Mutter Natur", "Sensenmann", "Fortuna", "Justitia"]
    ],
    "2023-12-10": [
		["Kartenspielwert", "10", "Dame", "König", "Ass"],
		["Person, die in einer bedrängten Situation zeitweise einspringt", "Springer", "Aushilfe", "Hilfskraft", "Vertretung"],
		["Ort, an dem man eingesperrt ist", "Turm", "Verlies", "Anstalt", "Zelle"],
		["Teppichart", "Brücke", "Flokati", "Läufer", "Perser"]
    ],
    "2023-12-11": [
		["Filme mit Zahl im Titel", "Ocean's_Eleven", "27_Dresses", "Fifty_Shades of Grey", "In 80 Tagen um_die_Welt"],
		["Filme mit fiktivem Handlungsort im Titel", "Die_Chroniken von Narnia", "Alice im Wunderland", "Die Tribute von Panem", "Avatar: Aufbruch nach_Pandora"],
		["Filme mit Leonardo DiCaprio in der Hauptrolle", "Titanic", "The Wolf of_Wall_Street", "Der große_Gatsby", "Inception"],
		["Filme mit acht oder mehr Kinofilmen", "Harry Potter", "Fast & Furious", "Star Trek", "James Bond"]
    ],
    "2023-12-12": [
		["Kollaps", "Schwächeanfall", "Zusammenbruch", "Hitzschlag", "Synkope"],
		["Währung", "Euro", "Dollar", "Yen", "Real"],
		["Altertümliche Einheiten", "Dutzend", "Schock", "Lot", "Pfund"],
		["Bekannte Felsformationen", "12 Apostel", "Bastei", "Teufelsmauer", "Donaudurchbruch"]
    ],
    "2023-12-13": [
		["Unglücksbringer", "13", "schwarze Katze", "zerbrochener Spiegel", "verschüttetes Salz"],
		["Riskante Situation", "heikle Lage", "dünnes Eis", "offenes Messer", "Spiel mit dem Feuer"],
		["Erkennungsmerkmal der Hauptperson aus Märchen", "gläserner Schuh", "roter Umhang", "goldene Kugel", "langes Haar"],
		["Pleonasmen", "alter Greis", "lästiges Ärgernis", "schwarze Kohle", "natürlicher Instinkt"]
    ],
    "2023-12-14": [
		["Schenken am Valentinstag", "Karte", "Praline", "Herz", "Rose"],
		["Brautkleid Töne", "Creme", "Elfenbein", "Champagner", "Rosè"],
		["Bedeutung des Wortes Geist", "Verstand", "Scharfsinn", "Gesinnung", "Gespenst"],
		["Zutaten für eine klassische Erdbeere Bowle", "Erdbeere", "Sekt", "Weißwein", "Minze"]
    ],
    "2023-12-15": [
		["Umgangssprachlich für Versager", "Niete", "Pfeife", "Flasche", "Null"],
		["Zeitlich begrenzer Abschnitt eines Wettkampfs", "Halbzeit", "Durchgang", "Lauf", "Satz"],
		["Produkte, die man bei ihrem Markennamen nennt", "Tempo", "Labello", "Edding", "Fön"],
		["Gebirgs-", "Pass", "Kamm", "Kette", "Zug"]
    ],
    "2023-12-16": [
		["Etwas, an dem man eine Person oder einen Gegenstand erkennt", "Kennzeichen", "Merkmal", "Eigenschaft", "Besonderheit"],
		["Gegenstand, den man beim Autofahren mitführen muss", "Führerschein", "Fahrzeugpapiere", "Warndreieck", "Verbandskasten"],
		["Gegenstand zur Steuerung", "Lenkrad", "Fernbedienung", "Maus", "Touchpad"],
		["Nadel-", "Drucker", "Kissen", "Baum", "Spitze"]
    ],
    "2023-12-17": [
		["Leidenschaft", "Feuer", "Inbrunst", "Hingabe", "Affekt"],
		["Bodenbestandteile", "Erde", "Sand", "Ton", "Hummus"],
		["Möglichkeit, sich frei zu bewegen/entfalten", "Luft", "Platz", "Spielraum", "Freiheit"],
		["Energiegewinnung: -Kraft", "Wasser", "Wind", "Solar", "Kern"]
    ],
    "2023-12-18": [
		["Gebäude/Komplex mit mehreren Wohngebäuden oder -einheiten", "Hochhaus", "Wohnanlage", "Studenten-wohnheim", "Feriendorf"],
		["Ist ab 18 Jahren legal", "Kasinobesuch", "Tabakkonsum", "Pornodreh", "Vollzeitjob"],
		["Kann auslaufen (zeitlich terminiert sein)", "Arbeitsvertrag", "Zeitschriften-abonnement", "Garantieanspruch", "Sonderangebot"],
		["Paradoxes Wort", "Wahl-pflichtfach", "Doppelhaus-hälfte", "Selbsthilfe-gruppe", "Trauerfeier"]
    ],
    "2023-12-19": [
		["Reaktion auf einen Angriff im Sport", "blocken", "ausweichen", "parieren", "kontern"],
		["Umgang mit Konflikt", "einigen", "nachgeben", "durchsetzen", "ignorieren"],
		["Bedeutungen des Wortes Ausgehen", "erlöschen", "schwinden", "feiern", "voraussetzen"],
		["Beim Kochen oder Backen", "hacken", "schwitzen", "reduzieren", "schlagen"]
    ],
    "2023-12-20": [
		["Ergebnis einer Fertigung", "Produkt", "Erzeugnis", "Gut", "Modell"],
		["Vergleich zwischen zwei Elementen", "Quotient", "Relation", "Verhältnis", "Proportion"],
		["Abweichung", "Differenz", "Toleranz", "Entartung", "Unterschied"],
		["Geld-", "Summe", "Gier", "Geschenk", "Verschwendung"]
    ],
    "2023-12-21": [
		["Spiel, das mit einem Skat-Blatt gespielt werden kann", "Skat", "Arschloch", "Durak", "Krieg"],
		["Spiel, das alle zusammenspielen", "The Game", "The Mind", "Die Crew", "Paleo"],
		["Ausruf bei Spielen", "Bingo", "Blackjack", "Schach", "Uno"],
		["Spiel des Jahres", "Dominion", "Kingdom Builder", "Codenames", "Azul"]
    ],
    "2023-12-22": [
		["'Arzt', der ohne schulmedizinisches Wissen praktiziert", "Medizinmann", "Schamanin", "Naturheilkundler", "Heilpraktiker"],
		["Märchenbösewicht", "Stiefmutter", "Hexe", "Wolf", "Vater der Prinzessin"],
		["Werwolf-Karten", "Amor", "Heiler", "Jäger", "Mädchen"],
		["Mars", "Schokoriegel", "Roter Planet", "Kriegsgott", "Ares"]
    ],
    "2023-12-23": [
		["Baumart", "Kiefer", "Kastanie", "Palme", "Weide"],
		["Codenames", "Wörter", "Agenten", "Hinweis", "Erraten"],
		["Word Tab", "Start", "Einfügen", "Entwurf", "Referenzen"],
		["Homophone Substantiv und Verb", "Ahnen", "Eichen", "Kapern", "Rasen"]
    ],
    "2023-12-24": [
		["Auf unsympathische Weise schlau", "gerissen", "listig", "durchtrieben", "verschlagen"],
		["Aus den Titeln von Harry Potter", "Weise", "Schrecken", "Gefangen", "Heiligtum"],
		["Wörter, die häufig falsch geschrieben werden (in falsch)", "brilliant", "detalliert", "Orginal", "verpöhnt"],
		["-abend", "Heilig", "Feier", "Eltern", "Spiele"]
    ],
    "_": [
		["Wort, auf das sich nichts reimt", "Pfirsich", "Musik", "Hanf", "Mensch"]
	]
}