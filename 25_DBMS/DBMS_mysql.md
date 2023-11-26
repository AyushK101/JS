## what used to happen before databases ?
We used to rely on file-based system .
1. data redundancy{repeating your data} {multiple copy of same data for different uses}
> redundancy will lead to inconsistency.
2. data inconsistency {same data can have different values on different copies of it}
3. difficult data access {ex: no order of data }
4. security issues {ex: don't have backups }
5. data concurrent access {2 persons can't access at same time}

# Database 
it is a shared collection of <data/files>.

# in order to maintain the database we have DBMS {database management system}   
They help us to create , fetch and maintain data in the databases.
- DBMS helps a lot=> helps us to define the data properly , manipulate data easily, data sharing easy.
> internally DBMS will be doing a lot of things to maintain the data in the databases but we will be interacting with the layer of DBMsystems and our life will be sorted!

# what kind of problems DBMS solves is ?
1. DBMS controls data redundancy  { through a concept called `normalization`}.
2. It helps us to put constraints. {ex: can't put random data}
3. Restriction of un-authorized access.
4. Easy backup and recovery functionality.

# one of the type of DBMS is `rdbms`-

## RDBMS - relational database management systems
- A special typ of dbms which maintains data in the form of `tables`.  
ex: mysql , Pgsql , oraclesql , seuqalite etc.
- in order to interact with these rbdms with have SQL
> in most dbms here the syntax is almost same due to `SQL standards`.

> SQL: structure query language , using which we will be able to `interact` with these dbms.
overall sql comes from the sql standards.

> SQL is a declarative programming language{ in this , we don't tell `how we want to do things{logic}` like c++ etc , instead we tell `what we want to do`: there are feq defined tasks , and there are few modification you can do with those tasks , and you just tell what task you want to do , internally it will manage everything automatically} 

> Remember every sql query don't work in every rdbms , `so when google any query , google it with that particular rdbms not just sql`.



DATATYPES:-
1. numeric: INT , DECIMAL ,  BIGINT etc.
2. string: CHAR , VARCHAR , ENUM etc.
3. date&time: DATE ,TIME , DATETIME et.
4. json: JSON 

<!-- sql statements -->
<!-- https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html -->

## mysql queries
- `sudo mysql`
0. clearing terminal : `\! clear`;
1. show all databases : `show databases;`
2. create a db :` CREATE DATABASE <name>;` & `CREATE DATABASE IF NOT EXIST <name>;`
3. start working on a db : `USE <name>;`
4. delete whole db : `DROP DATABASE <name>;` & `DROP DATABASE IF EXIST <name>;`
5. list all the tables : `SHOW TABLES;`
6. creating table : 

CREATE TABLE <name> (
    <attribute1-name> <attribute1-type> <extra-properties-for-attribute1> , 
    <attribute2-name> <attribute2-type> <extra-properties-for-attribute2> , 
    ...
    ...
)


ex: //in mysql-strings==varchar 
CREATE TABLE blogs (
    title VARCHAR(30) NO NULL,
    id INT AUTO_INCREMENT,
    content  VARCHAR(1200)
)


EX: // creating table if not exist already
CREATE TABLE IF DON'T EXIST <NAME> (

)


7. delete table : `DROP TABLE <name>;`  & `DROP TABLE IF EXIST <name>;`
8. get details about table : `describe <table-name>;`  OR `desc <table>;`



9. insert data in a table :

INSERT INTO <name> (NAME , CHARGES , GENDER) VALUES (VAL1 , VAL2 , VAL3) , (val1,val2,val3)...;

10. retrieve everything from the table :

SELECT <attribute1> , <attribute2> FROM <name-of-table>;
// for all attributes = *

11. `WHERE` clause:  

SELECT * FROM <table-name> WHERE <condition>;

- operators in mysql:-


< , > , <= , >= , <> {not equal to} , = {equality} , IN , like AND , XOR etc


12. `like` query: {not only limited to select}
- `SELECT <col1> <col2> ... FROM <table> WHERE <col1> like "%string%"; `  
- `SHOW DATABASES like "%h";` etc.
prefix , suffix , substring matching
 
13. `update data in tables`:
- syntax: UPDATE <name-table> Set <name> = "chris evans" WHERE Name = "chris eans";

14. get limited amount of data: 
- ex: `select * from <table> order by charges DESC , name desc limit 2;`

------------
### joins - {visulalize through venn diagram };
 

------------

# ORM - OBJECT RELATIONAL MAPPER 
- Libraries that help you to do database queries but instead of writing sql syntax , you write object oriented syntax.
- ex: sequelize  