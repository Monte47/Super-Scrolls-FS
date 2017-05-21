# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "Monte", password: "password")
u2 = User.create(username: "Kurt V.", password: "password")
u3 = User.create(username: "Ernest H.", password: "password")
u4 = User.create(username: "Mark T.", password: "password")
u5 = User.create(username: "Steve K.", password: "password")
u6 = User.create(username: "Will S.", password: "password")
u7 = User.create(username: "James J", password: "password")
u8 = User.create(username: "Oscar W.", password: "password")
u9 = User.create(username: "Jane A", password: "password")
u10 = User.create(username: "Sylvia P", password: "password")
u11 = User.create(username: "Agatha C.", password: "password")
u12 = User.create(username: "Leo T.", password: "password")

Book.destroy_all

b1 = Book.create(title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                description: "The hero-narrator of The Catcher in the Rye is an ancient
                 child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances
                  that tend to preclude adult, secondhand description, he leaves his prep school in
                  Pennsylvania and goes underground in New York City for three days. The boy himself
                  is at once too simple and too complex for us to make any final comment about him or
                  his story. Perhaps the safest thing we can say about Holden is that he was born in
                  the world not just strongly attracted to beauty but, almost, hopelessly impaled on it.",
                image_url: "http://i.imgur.com/5gOuuxi.jpg")
b2 = Book.create(title: "Do Androids Dream of Electric Sheep?",
                author: "Phillip K. Dick",
                description: "In the futuristic year of 2019, Los Angeles has become a dark
                 and depressing metropolis, filled with urban decay. Rick Deckard, an ex-cop,
                 is a 'Blade Runner'. Blade runners are people assigned to assassinate 'replicants'.
                 The replicants are androids that look like real human beings. When four replicants commit
                 a bloody mutiny on the Off World colony, Deckard is called out of retirement to track down
                 the androids. As he tracks the replicants, eliminating them one by one, he soon comes
                 across another replicant, Rachel, who evokes human emotion, despite the fact that she's a
                 replicant herself. As Deckard closes in on the leader of the replicant group, his true hatred
                 toward artificial intelligence makes him question his own identity in this future world, including
                 what's human and what's not human.",
                image_url: "http://i.imgur.com/cfoTHi9.jpg")
b3 = Book.create(title: "Dune",
                author: "Frank Herbert",
                description: "In the year 10191, a spice called melange is the most valuable substance known in the
                universe, and its only source is the desert planet Arrakis. A royal decree awards Arrakis
                to Duke Leto Atreides and ousts his bitter enemies, the Harkonnens. However, when the Harkonnens
                violently seize back their fiefdom, it is up to Paul, Leto's son, to lead the Fremen, the natives
                of Arrakis, in a battle for control of the planet and its spice.",
                image_url: "http://i.imgur.com/mzb4BrZ.jpg")
b4 = Book.create(title: "American Psycho",
                  author: "Bret Easton Ellis",
                  description: "Set in Manhattan during the Wall Street boom of the late 1980s, American Psycho follows the life of wealthy young investment banker Patrick Bateman. Bateman, in his mid-20s when the story begins, narrates his everyday activities, from his recreational life among the Wall Street elite of New York to his forays into murder by night. Through present tense stream-of-consciousness narrative, Bateman describes his daily life, ranging from a series of Friday nights spent at nightclubs with his colleagues — where they snort cocaine, critique fellow club-goers' clothing, trade fashion advice, and question one another on proper etiquette — to his loveless engagement to fellow yuppie Evelyn and his contentious relationship with his brother and senile mother",
                  image_url: "http://i.imgur.com/VZmI36Z.jpg")
b5 = Book.create(title: "On the Origin of Species",
                  author: "Charles Darwin",
                  description: "Darwin's theory of natural selection issued a profound challenge to orthodox thought and belief: no being or species has been specifically created; all are locked into a pitiless struggle for existence, with extinction looming for those not fitted for the task.",
                  image_url: "http://i.imgur.com/Fs7oYcU.jpg")
