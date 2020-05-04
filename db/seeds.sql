USE looksie_db;

INSERT INTO destinations (username, password, email, firstname, lastName, createdAt, updatedAt)
VALUES ("brickCollector92", "password", "brick@gmail.com", "Jonathan", "Watson", now(), now());

select * from destinations;

INSERT INTO crime (name, numberOfPieces, setNumber, imageURL, quantity, createdAt, updatedAt)
VALUES ("Pirates of Barracuda Bay", 2545, 21322, "https://www.lego.com/cdn/cs/set/assets/blt336f5ca70e5b1526/21322_alt1.jpg?fit=bounds&format=jpg&quality=80&auto=webp&width=1600&height=1600&dpr=1", 1, now(), now());

select * from crime;

INSERT INTO userlegos (userId, legoId)
VALUES (1, 1);

select * from userlegos;