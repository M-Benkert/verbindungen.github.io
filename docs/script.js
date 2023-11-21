$(document).ready(function() {
	loadWords()
	initializeWordButtons();
	initializeAttemptBubbles();
	initializeAnswerBanners();
	displayCurrentDate();
	restoreGame();
});

let wordObjects = [];
let wordButtonObjects = [];
let categoryObjects = [];
let selectedWordObjects = [];
let guessedCategoryObjects = [];
let attempts = [];
let attemptsRemaining = 0;
let attemptBubbleObjects = [];
let answerBannerObjects = []

const STORAGE_KEY_DATE = "date";
const STORAGE_KEY_ATTEMPTS = "attempts";
const STORAGE_KEY_ATTEMPTS_REMAINING = "attempts_remaining";
const STORAGE_KEY_GUESSED_CATEGORIES = "guessed_categories";

// helper_functions ***********************************************************
function shuffleArray(array) {
    const newArray = [...array]; // Create a shallow copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getQueryString(param) {
	const queryString = window.location.search;
	const params = new URLSearchParams(queryString);
	return params.get(param);
}

function getCurrentDate() {
	const regex = /^\d{4}-\d{2}-\d{2}$/
	const givenDate = getQueryString("date");

	if (givenDate !== null && regex.test(givenDate)) {
		return givenDate;
	}

	const currentDate = new Date();

	return `${currentDate.getFullYear()}` +
		`-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}`+
		`-${currentDate.getDate().toString().padStart(2, "0")}`;
}

const CURRENT_DATE = getCurrentDate();

function addClassTemporarily(element, token, ms = 500) {
        element.classList.add(token);
        setTimeout(() => {
            element.classList.remove(token);
        }, ms);
    }

function forEachWithDelay(array, func, callback, ms=500) {
    let index = 0;

    function executeNext() {
        if (index < array.length) {
            func(array[index]);
            index++;
            setTimeout(executeNext, ms);
        } else if (callback) {
            callback();
        }
    }

    // Start the execution
    executeNext();
}

// word objects ***************************************************************
class Category {
	static current = 0;
	
	constructor(category) {
		this.category = category;
		this.group = Category.current;
		this.guessed = false;
		this.wordObjects = [];
		Category.current++;
	}

	addWordObjects(wordObject) {
		if (this.wordObjects.length >= 4)
			console.error("only four word per category")
		this.wordObjects.push(wordObject)
	}

	setGuessed(fromWordObject = false) {
		this.guessed = true;
		if (!fromWordObject) {
			this.wordObjects.forEach(wordObject => {
				wordObject.setGuessed(false);
			});
		}
	}
	
	getCategory() {
		return this.category;
	}
	
	getGroup() {
		return this.group;
	}

	getWordObjects() {
		return this.wordObjects;
	}

	isGuessed() {
		return this.guessed;
	}
}

class Word {
    constructor(word, categoryObject) {
        this.word = word;
		this.wordButtonObject = null;
        this.categoryObject = categoryObject;
		this.categoryObject.addWordObjects(this);

		this.selected = false;
		this.guessed = false;
    }
	
	selectWord() {
		if (this.selected) {
			this.selected = false;
			selectedWordObjects.splice(selectedWordObjects.indexOf(this), 1);
		} else if (selectedWordObjects.length < 4 && !this.guessed) {
			this.selected = true;
			selectedWordObjects.push(this);
		}
	}

	updateWordButtonObject(wordButtonObject) {
		this.wordButtonObject = wordButtonObject;
	}
	
	setGuessed(fromCategoryObject = false) {
		this.guessed = true;

		if (!fromCategoryObject) {
			this.categoryObject.setGuessed(true);
		}
	}
	
	getWord() {
		return this.word;
	}
	
	getCategory() {
		return this.categoryObject.getCategory();
	}
	
	getCategoryObject() {
		return this.categoryObject;
	}

	getGroup() {
		return this.categoryObject.getGroup();
	}

	getWordButtonNumber() {
		return this.wordButtonObject.getNumber();
	}

	getWordButtonObject() {
		return this.wordButtonObject;
	}
	
	isSelected() {
		return this.selected;
	}
	
	isGuessed() {
		return this.guessed;
	}
}