b6 = Book.create(title: "Lolita",
                  author: "Vladimir Nabokov",
                  description: "Humbert Humbert - scholar, aesthete and romantic - has fallen completely and utterly in love with Lolita Haze, his landlady's gum-snapping, silky skinned twelve-year-old daughter. Reluctantly agreeing to marry Mrs Haze just to be close to Lolita, Humbert suffers greatly in the pursuit of romance; but when Lo herself starts looking for attention elsewhere, he will carry her off on a desperate cross-country misadventure, all in the name of Love. Hilarious, flamboyant, heart-breaking and full of ingenious word play, Lolita is an immaculate, unforgettable masterpiece of obsession, delusion and lust.",
                  image_url: "http://i.imgur.com/oyUhaiD.jpg")
b7 = Book.create(title: "Fear and Loathing in Las Vegas",
                  author: "Hunter S. Thompson",
                  description: "Fear and Loathing in Las Vegas is the best chronicle of drug-soaked, addle-brained, rollicking good times ever committed to the printed page. It is also the tale of a long weekend road trip that has gone down in the annals of American pop culture as one of the strangest journeys ever undertaken.",
                  image_url: "http://i.imgur.com/q07Wpm3.jpg")
b8 = Book.create(title: "A Clockwork Orange",
                  author: "Anthony Burgess",
                  description: "In Anthony Burgess's nightmare vision of the future, where criminals take over after dark, the story is told by the central character, Alex, who talks in a brutal invented slang that brilliantly renders his and his friends' social pathology. A Clockwork Orange is a frightening fable about good and evil, and the meaning of human freedom. When the state undertakes to reform Alex—to 'redeem' him—the novel asks, 'At what cost?'",
                  image_url: "http://i.imgur.com/f7hOD5H.jpg")
b9 = Book.create(title: "The Hobbit",
                  author: "J.R.R. Tolkien",
                  description: "Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.",
                  image_url: "http://i.imgur.com/xYmTmnA.jpg")
b10 = Book.create(title: "Slaughterhouse-Five",
                  author: "Kurt Vonnegut",
                  description: "Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time after he is abducted by aliens from the planet Tralfamadore. In a plot-scrambling display of virtuosity, we follow Pilgrim simultaneously through all phases of his life, concentrating on his (and Vonnegut's) shattering experience as an American prisoner of war who witnesses the firebombing of Dresden.",
                  image_url: "http://i.imgur.com/LwHwoSz.jpg")
b11 = Book.create(title: "Stranger in a Strange Land",
                  author: "Robert A. Heinlein",
                  description: "Valentine Michael Smith is a human being raised on Mars, newly returned to Earth. Among his people for the first time, he struggles to understand the social mores and prejudices of human nature that are so alien to him, while teaching them his own fundamental beliefs in grokking, watersharing, and love.",
                  image_url: "http://i.imgur.com/iyxphPg.jpg")
b12 = Book.create(title: "Shogun",
                  author: "James Clavell",
                  description: "A bold English adventurer. An invincible Japanese warlord. A beautiful woman torn between two ways of life, two ways of love. All brought together in an extraordinary saga of a time and a place aflame with conflict, passion, ambition, lust, and the struggle for power...",
                  image_url: "http://i.imgur.com/V6NPdyM.jpg")
b13 = Book.create(title: "Fight Club",
                  author: "Chuck Palahniuk",
                  description: "Every weekend, in basements and parking lots across the country, young men with good white-collar jobs and absent fathers take off their shoes and shirts and fight each other barehanded for as long as they have to. Then they go back to those jobs with blackened eyes and loosened teeth and the sense that they can handle anything. Fight Club is the invention of Tyler Durden, projectionist, waiter and dark, anarchic genius. And it's only the beginning of his plans for revenge on a world where cancer support groups have the corner on human warmth.",
                  image_url: "http://i.imgur.com/pOUTXLh.jpg")
