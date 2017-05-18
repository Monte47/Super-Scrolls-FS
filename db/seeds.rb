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

b1 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b2 = Book.create(title: "Do Androids Dream of Electric Sheep",
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
b3 = Book.create(title: "The Catcher in the Rye3", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b4 = Book.create(title: "The Catcher in the Rye4", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b5 = Book.create(title: "The Catcher in the Rye5", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b6 = Book.create(title: "The Catcher in the Rye6", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b7 = Book.create(title: "The Catcher in the Rye7", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b8 = Book.create(title: "The Catcher in the Rye8", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b9 = Book.create(title: "The Catcher in the Rye9", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