class WordButton {
	static current = 0;

    constructor(wordObject, buttonElement) {
        this.word = wordObject;
		this.word.updateWordButtonObject(this);
		this.number = WordButton.current;
		this.buttonElement = buttonElement;
		WordButton.current++;
    }

    selectWord() {
		this.word.selectWord()
		this.refreshButton();
    }

	updateWordObject(wordObject) {
		this.word = wordObject;
		this.word.updateWordButtonObject(this);
		this.refreshButton();
	}

	getNumber() {
		return this.number;
	}
	
	getWordObject() {
		return this.word;
	}
	
	wordIsSelected() {
		return this.word.isSelected();
	}
	
	wordIsGuessed() {
		return this.word.isGuessed();
	}

	shakeButtonVertically() {
		addClassTemporarily(this.buttonElement, "vertical-shake-animation", 500)
	}

	shakeButtonTilty() {
		addClassTemporarily(this.buttonElement, "tilt-shake-animation", 500)
	}
	
	refreshButton() {
		if (this.word.isSelected() !== this.buttonElement.classList.contains("selected")) {
			this.buttonElement.classList.toggle("selected");
		}

		this.buttonElement.textContent = this.word.getWord();
		fitFontSizeToDiv(this.buttonElement);
	}
}

function fitFontSizeToDiv(elem) {
	elem.style.removeProperty("font-size");

	let fontSize = parseInt(window.getComputedStyle(elem).getPropertyValue("font-size").slice(0, -2));

	while (elem.scrollWidth > elem.clientWidth && fontSize > 0) {
		fontSize--;
		elem.style.fontSize = fontSize + "px";
	}


}

class AttemptBubble {
	constructor(bubbleElement) {
		this.used_up = false;
		this.bubbleElement = bubbleElement;
	}

	setUsedUp() {
		this.used_up = true;
		this.refreshBubble();
	}

	refreshBubble() {
		if (this.used_up !== this.bubbleElement.classList.contains("lost")) {
			this.bubbleElement.classList.toggle("lost");
		}
	}
}

class AnswerBanner {
	constructor(bannerElement) {
		this.category = null;
		this.shown = false;
		this.bannerElement = bannerElement;
	}

	setShown(categoryObject) {
		this.category = categoryObject;
		this.shown = true;
		this.refreshBanner();
	}

	refreshBanner() {
		if (this.shown === this.bannerElement.classList.contains("hide")) {
			this.bannerElement.classList.toggle("hide");

			if (this.shown) {
				const catElem = this.bannerElement.getElementsByClassName("category")[0];
				catElem.textContent = this.category.getCategory();
				const wordsElem = this.bannerElement.getElementsByClassName("words")[0];
				wordsElem.textContent = this.category.getWordObjects().map(wordObject => wordObject.getWord()).join(", ");

				this.bannerElement.classList.add("group-" + this.category.getGroup());
			}
		}
	}
}

// on load ********************************************************************
function loadWords() {
	let data = [
		["numbers", "0", "1", "2", "3"],
		["letters", "a", "b", "c", "d"],
		["LETTERS", "A", "B", "C", "D"],
		["characters", "+", "-", "*", "/"]
    ];

	if (CURRENT_DATE in words) {
		data = words[CURRENT_DATE];
	}

	wordObjects = $.map(
		data.map(row => {
			const categoryObject = new Category(row[0]);
			categoryObjects.push(categoryObject);
			return row.slice(1).map(word => new Word(word.toUpperCase(), categoryObject));
		}),
		function (wordObject) { return wordObject; }
	);
}

function initializeWordButtons() {
    const wordButtonElements = document.querySelectorAll('.word_button');

    wordButtonElements.forEach((buttonElement, index) => {
        const wordButtonObject = new WordButton(wordObjects[index], buttonElement);
        // Linking the object and the button
        buttonElement.addEventListener('click', function() {
            wordButtonObject.selectWord();
        });
		
		wordButtonObjects.push(wordButtonObject);
    });
	
	shuffleWords()
}

function initializeAttemptBubbles() {
	const attemptBubbleElements = document.querySelectorAll('.bubble');

	attemptBubbleElements.forEach(bubbleElement => {
		const attemptBubbleObject = new AttemptBubble(bubbleElement);

		attemptBubbleObjects.push(attemptBubbleObject);
	});

	attemptsRemaining = attemptBubbleObjects.length;
}