b14 = Book.create(title: "1984",
                  author: "George Orwell",
                  description: "The year 1984 has come and gone, but George Orwell's prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of 'negative utopia' -a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words. No one can deny the novel's hold on the imaginations of whole generations, or the power of its admonitions -a power that seems to grow, not lessen, with the passage of time.",
                  image_url: "http://i.imgur.com/Ss773FB.jpg")
b15 = Book.create(title: "American Gods",
                  author: "Neil Gaiman",
                  description: "Locked behind bars for three years, Shadow did his time, quietly waiting for the magic day when he could return to Eagle Point, Indiana. A man no longer scared of what tomorrow might bring, all he wanted was to be with Laura, the wife he deeply loved, and start a new life.",
                  image_url: "http://i.imgur.com/hJk9Vul.jpg")
b16 = Book.create(title: "Ender's Game",
                  author: "Orson Scott Card",
                  description: "Andrew 'Ender' Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast.",
                  image_url: "http://i.imgur.com/4gOA2cN.jpg")
b17 = Book.create(title: "The Metamorphosis",
                  author: "Franz Kafka",
                  description: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.",
                  image_url: "http://i.imgur.com/gQdM5NK.jpg")
b18 = Book.create(title: "Siddhartha",
                  author: "Hermann Hesse",
                  description: "In the novel, Siddhartha, a young man, leaves his family for a contemplative life, then, restless, discards it for one of the flesh. He conceives a son, but bored and sickened by lust and greed, moves on again. Near despair, Siddhartha comes to a river where he hears a unique sound. This sound signals the true beginning of his life—the beginning of suffering, rejection, peace, and, finally, wisdom.",
                  image_url: "http://i.imgur.com/exVTlZ1.jpg")
b19 = Book.create(title: "Zen and the Art of Motorcycle Maintenance",
                  author: "Robert M. Pirsig",
                  description: "One of the most important & influential books written in the past half-century, Robert M. Pirsig's Zen & the Art of Motorcycle Maintenance is a powerfully moving & penetrating examination of how we live, a breathtaking meditation on how to live better. Here is the book that transformed a generation, an unforgettable narration of a summer motorcycle trip across America's Northwest, undertaken by a father & his young son. A story of love & fear--of growth, discovery & acceptance--that becomes a profound personal & philosophical odyssey into life's fundamental questions, this uniquely exhilarating modern classic is both touching & transcendent, resonant with the myriad confusions of existence & the small, essential triumphs that propel us forward",
                  image_url: "http://i.imgur.com/4x7IHKh.jpg")
b20 = Book.create(title: "The Hitchhiker's Guide to the Galaxy",
                  author: "Douglas Adams",
                  description: "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.",
                  image_url: "http://i.imgur.com/FSN89iv.jpg")
b21 = Book.create(title: "Guns, Germs, and Steel: The Fates of Human Societies",
                  author: "Jared Diamond",
                  description: "A global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race.
Until around 11,000 b.c., all peoples were still Stone Age hunter/gatherers. At that point, a great divide occurred in the rates that human societies evolved. In Eurasia, parts of the Americas, and Africa, farming became the prevailing mode of existence when indigenous wild plants and animals were domesticated by prehistoric planters and herders. As Jared Diamond vividly reveals, the very people who gained a head start in producing food would collide with preliterate cultures, shaping the modern world through conquest, displacement, and genocide.",
                  image_url: "http://i.imgur.com/T34D8EZ.jpg")
b22 = Book.create(title: "Animal Farm",
                  author: "George Orwell",
                  description: "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors.",
                  image_url: "http://i.imgur.com/RgYSLaH.jpg")
b23 = Book.create(title: "The Old Man and the Sea",
                  author: "Ernest Hemingway",
                  description: "It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
                  image_url: "http://i.imgur.com/7YQycC2.jpg")
b24 = Book.create(title: "Crime and Punishment",
                  author: "Fyodor Dostoyevsky",
                  description: "Through the story of the brilliant but conflicted young Raskolnikov and the murder he commits, Fyodor Dostoevsky explores the theme of redemption through suffering. Crime and Punishment put Dostoevsky at the forefront of Russian writers when it appeared in 1866 and is now one of the most famous and influential novels in world literature.",
                  image_url: "http://i.imgur.com/cqYeSBG.jpg")
