use proyecto2;

LOAD DATA
LOCAL INFILE 'C:\\Users\\Fernando Armira\\Downloads\\BDD1\\laboratorio\\CargaP-II.csv'
INTO TABLE Temporal2
CHARACTER SET latin1
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES;