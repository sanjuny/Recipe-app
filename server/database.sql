CREATE DATABASE postgres;

CREATE SEQUENCE seq(
   START 100
   INCREMENT 1

)

CREATE TABLE userdata (
    uid INTEGER DEFAULT nextval('seq') 
    id SERIAL PRIMARY KEY START(999), 
    name CHAR(20) NOT NULL,
    user_id VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
)
CREATE SEQUENCE data_seq
     START 1
     MAXVALUE 20
     CACHE 1;

     
CREATE TABLE emp_data(emp_id BIGSERIAL,emp_name VARCHAR);
ALTER SEQUENCE data_seq OWNED BY emp_data.emp_id;