b25 = Book.create(title: "The Count of Monte Cristo",
                  author: "Alexandre Dumas",
                  description: "Thrown in prison for a crime he has not committed, Edmond Dantès is confined to the grim fortress of If. There he learns of a great hoard of treasure hidden on the Isle of Monte Cristo and he becomes determined not only to escape, but also to unearth the treasure and use it to plot the destruction of the three men responsible for his incarceration.",
                  image_url: "http://i.imgur.com/lP9hYyy.png")
b26 = Book.create(title: "The Shining",
                  author: "Stephen King",
                  description: "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
                  image_url: "http://i.imgur.com/4tDJXFS.jpg")
b27 = Book.create(title: "Snow Crash",
                  author: "Neal Stephenson",
                  description: "In reality, Hiro Protagonist delivers pizza for Uncle Enzo’s CosoNostra Pizza Inc., but in the Metaverse he’s a warrior prince. Plunging headlong into the enigma of a new computer virus that’s striking down hackers everywhere, he races along the neon-lit streets on a search-and-destroy mission for the shadowy virtual villain threatening to bring about infocalypse. Snow Crash is a mind-altering romp through a future America so bizarre, so outrageous…you’ll recognize it immediately.",
                  image_url: "http://i.imgur.com/C1srCsH.jpg")
b28 = Book.create(title: "The Adventures of Huckleberry Finn",
                  author: "Mark Twain",
                  description: "Of all the contenders for the title of The Great American Novel, none has a better claim than The Adventures of Huckleberry Finn. Intended at first as a simple story of a boy's adventures in the Mississippi Valley - a sequel to The Adventures of Tom Sawyer - the book grew and matured under Twain's hand into a work of immeasurable richness and complexity. More than a century after its publication, the critical debate over the symbolic significance of Huck's and Jim's voyage is still fresh, and it remains a major work that can be enjoyed at many levels: as an incomparable adventure story and as a classic of American humor.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495390745/huck-finn_dlx6lg.jpg")
b29 = Book.create(title: "A Room of One's Own",
                  author: "Virginia Woolf",
                  description: "A Room of One's Own is an extended essay by Virginia Woolf. First published on 24 October 1929, the essay was based on a series of lectures she delivered at Newnham College and Girton College, two women's colleges at Cambridge University in October 1928. While this extended essay in fact employs a fictional narrator and narrative to explore women both as writers of and characters in fiction, the manuscript for the delivery of the series of lectures, titled Women and Fiction, and hence the essay, are considered non-fiction. The essay is generally seen as a feminist text, and is noted in its argument for both a literal and figural space for women writers within a literary tradition dominated by patriarchy.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495391055/220px-ARoomOfOnesOwn_vmjhm7.jpg")
b30 = Book.create(title: "The Sound and the Fury",
                  author: "William Faulkner",
                  description: "The Sound and the Fury is the tragedy of the Compson family, featuring some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character’s voices and actions mesh to create what is arguably Faulkner’s masterpiece and one of the greatest novels of the twentieth century.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495391300/the-sound-fury_ifbv6i.jpg")
b31 = Book.create(title: "Tales of the Jazz Age",
                  author: "F. Scott Fitzgerald",
                  description: "Tales of the Jazz Age (1922) is a collection of eleven short stories by F. Scott Fitzgerald. Divided into three separate parts, according to subject matter, it includes one of his better-known short stories, 'The Curious Case of Benjamin Button'.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495391423/tales-jazz-age_qrhbdn.jpg")