function initializeAnswerBanners() {
	const answerBannerElements = document.querySelectorAll('.answer-banner');

	answerBannerElements.forEach(bannerElement => {
		const answerBannerObject = new AnswerBanner(bannerElement);
		answerBannerObject.refreshBanner();

		answerBannerObjects.push(answerBannerObject);
	});
}

function displayCurrentDate() {
	const elem = document.getElementById("current-date");
	elem.textContent = CURRENT_DATE.slice(-2);
}

function restoreGame() {
	const storedDate = localStorage.getItem(STORAGE_KEY_DATE);
	if (storedDate === null || storedDate !== CURRENT_DATE || shouldRestart()) {
		localStorage.setItem(STORAGE_KEY_DATE, CURRENT_DATE);
		storeAttempts();
		storeAttemptsRemaining();
		storeGuessedCategories();
	} else {
		
		const storedGuessedCategories = getStoredGuessedCategories();
		storedGuessedCategories.forEach(categoryObject => {
			persistCategory(categoryObject);
		});

		const storedAttempts = getStoredAttempts();
		storedAttempts.forEach(storedAttempt => {
			saveGuess(storedAttempt);
		});
		
		const storedAttemptsRemaining = getStoredAttemptsRemaining();
		for (let i = 0; i < 4 - storedAttemptsRemaining; i++) {
			handleWrongGuess();
		}

		checkGameEnd();
	}
}

function shouldRestart() {
	const queryString = window.location.search;
	const params = new URLSearchParams(queryString);
	const restart = params.get("restart");

	return restart !== null;
}

function storeAttempts() {
	localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts));
}

function getStoredAttempts() {
	return JSON.parse(localStorage.getItem(STORAGE_KEY_ATTEMPTS));
}

function storeAttemptsRemaining() {
	localStorage.setItem(STORAGE_KEY_ATTEMPTS_REMAINING, attemptsRemaining);
}

function getStoredAttemptsRemaining() {
	return parseInt(localStorage.getItem(STORAGE_KEY_ATTEMPTS_REMAINING));
}

function storeGuessedCategories() {
	localStorage.setItem(STORAGE_KEY_GUESSED_CATEGORIES, JSON.stringify(
		guessedCategoryObjects.map(categoryObject => categoryObject.getGroup())
	));
}

function getStoredGuessedCategories() {
	const storedGuessedCategories = JSON.parse(localStorage.getItem(STORAGE_KEY_GUESSED_CATEGORIES));
	return storedGuessedCategories.map(
		group => categoryObjects[
			categoryObjects.map(categoryObject => categoryObject.getGroup()).indexOf(group)
		]
	);
}

// main game functions ********************************************************
function unselectAll() {
	wordButtonObjects.forEach(wordButton => {
		if (wordButton.wordIsSelected()) {
			wordButton.selectWord();
		}
	});
}

function shuffleWords() {
	let notGuessedWords = wordButtonObjects
        .filter(wordButton => !wordButton.wordIsGuessed())
        .map(wordButton => wordButton.getWordObject());
	
	notGuessedWords = shuffleArray(notGuessedWords)
		
	let index = 0;
	wordButtonObjects.forEach(wordButton => {
		if (wordButton.wordIsGuessed()) {
			return ;
		}
		wordButton.updateWordObject(notGuessedWords[index]);
		index++;
	})
}

function showResults() {
	const modal = document.getElementById("congrats-modal");
	if (modal.classList.contains("hide")) {
		modal.classList.remove("hide");
	}
}

function hideResults() {
	const modal = document.getElementById("congrats-modal");
	if (!modal.classList.contains("hide")) {
		modal.classList.add("hide");
	}
}

function submitGuess(interactive = true) {
	if (selectedWordObjects.length < 4) {
		return ;
	}

	saveGuess(selectedWordObjects.map(wordObject => wordObject.getGroup()));

	if (interactive) {
		forEachWithDelay(selectedWordObjects.sort((a, b) => {
			return a.getWordButtonNumber() - b.getWordButtonNumber();
		}), wordObject => {
			wordObject.getWordButtonObject().shakeButtonVertically();
		}, () => { checkGuess(interactive); }, 200)
	} else {
		checkGuess(interactive);
	}
}

