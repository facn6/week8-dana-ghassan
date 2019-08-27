BEGIN;

    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS results CASCADE;

    CREATE TABLE contact(
        first_name VARCHAR(30),
        last_name VARCHAR (30),
        phone_number INTEGER)


    INSERT INTO users (first_name,last_name,phone_number)
    VALUES
    ('Ghassan', 'Gharzuzy', 0544431898),
    ('Dana', 'Falah', 0540540540),
    ('John', 'Doe', 0503584932);

    COMMIT;