b32 = Book.create(title: "Othello",
                  author: "William Shakespeare",
                  description: "In Othello, Shakespeare creates a powerful drama of a marriage that begins with fascination (between the exotic Moor Othello and the Venetian lady Desdemona), with elopement, and with intense mutual devotion and that ends precipitately with jealous rage and violent deaths. He sets this story in the romantic world of the Mediterranean, moving the action from Venice to the island of Cyprus and giving it an even more exotic coloring with stories of Othello's African past. Shakespeare builds so many differences into his hero and heroine—differences of race, of age, of cultural background—that one should not, perhaps, be surprised that the marriage ends disastrously. But most people who see or read the play feel that the love that the play presents between Othello and Desdemona is so strong that it would have overcome all these differences were it not for the words and actions of Othello's standard-bearer, Iago, who hates Othello and sets out to destroy him by destroying his love for Desdemona. As Othello succumbs to Iago's insinuations that Desdemona is unfaithful, fascination—which dominates the early acts of the play—turns to horror, especially for the audience. We are confronted by spectacles of a generous and trusting Othello in the grip of Iago's schemes; of an innocent Desdemona, who has given herself up entirely to her love for Othello only to be subjected to his horrifying verbal and physical assaults, the outcome of Othello's mistaken convictions about her faithlessness.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495391632/Othello_qdmjna.jpg")
b33 = Book.create(title: "Ulysses",
                  author: "James Joyce",
                  description: "Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.[4][5] Ulysses is the Latinised name of Odysseus, the hero of Homer's epic poem Odyssey, and the novel establishes a series of parallels between the poem and the novel, with structural correspondences between the characters and experiences of Leopold Bloom and Odysseus, Molly Bloom and Penelope, and Stephen Dedalus and Telemachus, in addition to events and themes of the early twentieth century context of modernism, Dublin, and Ireland's relationship to Britain. The novel imitates registers of centuries of English literature and is highly allusive.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495391869/Ulysses_V1_apqhew.png")
b34 = Book.create(title: "Heart of Darkness",
                  author: "Joseph Conrad",
                  description: "Dark allegory describes Marlow’s journey up the Congo River and his meeting with, and fascination by, Mr. Kurtz, a mysterious personage who dominates the unruly inhabitants of the region. Masterly blend of adventure, character development, psychological penetration. Considered by many Conrad’s finest, most enigmatic story.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495392179/heart-of-darkness_a0secz.jpg")
b35 = Book.create(title: "Odyssè",
                  author: "Homer",
                  description: "'Muse, tell me of a man: a man of much resource, who was made to wander far and long, after he had sacked the sacred city of Troy. Many were the men whose lands he saw and came to know their thinking: many too the miseries at sea, which he suffered in his heart, as he sought to win his own life and the safety of his companions.' Recounting the epic journey home of Odysseus from the Trojan War, The Odyssey - alongside its sister poem The Iliad - stands as the well-spring of Western Civilisation and culture, an inspiration to poets, writers and thinkers for thousands of years since. This authoritative prose translation by Martin Hammond brings Homer's great poem of homecoming to life as Odysseus battles through such familiar dangers as the cave of the Cyclops, the call of the Sirens and his hostile reception back in his native land of Ithaca.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495392389/odyssey_zhfxiy.jpg")
b36 = Book.create(title: "Tao Te Ching",
                  author: "Lao Tzu",
                  description: "Written most probably in the sixth century B.C. by Lao Tsu, this esoteric but infintely practical book has been translated into English more frequently than any other work except the Bible. Gia-fu Feng and Jane English's superb translation—the most accessible and authoritative modern English translation—offers the essence of each word and makes Lao Tsu's teaching immediate and alive. This edition includes an introduction and notes by the well-known writer and scholar of philosophy and comparative religion, Jacob Needleman.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495392549/tao_vofdqy.jpg")
b37 = Book.create(title: "A Brief History of Time",
                  author: "Stephen Hawking",
                  description: "In the ten years since its publication in 1988, Stephen Hawking's classic work has become a landmark volume in scientific writing, with more than nine million copies in forty languages sold worldwide. That edition was on the cutting edge of what was then known about the origins and nature of the universe. But the intervening years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic worlds. These observations have confirmed many of Professor Hawking's theoretical predictions in the first edition of his book, including the recent discoveries of the Cosmic Background Explorer satellite (COBE), which probed back in time to within 300,000 years of the universe's beginning and revealed wrinkles in the fabric of space-time that he had projected. Eager to bring to his original text the new knowledge revealed by these observations, as well as his own recent research, Professor Hawking has prepared a new introduction to the book, written an entirely new chapter on wormholes and time travel, and updated the chapters throughout.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495392682/brief-time_f8efwi.jpg")
