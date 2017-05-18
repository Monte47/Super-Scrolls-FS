# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "Monte", password: "password")

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
b4 = Book.create(title: "The Catcher in the Rye 2",
                author: "J.D. Salinger",
                description: "The hero-narrator of The Catcher in the Rye is an ancient
                 child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances
                  that tend to preclude adult, secondhand description, he leaves his prep school in
                  Pennsylvania and goes underground in New York City for three days. The boy himself
                  is at once too simple and too complex for us to make any final comment about him or
                  his story. Perhaps the safest thing we can say about Holden is that he was born in
                  the world not just strongly attracted to beauty but, almost, hopelessly impaled on it.",
                image_url: "http://i.imgur.com/5gOuuxi.jpg")
b5 = Book.create(title: "Do Androids Dream of Electric Sheep? 2",
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
b6 = Book.create(title: "Dune 2",
                author: "Frank Herbert",
                description: "In the year 10191, a spice called melange is the most valuable substance known in the
                universe, and its only source is the desert planet Arrakis. A royal decree awards Arrakis
                to Duke Leto Atreides and ousts his bitter enemies, the Harkonnens. However, when the Harkonnens
                violently seize back their fiefdom, it is up to Paul, Leto's son, to lead the Fremen, the natives
                of Arrakis, in a battle for control of the planet and its spice.",
                image_url: "http://i.imgur.com/mzb4BrZ.jpg")
b7 = Book.create(title: "The Catcher in the Rye 3",
                author: "J.D. Salinger",
                description: "The hero-narrator of The Catcher in the Rye is an ancient
                 child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances
                  that tend to preclude adult, secondhand description, he leaves his prep school in
                  Pennsylvania and goes underground in New York City for three days. The boy himself
                  is at once too simple and too complex for us to make any final comment about him or
                  his story. Perhaps the safest thing we can say about Holden is that he was born in
                  the world not just strongly attracted to beauty but, almost, hopelessly impaled on it.",
                image_url: "http://i.imgur.com/5gOuuxi.jpg")
b8 = Book.create(title: "Do Androids Dream of Electric Sheep? 3",
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
b9 = Book.create(title: "Dune 3",
                author: "Frank Herbert",
                description: "In the year 10191, a spice called melange is the most valuable substance known in the
                universe, and its only source is the desert planet Arrakis. A royal decree awards Arrakis
                to Duke Leto Atreides and ousts his bitter enemies, the Harkonnens. However, when the Harkonnens
                violently seize back their fiefdom, it is up to Paul, Leto's son, to lead the Fremen, the natives
                of Arrakis, in a battle for control of the planet and its spice.",
                image_url: "http://i.imgur.com/mzb4BrZ.jpg")
