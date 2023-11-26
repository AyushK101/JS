<!--! while SQL is the language used to communicate with the database and specify what actions need to be performed (retrieve data, modify data, define structures, etc.), the DBMS is the system that makes those actions possible by interpreting and executing SQL commands within the context of the database it manages. -->


# mysql 
1. MySQL is a database management system.
2. MySQL databases are relational.
> SQL is the most common standardized language used to access databases.
3. MySQL software is Open Source.
4. The MySQL Database Server is very fast, reliable, scalable, and easy to use.

## DataTypes
Many data types: signed/unsigned integers 1, 2, 3, 4, and 8 bytes long, FLOAT, DOUBLE, CHAR, VARCHAR, BINARY, VARBINARY, TEXT, BLOB, DATE, TIME, DATETIME, TIMESTAMP, YEAR, SET, ENUM, Fixed-length and variable-length string types.

```MYSQL EXTENSIONS TO STANDARD SQL:
- Be warned that if you use them, your code is most likely not portable to other SQL servers.
- but is still portable, by using comments of the following form:
- /*! MySQL-specific code */
- ex: SELECT /*! STRAIGHT_JOIN */ col1 FROM table1,table2 WHERE ...
```

------------
 manual : `mysql --help`
------------
> make sure to connect to the server : `sudo mysql` .
- mostly , a query is consist of a SQL statement followed by `;` . 
- When you issue a query, mysql sends it to the server for execution and displays the results.
- mysql is case insensitive.
- accepts free-format input.
- cancel query : `\c`.
```Prompt	Meaning
mysql>	Ready for new query
->	Waiting for next line of multiple-line query
'>	Waiting for next line, waiting for completion of a string that began with a single quote (')
">	Waiting for next line, waiting for completion of a string that began with a double quote (")
`>	Waiting for next line, waiting for completion of an identifier that began with a backtick (`)
/*>	Waiting for next line, waiting for completion of a comment that began with /*

```
