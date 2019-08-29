BEGIN;

    DROP TABLE IF EXISTS contacts
    CASCADE;

CREATE TABLE contacts
(
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    phone_number INTEGER,
    email VARCHAR(100),
    interests VARCHAR(200)
);


INSERT INTO contacts
    (first_name,last_name,phone_number,email,interests)
VALUES
    ('Ghassan', 'Gharzuzy', 0544431898, 'ghassan@gmail.com', 'girls, not you & food'),
    ('Dana', 'Falah', 0540540540, 'dana@gmail.com', 'sport, coding & using the horn 10 times a day'),
    ('John', 'Doe', 0503584932, 'john@gmail.com', 'life (which I doubt)');

COMMIT;