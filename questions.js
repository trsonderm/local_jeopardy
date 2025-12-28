const GAMES = [
    // GAME 1
    {
        id: 0,
        name: "General Knowledge",
        round1: [
            {
                category: "HISTORY",
                clues: [
                    { value: 200, question: "This emperor was the first of the Roman Empire, ruling from 27 BC until his death in AD 14.", answers: ["Augustus", "Julius Caesar", "Nero", "Trajan"], correct: 0 },
                    { value: 400, question: "The Magna Carta was signed in this year.", answers: ["1215", "1066", "1492", "1776"], correct: 0 },
                    { value: 600, question: "This conflict was fought between the House of Lancaster and the House of York.", answers: ["Wars of the Roses", "Hundred Years' War", "English Civil War", "Thirty Years' War"], correct: 0 },
                    { value: 800, question: "He was the first President of the United States to live in the White House.", answers: ["John Adams", "George Washington", "Thomas Jefferson", "James Madison"], correct: 0 },
                    { value: 1000, question: "The Battle of Waterloo was fought in this present-day country.", answers: ["Belgium", "France", "Germany", "Netherlands"], correct: 0 }
                ]
            },
            {
                category: "SCIENCE",
                clues: [
                    { value: 200, question: "This element has the chemical symbol 'Fe'.", answers: ["Iron", "Fluorine", "Francium", "Fermium"], correct: 0 },
                    { value: 400, question: "The powerhouse of the cell.", answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"], correct: 0 },
                    { value: 600, question: "This planet is known as the 'Red Planet'.", answers: ["Mars", "Jupiter", "Venus", "Saturn"], correct: 0 },
                    { value: 800, question: "The speed of light in a vacuum is approximately this many kilometers per second.", answers: ["300,000", "150,000", "1,000,000", "30,000"], correct: 0 },
                    { value: 1000, question: "This physicist developed the theory of general relativity.", answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Marie Curie"], correct: 0 }
                ]
            },
            {
                category: "LITERATURE",
                clues: [
                    { value: 200, question: "This author wrote 'Pride and Prejudice'.", answers: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"], correct: 0 },
                    { value: 400, question: "The Great Gatsby is set in this fictional area of Long Island.", answers: ["West Egg", "East Egg", "North Shore", "South Hampton"], correct: 0 },
                    { value: 600, question: "This character says 'To be, or not to be' in a Shakespeare play.", answers: ["Hamlet", "Macbeth", "Othello", "Romeo"], correct: 0 },
                    { value: 800, question: "He wrote '1984' and 'Animal Farm'.", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"], correct: 0 },
                    { value: 1000, question: "This epic poem by Homer tells the story of the Trojan War.", answers: ["The Iliad", "The Odyssey", "The Aeneid", "Beowulf"], correct: 0 }
                ]
            },
            {
                category: "GEOGRAPHY",
                clues: [
                    { value: 200, question: "The capital of Australia.", answers: ["Canberra", "Sydney", "Melbourne", "Perth"], correct: 0 },
                    { value: 400, question: "This river is the longest in the world.", answers: ["Nile", "Amazon", "Yangtze", "Mississippi"], correct: 0 },
                    { value: 600, question: "This mountain range separates Europe from Asia.", answers: ["Ural Mountains", "Alps", "Himalayas", "Rocky Mountains"], correct: 0 },
                    { value: 800, question: "The smallest country in the world by land area.", answers: ["Vatican City", "Monaco", "Nauru", "San Marino"], correct: 0 },
                    { value: 1000, question: "This desert is the largest hot desert in the world.", answers: ["Sahara", "Arabian", "Gobi", "Kalahari"], correct: 0 }
                ]
            },
            {
                category: "SPORTS",
                clues: [
                    { value: 200, question: "This country won the first FIFA World Cup in 1930.", answers: ["Uruguay", "Brazil", "Argentina", "Italy"], correct: 0 },
                    { value: 400, question: "In tennis, a score of zero is known as this.", answers: ["Love", "Nil", "Zero", "Naught"], correct: 0 },
                    { value: 600, question: "This city hosted the 2008 Summer Olympics.", answers: ["Beijing", "Athens", "London", "Sydney"], correct: 0 },
                    { value: 800, question: "The number of players on a standard baseball field for one team.", answers: ["9", "10", "11", "8"], correct: 0 },
                    { value: 1000, question: "This boxer was known as 'The Greatest' and 'The Louisville Lip'.", answers: ["Muhammad Ali", "Joe Frazier", "George Foreman", "Mike Tyson"], correct: 0 }
                ]
            },
            {
                category: "POP CULTURE",
                clues: [
                    { value: 200, question: "The name of the coffee shop in the sitcom 'Friends'.", answers: ["Central Perk", "Monk's Cafe", "Luke's Diner", "The Dot"], correct: 0 },
                    { value: 400, question: "This artist released the album 'Thriller' in 1982.", answers: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"], correct: 0 },
                    { value: 600, question: "The highest-grossing film of all time (unadjusted for inflation) as of 2023.", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], correct: 0 },
                    { value: 800, question: "This video game franchise features a plumber named Mario.", answers: ["Super Mario", "Sonic the Hedgehog", "The Legend of Zelda", "Metroid"], correct: 0 },
                    { value: 1000, question: "She is known as the 'Queen of Pop'.", answers: ["Madonna", "Britney Spears", "Lady Gaga", "Beyoncé"], correct: 0 }
                ]
            }
        ],
        round2: [
            {
                category: "ADVANCED MATH",
                clues: [
                    { value: 400, question: "The result of 2 to the power of 10.", answers: ["1024", "512", "2048", "256"], correct: 0 },
                    { value: 800, question: "The derivative of x squared.", answers: ["2x", "x", "x^3/3", "1"], correct: 0 },
                    { value: 1200, question: "A polygon with 8 sides.", answers: ["Octagon", "Hexagon", "Decagon", "Heptagon"], correct: 0 },
                    { value: 1600, question: "The value of Pi to two decimal places.", answers: ["3.14", "3.15", "3.13", "3.16"], correct: 0 },
                    { value: 2000, question: "This mathematician is known for the uncertainty principle.", answers: ["Heisenberg", "Schrödinger", "Planck", "Bohr"], correct: 0 }
                ]
            },
            {
                category: "ANATOMY",
                clues: [
                    { value: 400, question: "The largest organ in the human body.", answers: ["Skin", "Liver", "Brain", "Heart"], correct: 0 },
                    { value: 800, question: "The technical name for the kneecap.", answers: ["Patella", "Femur", "Tibia", "Fibula"], correct: 0 },
                    { value: 1200, question: "This part of the brain controls balance and coordination.", answers: ["Cerebellum", "Cerebrum", "Brainstem", "Thalamus"], correct: 0 },
                    { value: 1600, question: "The number of chambers in the human heart.", answers: ["4", "2", "3", "5"], correct: 0 },
                    { value: 2000, question: "This bone is the longest and strongest in the human body.", answers: ["Femur", "Humerus", "Tibia", "Fibula"], correct: 0 }
                ]
            },
            {
                category: "WORLD LEADERS",
                clues: [
                    { value: 400, question: "The first female Prime Minister of the United Kingdom.", answers: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"], correct: 0 },
                    { value: 800, question: "He was the President of South Africa from 1994 to 1999.", answers: ["Nelson Mandela", "Thabo Mbeki", "F.W. de Klerk", "Jacob Zuma"], correct: 0 },
                    { value: 1200, question: "The current (2024) President of France.", answers: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Marine Le Pen"], correct: 0 },
                    { value: 1600, question: "This leader initiated the Great Leap Forward in China.", answers: ["Mao Zedong", "Deng Xiaoping", "Xi Jinping", "Sun Yat-sen"], correct: 0 },
                    { value: 2000, question: "The longest-reigning monarch in British history.", answers: ["Queen Elizabeth II", "Queen Victoria", "King George III", "King Henry VIII"], correct: 0 }
                ]
            },
            {
                category: "TECHNOLOGY",
                clues: [
                    { value: 400, question: "This company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne.", answers: ["Apple", "Microsoft", "Google", "IBM"], correct: 0 },
                    { value: 800, question: "The year the first iPhone was released.", answers: ["2007", "2005", "2009", "2003"], correct: 0 },
                    { value: 1200, question: "HTML stands for this.", answers: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Link", "HyperTool Markup Language"], correct: 0 },
                    { value: 1600, question: "This social media platform was originally called 'TheFacebook'.", answers: ["Facebook", "Twitter", "Instagram", "LinkedIn"], correct: 0 },
                    { value: 2000, question: "The programming language created by Guido van Rossum.", answers: ["Python", "Java", "C++", "Ruby"], correct: 0 }
                ]
            },
            {
                category: "MYTHOLOGY",
                clues: [
                    { value: 400, question: "The Greek god of the sea.", answers: ["Poseidon", "Zeus", "Hades", "Apollo"], correct: 0 },
                    { value: 800, question: "In Norse mythology, he is the god of thunder.", answers: ["Thor", "Odin", "Loki", "Baldur"], correct: 0 },
                    { value: 1200, question: "The Roman equivalent of the Greek god Zeus.", answers: ["Jupiter", "Mars", "Neptune", "Mercury"], correct: 0 },
                    { value: 1600, question: "This creature has the head of a bull and the body of a man.", answers: ["Minotaur", "Centaur", "Satyr", "Griffin"], correct: 0 },
                    { value: 2000, question: "The Egyptian god of the afterlife.", answers: ["Osiris", "Anubis", "Ra", "Horus"], correct: 0 }
                ]
            },
            {
                category: "FOOD & DRINK",
                clues: [
                    { value: 400, question: "The main ingredient in guacamole.", answers: ["Avocado", "Tomato", "Onion", "Pepper"], correct: 0 },
                    { value: 800, question: "This spice is the most expensive in the world by weight.", answers: ["Saffron", "Vanilla", "Cardamom", "Cinnamon"], correct: 0 },
                    { value: 1200, question: "Sushi originated in this country.", answers: ["Japan", "China", "Korea", "Thailand"], correct: 0 },
                    { value: 1600, question: "This cheese is made from sheep's milk.", answers: ["Roquefort", "Cheddar", "Brie", "Gouda"], correct: 0 },
                    { value: 2000, question: "The national dish of Spain.", answers: ["Paella", "Tapas", "Gazpacho", "Tortilla Española"], correct: 0 }
                ]
            }
        ],
        final: {
            category: "SPACE EXPLORATION",
            question: "This spacecraft was the first to land humans on the Moon.",
            answers: ["Apollo 11", "Apollo 13", "Sputnik 1", "Voyager 1"],
            correct: 0
        }
    },
    // Placeholders for Game 2, 3, 4 to save space for now, will populate uniquely if needed or duplicate structure
    {
        id: 1,
        name: "Science & Tech",
        round1: [
            {
                category: "COMPUTER HISTORY",
                clues: [
                    { value: 200, question: "This woman is considered the first computer programmer.", answers: ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "Katherine Johnson"], correct: 0 },
                    { value: 400, question: "The first mechanical computer, designed by Charles Babbage.", answers: ["Analytical Engine", "Difference Engine", "ENIAC", "Colossus"], correct: 0 },
                    { value: 600, question: "The year the World Wide Web was invented.", answers: ["1989", "1991", "1985", "1995"], correct: 0 },
                    { value: 800, question: "This company introduced the Macintosh in 1984.", answers: ["Apple", "IBM", "Microsoft", "Xerox"], correct: 0 },
                    { value: 1000, question: "The first computer virus, created in 1971.", answers: ["Creeper", "Reaper", "Morris Worm", "ILOVEYOU"], correct: 0 }
                ]
            },
            {
                category: "PHYSICS",
                clues: [
                    { value: 200, question: "Newton's First Law is also known as the law of this.", answers: ["Inertia", "Gravity", "Motion", "Force"], correct: 0 },
                    { value: 400, question: "This particle has a negative charge.", answers: ["Electron", "Proton", "Neutron", "Photon"], correct: 0 },
                    { value: 600, question: "The unit of electrical resistance.", answers: ["Ohm", "Volt", "Ampere", "Watt"], correct: 0 },
                    { value: 800, question: "This force holds the nucleus of an atom together.", answers: ["Strong Nuclear Force", "Weak Nuclear Force", "Electromagnetism", "Gravity"], correct: 0 },
                    { value: 1000, question: "He proposed the uncertainty principle.", answers: ["Heisenberg", "Schrödinger", "Bohr", "Einstein"], correct: 0 }
                ]
            },
            {
                category: "BIOLOGY",
                clues: [
                    { value: 200, question: "The basic unit of life.", answers: ["Cell", "Atom", "Molecule", "Organ"], correct: 0 },
                    { value: 400, question: "This molecule carries genetic information.", answers: ["DNA", "RNA", "Protein", "Lipid"], correct: 0 },
                    { value: 600, question: "The process by which plants make food.", answers: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"], correct: 0 },
                    { value: 800, question: "This organelle is the site of protein synthesis.", answers: ["Ribosome", "Nucleus", "Mitochondria", "Golgi Body"], correct: 0 },
                    { value: 1000, question: "The constant internal environment maintained by living things.", answers: ["Homeostasis", "Metabolism", "Evolution", "Adaptation"], correct: 0 }
                ]
            },
            {
                category: "MATH",
                clues: [
                    { value: 200, question: "The result of dividing by zero.", answers: ["Undefined", "Zero", "Infinity", "One"], correct: 0 },
                    { value: 400, question: "A triangle with all sides equal.", answers: ["Equilateral", "Isosceles", "Scalene", "Right"], correct: 0 },
                    { value: 600, question: "The set of all counting numbers.", answers: ["Natural Numbers", "Integers", "Rational Numbers", "Real Numbers"], correct: 0 },
                    { value: 800, question: "A number that is only divisible by 1 and itself.", answers: ["Prime", "Composite", "Odd", "Even"], correct: 0 },
                    { value: 1000, question: "The square root of 144.", answers: ["12", "14", "10", "16"], correct: 0 }
                ]
            },
            {
                category: "ASTRONOMY",
                clues: [
                    { value: 200, question: "The largest planet in our solar system.", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 0 },
                    { value: 400, question: "Our galaxy.", answers: ["Milky Way", "Andromeda", "Triangulum", "Sombrero"], correct: 0 },
                    { value: 600, question: "The star at the center of our solar system.", answers: ["Sun", "Proxima Centauri", "Betelgeuse", "Sirius"], correct: 0 },
                    { value: 800, question: "This planet has the most extensive ring system.", answers: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 0 },
                    { value: 1000, question: "The event horizon is associated with this object.", answers: ["Black Hole", "Neutron Star", "Pulsar", "Quasar"], correct: 0 }
                ]
            },
            {
                category: "CHEMISTRY",
                clues: [
                    { value: 200, question: "The chemical symbol for Gold.", answers: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
                    { value: 400, question: "The pH of a neutral solution.", answers: ["7", "1", "14", "10"], correct: 0 },
                    { value: 600, question: "This gas makes up the majority of Earth's atmosphere.", answers: ["Nitrogen", "Oxygen", "Argon", "Carbon Dioxide"], correct: 0 },
                    { value: 800, question: "The smallest unit of an element.", answers: ["Atom", "Molecule", "Compound", "Mixture"], correct: 0 },
                    { value: 1000, question: "This element is a noble gas.", answers: ["Neon", "Hydrogen", "Oxygen", "Chlorine"], correct: 0 }
                ]
            }
        ],
        round2: [
            {
                category: "INVENTIONS",
                clues: [
                    { value: 400, question: "He invented the light bulb.", answers: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Wright Brothers"], correct: 0 },
                    { value: 800, question: "He invented the telephone.", answers: ["Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi", "Samuel Morse"], correct: 0 },
                    { value: 1200, question: "The year the printing press was invented.", answers: ["1440", "1500", "1300", "1600"], correct: 0 },
                    { value: 1600, question: "He invented the World Wide Web.", answers: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"], correct: 0 },
                    { value: 2000, question: "He invented the telegraph.", answers: ["Samuel Morse", "Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], correct: 0 }
                ]
            },
            {
                category: "ROBOTICS",
                clues: [
                    { value: 400, question: "The word 'robot' comes from this language.", answers: ["Czech", "Russian", "German", "Polish"], correct: 0 },
                    { value: 800, question: "This robot explores Mars.", answers: ["Curiosity", "Voyager", "Hubble", "Apollo"], correct: 0 },
                    { value: 1200, question: "Laws of Robotics author.", answers: ["Isaac Asimov", "Arthur C. Clarke", "Philip K. Dick", "H.G. Wells"], correct: 0 },
                    { value: 1600, question: "Honda's humanoid robot.", answers: ["ASIMO", "Pepper", "Atlas", "Spot"], correct: 0 },
                    { value: 2000, question: "The study of robots.", answers: ["Robotics", "Cybernetics", "Automation", "Mechatronics"], correct: 0 }
                ]
            },
            {
                category: "MEDICINE",
                clues: [
                    { value: 400, question: "He discovered penicillin.", answers: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"], correct: 0 },
                    { value: 800, question: "This vaccine eradicated smallpox.", answers: ["Smallpox Vaccine", "Polio Vaccine", "Measles Vaccine", "Flu Vaccine"], correct: 0 },
                    { value: 1200, question: "The structure of DNA was discovered by.", answers: ["Watson and Crick", "Franklin and Wilkins", "Darwin and Mendel", "Hooke and Leeuwenhoek"], correct: 0 },
                    { value: 1600, question: "This instrument measures blood pressure.", answers: ["Sphygmomanometer", "Thermometer", "Stethoscope", "Otoscope"], correct: 0 },
                    { value: 2000, question: "The first heart transplant was performed in this country.", answers: ["South Africa", "USA", "UK", "Germany"], correct: 0 }
                ]
            },
            {
                category: "GEOLOGY",
                clues: [
                    { value: 400, question: "Current geological epoch.", answers: ["Holocene", "Pleistocene", "Pliocene", "Miocene"], correct: 0 },
                    { value: 800, question: "Hardest mineral.", answers: ["Diamond", "Quartz", "Topaz", "Corundum"], correct: 0 },
                    { value: 1200, question: "Molten rock underground.", answers: ["Magma", "Lava", "Basalt", "Granite"], correct: 0 },
                    { value: 1600, question: "Study of earthquakes.", answers: ["Seismology", "Volcanology", "Meteorology", "Oceanography"], correct: 0 },
                    { value: 2000, question: "Supercontinent.", answers: ["Pangaea", "Gondwana", "Laurasia", "Rodinia"], correct: 0 }
                ]
            },
            {
                category: "CODING",
                clues: [
                    { value: 400, question: "Standard query language.", answers: ["SQL", "HTML", "CSS", "JS"], correct: 0 },
                    { value: 800, question: "This creates styles for web pages.", answers: ["CSS", "HTML", "JS", "PHP"], correct: 0 },
                    { value: 1200, question: "Loop type.", answers: ["While", "If", "Switch", "Var"], correct: 0 },
                    { value: 1600, question: "Data structure LIFO.", answers: ["Stack", "Queue", "Array", "List"], correct: 0 },
                    { value: 2000, question: "Version control system.", answers: ["Git", "SVN", "Mercurial", "Perforce"], correct: 0 }
                ]
            },
            {
                category: "INTERNET",
                clues: [
                    { value: 400, question: "Global system of interconnected computer networks.", answers: ["Internet", "Web", "Cloud", "Net"], correct: 0 },
                    { value: 800, question: "Protocol for sending email.", answers: ["SMTP", "POP", "IMAP", "HTTP"], correct: 0 },
                    { value: 1200, question: "Domain Name System.", answers: ["DNS", "URL", "IP", "ISP"], correct: 0 },
                    { value: 1600, question: "Secure version of HTTP.", answers: ["HTTPS", "SHTTP", "HTTP2", "HTTP3"], correct: 0 },
                    { value: 2000, question: "Unique address for a device on a network.", answers: ["IP Address", "MAC Address", "URL", "DNS"], correct: 0 }
                ]
            }
        ],
        final: { category: "FAMOUS SCIENTISTS", question: "This physicist won the Nobel Prize for the photoelectric effect, not relativity.", answers: ["Albert Einstein", "Niels Bohr", "Max Planck", "Heisenberg"], correct: 0 }
    },
    { id: 2, name: "History", round1: [], round2: [], final: { category: "TBD", question: "TBD", answers: [], correct: 0 } },
    { id: 3, name: "Pop Culture", round1: [], round2: [], final: { category: "TBD", question: "TBD", answers: [], correct: 0 } }
];

// Helper to deep clone and randomize for other games if empty (for prototype)
// In a real scenario, we'd fill all 4 manually.
// For this step, I will ensure Game 1 is playable.