// main game functions ********************************************************
function saveGuess(groups) {
	attempts.push(groups);
	displayGuess(groups);
	storeAttempts();
}

function displayGuess(groups) {
	const row = document.createElement("div");
	row.classList.add("nyt-emoji-row");

	groups.forEach(group => {
		const item = document.createElement("div");
		item.classList.add("nyt-emoji", "group-" + group);

		row.appendChild(item);
	})

	document.getElementById("emoji-recap").appendChild(row);
}

function checkGuess(interactive = false) {
	const count = countCorrectGuesses(selectedWordObjects.map(wordObject => wordObject.getGroup()));

	if (count === 4) {
		persistCorrectGuess();
	} else {
		handleWrongGuess(interactive);
		if (count === 3) {
			displayMessage(5);
		}
	}

	checkGameEnd(interactive);
}

function countCorrectGuesses(groups) {
	let counts = [];
	groups.slice(0, -1).forEach((group, index) => {
		let count = 1
		const current = group;
		groups.slice(index + 1).forEach(group2 => {
			if (current === group2) {
				count++;
			}
		});

		counts.push(count);
	});

	return Math.max(...counts);
}

function handleWrongGuess(interactive = false) {
	attemptsRemaining--;
	attemptBubbleObjects[attemptsRemaining].setUsedUp();
	storeAttemptsRemaining();

	if (interactive) {
		selectedWordObjects.forEach(wordObject => {
			wordObject.getWordButtonObject().shakeButtonTilty();
		});
	}
}

function persistCorrectGuess() {
	selectedWordObjects.forEach(word => {
		word.setGuessed();
	});
	
	for (let index = 0; index < selectedWordObjects.length; index++) {
		const current = selectedWordObjects[index]
		selectedWordObjects[index].getWordButtonObject().updateWordObject(
			wordButtonObjects[index + 4 * guessedCategoryObjects.length].getWordObject()
		)
		wordButtonObjects[index + 4 * guessedCategoryObjects.length].updateWordObject(current);
	}

	answerBannerObjects[guessedCategoryObjects.length].setShown(selectedWordObjects[0].getCategoryObject());

	guessedCategoryObjects.push(selectedWordObjects[0].getCategoryObject());

	storeGuessedCategories();
	
	unselectAll();
}

function checkGameEnd(interactive = false) {
	if (attemptsRemaining <= 0) {
		handleNoMoreAttempts(interactive);
	} else if (guessedCategoryObjects.length === 4) {
		setTimeout(() => {
			showResults();
    	}, 500);

	}

	if (attemptsRemaining <= 0 || guessedCategoryObjects.length === 4) {
		localStorage.setItem(STORAGE_KEY_ATTEMPTS_REMAINING + "_" + CURRENT_DATE, attemptsRemaining);
		const message = [
			"Beim nächsten Mal!",
			"Puh!",
			"Solide!",
			"Großartig!",
			"Perfekt!",
		]
		document.getElementById("congrats-title").textContent = message[attemptsRemaining];
	}
}

function handleNoMoreAttempts(interactive = false) {
	const openCategories = categoryObjects.filter(categoryObjects => !categoryObjects.isGuessed());

	console.log(interactive)
	console.log(openCategories)

	if (interactive) {
		setTimeout(() => {
			forEachWithDelay(openCategories, categoryObject => {
				persistCategory(categoryObject);
			}, showResults, 1000);
		}, 500);
	} else {
		openCategories.forEach(categoryObject => {
			persistCategory(categoryObject);
		});

		setTimeout(() => {
			showResults();
    	}, 500);
	}
}

function persistCategory(categoryObject) {
	unselectAll();

	categoryObject.getWordObjects().forEach(wordObject => {
		wordObject.selectWord();
	});

	persistCorrectGuess();
}
	
function displayMessage(durationInSeconds) {
    const messageElement = document.getElementById("message");
	if (messageElement.classList.contains("hide"))
    	messageElement.classList.toggle("hide");

    setTimeout(() => {
    	messageElement.classList.toggle("hide");
    }, durationInSeconds * 1000); // Convert seconds to milliseconds
}