b38 = Book.create(title: "The Tale of Genji",
                  author: "Murasaki Shikibu",
                  description: "Written in the eleventh century, this portrait of courtly life in medieval Japan is widely celebrated as the world's first novel. The Tale of Genji is a very long romance, running to fifty-four chapters and describing the court life of Heian Japan, from the tenth century into the eleventh.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495392933/tale-of-genji_y1vfc9.jpg")
b39 = Book.create(title: "All Quiet on the Western Front",
                  author: "Erich Maria Remarque",
                  description: "All Quiet on the Western Front (German: Im Westen nichts Neues, lit. 'In the West Nothing New') is a novel by Erich Maria Remarque, a German veteran of World War I. The book describes the German soldiers' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front.",
                  image_url: "http://res.cloudinary.com/dbc0rv0hu/image/upload/v1495393126/all_quiet_on_the_western_front_by_nguy0699-d1sdwh4_oxrvng.jpg")


Bookshelf.destroy_all

bs1 = Bookshelf.create(name: "My favorites", user_id: u1.id)
bs2 = Bookshelf.create(name: "Mom's favorites", user_id: u1.id)
bs3 = Bookshelf.create(name: "Summertime Beach Books", user_id: u1.id)
bs4 = Bookshelf.create(name: "Books I read in College", user_id: u2.id)

Shelving.destroy_all

s1 = Shelving.create(book_id: b26.id, bookshelf_id: bs3.id)
s2 = Shelving.create(book_id: b27.id, bookshelf_id: bs3.id)
s3 = Shelving.create(book_id: b16.id, bookshelf_id: bs3.id)
s4 = Shelving.create(book_id: b23.id, bookshelf_id: bs3.id)
s5 = Shelving.create(book_id: b22.id, bookshelf_id: bs3.id)
s6 = Shelving.create(book_id: b18.id, bookshelf_id: bs3.id)
s7 = Shelving.create(book_id: b5.id, bookshelf_id: bs2.id)
s8 = Shelving.create(book_id: b7.id, bookshelf_id: bs2.id)
s9 = Shelving.create(book_id: b15.id, bookshelf_id: bs2.id)
s10 = Shelving.create(book_id: b20.id, bookshelf_id: bs2.id)
s11 = Shelving.create(book_id: b9.id, bookshelf_id: bs2.id)
s12 = Shelving.create(book_id: b13.id, bookshelf_id: bs2.id)
s13 = Shelving.create(book_id: b12.id, bookshelf_id: bs1.id)
s14 = Shelving.create(book_id: b6.id, bookshelf_id: bs1.id)
s15 = Shelving.create(book_id: b21.id, bookshelf_id: bs1.id)
s16 = Shelving.create(book_id: b24.id, bookshelf_id: bs1.id)

Review.destroy_all

r1 = Review.create(book_id: b1.id, user_id: u2.id, body: "first")
r2 = Review.create(book_id: b1.id, user_id: u1.id, body: "second")
r3 = Review.create(book_id: b1.id, user_id: u3.id, body: "third")
r4 = Review.create(book_id: b1.id, user_id: u4.id, body: "fourth")
r5 = Review.create(book_id: b1.id, user_id: u5.id, body: "fifth")
r12 = Review.create(book_id: b2.id, user_id: u12.id, body: "Dave")
r11 = Review.create(book_id: b2.id, user_id: u11.id, body: "That")
r10 = Review.create(book_id: b2.id, user_id: u10.id, body: "Do")
r9 = Review.create(book_id: b2.id, user_id: u9.id, body: "Can't")
r8 = Review.create(book_id: b2.id, user_id: u8.id, body: "I")
r7 = Review.create(book_id: b2.id, user_id: u7.id, body: "Afraid")
r6 = Review.create(book_id: b2.id, user_id: u6.id, body: "I'm")
