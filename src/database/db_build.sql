BEGIN;


    DROP TABLE IF EXISTS contact CASCADE;

    CREATE TABLE contact(
        first_name VARCHAR(30),
        last_name VARCHAR (30),
        phone_number INTEGER,
        email VARCHAR(100),
        intersted_about VARCHAR(200));


    INSERT INTO contact (first_name,last_name,phone_number,email,intersted_about)
    VALUES
    ('Ghassan', 'Gharzuzy', 0544431898,'ghassan@gmail.com','girls'),
    ('Dana', 'Falah', 0540540540,' dana@gmail.com',' sport'),
    ('John', 'Doe', 0503584932, 'john@gmail.com', 'life');

    COMMIT;