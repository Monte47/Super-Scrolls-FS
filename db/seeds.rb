# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "Monte", password: "pasword")

Book.destroy_all

b1 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b2 = Book.create(title: "The Catcher in the Rye2", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b3 = Book.create(title: "The Catcher in the Rye3", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b4 = Book.create(title: "The Catcher in the Rye4", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b5 = Book.create(title: "The Catcher in the Rye5", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b6 = Book.create(title: "The Catcher in the Rye6", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b7 = Book.create(title: "The Catcher in the Rye7", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b8 = Book.create(title: "The Catcher in the Rye8", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
b9 = Book.create(title: "The Catcher in the Rye9", author: "J.D. Salinger", description: "Holden wears a red hat.", image_url: "http://i.imgur.com/5gOuuxi.jpg")
