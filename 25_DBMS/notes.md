# types of databases
relational , document(a big document which contain all data) , key-value , graph , wind columnar.

# database models
Database models are conceptual structures that define the logical and physical design of a database and its organization.   
1. Hierarchial model : tree like with every node single parent 
2. network model : tree like with node can have multiple parent
3. `relational model: data in tables , relationship b/w tables using keys. {basics of sql db's}`
4. `Object oriented model : extends relational model with oops concepts`    
5. `OBJECT RELATIONAL MODEL : combines elements of both the relational model and the object-oriented model.`
6. document model : (nosql)
7. graph model:represent relationships between entities as nodes and edges in a graph structure.  
....

# dbms 
- software where rules are written.
- DO: CRUD , security etc...

# rdbms 
- dbms specialized in relational model.

# relational model 
1. TABLES: relations 
2. ROW(tuple): instances of the entity described by the table. >single record of data {cardinality= all rows}
3. COLUMN(attribute): specific properties or characteristics of the entities being represented. {degree= all column}
4. `primary key`:  A primary key uniquely identifies each row in a table.
5. `foreign key`:  references primary key of other table.

# relational 
## OLTP - online transaction processing
## OLAP - online analytical processing


# sql /-sequel-/

A programming language used to talk to database.
- a declarative lang ( KNOW: what will happen ; DON'T KNOW: how will it happen)
- query = sql statement

# components of sql 
### 1. DDL-data definition language
- create
- alter
- drop

### 2. DML-data manipulation language
- select: `primary purpose to manipulate`
- insert
- update 
- delete

### 3. DCL-data control language
- grant 
- revoke 

### 4. DQL-data query language
- select: `primary purpose to query`

### 5. TCL-transaction control language
-Transactions are units of work performed on a database that either succeed as a whole or fail as a whole.
- commit 
- rollback 
- savepoint



