use proyecto2; 

CREATE TABLE IF NOT EXISTS `Region` (
  `idRegion` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Region_idRegion` INT NULL,
  PRIMARY KEY (`idRegion`),
  INDEX `fk_Region_Region_idx` (`Region_idRegion` ASC) VISIBLE,
  CONSTRAINT `fk_Region_Region`
    FOREIGN KEY (`Region_idRegion`)
    REFERENCES `Region` (`idRegion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pais` (
  `idPais` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Poblacion` INT NOT NULL,
  `Area` INT NOT NULL,
  `Capital` VARCHAR(200) NOT NULL,
  `Region_idRegion` INT NOT NULL,
  PRIMARY KEY (`idPais`, `Region_idRegion`),
  INDEX `fk_Pais_Region1_idx` (`Region_idRegion` ASC) VISIBLE,
  CONSTRAINT `fk_Pais_Region1`
    FOREIGN KEY (`Region_idRegion`)
    REFERENCES `Region` (`idRegion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Frontera` (
  `idFrontera` INT NOT NULL AUTO_INCREMENT,
  `Norte` CHAR(1) NULL,
  `Sur` CHAR(1) NULL,
  `Este` CHAR(1) NULL,
  `Oeste` CHAR(1) NULL,
  `Pais_idPais` INT NOT NULL,
  `Pais_idPais1` INT NULL,
  PRIMARY KEY (`idFrontera`, `Pais_idPais`),
  INDEX `fk_Frontera_Pais1_idx` (`Pais_idPais` ASC) VISIBLE,
  INDEX `fk_Frontera_Pais2_idx` (`Pais_idPais1` ASC) VISIBLE,
  CONSTRAINT `fk_Frontera_Pais1`
    FOREIGN KEY (`Pais_idPais`)
    REFERENCES `Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Frontera_Pais2`
    FOREIGN KEY (`Pais_idPais1`)
    REFERENCES `Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Invento` (
  `idInvento` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Anio` VARCHAR(200) NOT NULL,
  `Pais_idPais` INT NOT NULL,
  PRIMARY KEY (`idInvento`, `Pais_idPais`),
  INDEX `fk_Invento_Pais1_idx` (`Pais_idPais` ASC) VISIBLE,
  CONSTRAINT `fk_Invento_Pais1`
    FOREIGN KEY (`Pais_idPais`)
    REFERENCES `Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Inventor` (
  `idInventor` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Pais_idPais` INT NOT NULL,
  PRIMARY KEY (`idInventor`, `Pais_idPais`),
  INDEX `fk_Inventor_Pais1_idx` (`Pais_idPais` ASC) VISIBLE,
  CONSTRAINT `fk_Inventor_Pais1`
    FOREIGN KEY (`Pais_idPais`)
    REFERENCES `Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Profesional` (
  `idProfesional` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Salario` FLOAT NOT NULL,
  `Fecha_contrato` VARCHAR(200) NOT NULL,
  `Comision` FLOAT NULL,
  PRIMARY KEY (`idProfesional`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Area` (
  `idArea` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Ranking` INT NOT NULL,
  `Descripcion` VARCHAR(200) NULL,
  PRIMARY KEY (`idArea`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Encuesta` (
  `idEncuesta` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idEncuesta`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pregunta` (
  `idPregunta` INT NOT NULL AUTO_INCREMENT,
  `Pregunta` VARCHAR(200) NOT NULL,
  `Encuesta_idEncuesta` INT NOT NULL,
  PRIMARY KEY (`idPregunta`, `Encuesta_idEncuesta`),
  INDEX `fk_Pregunta_Encuesta1_idx` (`Encuesta_idEncuesta` ASC) VISIBLE,
  CONSTRAINT `fk_Pregunta_Encuesta1`
    FOREIGN KEY (`Encuesta_idEncuesta`)
    REFERENCES `Encuesta` (`idEncuesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Respuesta` (
  `idRespuesta` INT NOT NULL AUTO_INCREMENT,
  `Respuesta` VARCHAR(200) NOT NULL,
  `Letra` CHAR(1) NOT NULL,
  `Pregunta_idPregunta` INT NOT NULL,
  PRIMARY KEY (`idRespuesta`, `Pregunta_idPregunta`),
  INDEX `fk_Respuesta_Pregunta1_idx` (`Pregunta_idPregunta` ASC) VISIBLE,
  CONSTRAINT `fk_Respuesta_Pregunta1`
    FOREIGN KEY (`Pregunta_idPregunta`)
    REFERENCES `Pregunta` (`idPregunta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Detalle_invento` (
  `Inventor_idInventor` INT NOT NULL,
  `Invento_idInvento` INT NOT NULL,
  PRIMARY KEY (`Inventor_idInventor`, `Invento_idInvento`),
  INDEX `fk_Inventor_has_Invento_Invento1_idx` (`Invento_idInvento` ASC) VISIBLE,
  INDEX `fk_Inventor_has_Invento_Inventor1_idx` (`Inventor_idInventor` ASC) VISIBLE,
  CONSTRAINT `fk_Inventor_has_Invento_Inventor1`
    FOREIGN KEY (`Inventor_idInventor`)
    REFERENCES `Inventor` (`idInventor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Inventor_has_Invento_Invento1`
    FOREIGN KEY (`Invento_idInvento`)
    REFERENCES `Invento` (`idInvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Detalle_profesional` (
  `Invento_idInvento` INT NOT NULL,
  `Profesional_idProfesional` INT NOT NULL,
  PRIMARY KEY (`Invento_idInvento`, `Profesional_idProfesional`),
  INDEX `fk_Invento_has_Profesional_Profesional1_idx` (`Profesional_idProfesional` ASC) VISIBLE,
  INDEX `fk_Invento_has_Profesional_Invento1_idx` (`Invento_idInvento` ASC) VISIBLE,
  CONSTRAINT `fk_Invento_has_Profesional_Invento1`
    FOREIGN KEY (`Invento_idInvento`)
    REFERENCES `Invento` (`idInvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Invento_has_Profesional_Profesional1`
    FOREIGN KEY (`Profesional_idProfesional`)
    REFERENCES `Profesional` (`idProfesional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Detalle_area` (
  `Profesional_idProfesional` INT NOT NULL,
  `Area_idArea` INT NOT NULL,
  PRIMARY KEY (`Profesional_idProfesional`, `Area_idArea`),
  INDEX `fk_Profesional_has_Area_Area1_idx` (`Area_idArea` ASC) VISIBLE,
  INDEX `fk_Profesional_has_Area_Profesional1_idx` (`Profesional_idProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_Profesional_has_Area_Profesional1`
    FOREIGN KEY (`Profesional_idProfesional`)
    REFERENCES `Profesional` (`idProfesional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Profesional_has_Area_Area1`
    FOREIGN KEY (`Area_idArea`)
    REFERENCES `Area` (`idArea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `Detalle_respuestas` (
  `Pais_idPais` INT NOT NULL,
  `Respuesta_idRespuesta` INT NOT NULL,
  PRIMARY KEY (`Pais_idPais`, `Respuesta_idRespuesta`),
  INDEX `fk_Pais_has_Respuesta_Respuesta1_idx` (`Respuesta_idRespuesta` ASC) VISIBLE,
  INDEX `fk_Pais_has_Respuesta_Pais1_idx` (`Pais_idPais` ASC) VISIBLE,
  CONSTRAINT `fk_Pais_has_Respuesta_Pais1`
    FOREIGN KEY (`Pais_idPais`)
    REFERENCES `Pais` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pais_has_Respuesta_Respuesta1`
    FOREIGN KEY (`Respuesta_idRespuesta`)
    REFERENCES `Respuesta` (`idRespuesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Detalle_pregunta` (
  `Pregunta_idPregunta` INT NOT NULL,
  `Respuesta_idRespuesta` INT NOT NULL,
  PRIMARY KEY (`Pregunta_idPregunta`, `Respuesta_idRespuesta`),
  INDEX `fk_Pregunta_has_Respuesta_Respuesta1_idx` (`Respuesta_idRespuesta` ASC) VISIBLE,
  INDEX `fk_Pregunta_has_Respuesta_Pregunta1_idx` (`Pregunta_idPregunta` ASC) VISIBLE,
  CONSTRAINT `fk_Pregunta_has_Respuesta_Pregunta1`
    FOREIGN KEY (`Pregunta_idPregunta`)
    REFERENCES `Pregunta` (`idPregunta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pregunta_has_Respuesta_Respuesta1`
    FOREIGN KEY (`Respuesta_idRespuesta`)
    REFERENCES `Respuesta` (`idRespuesta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Detalle_jefe` (
  `Profesional_idProfesional` INT NOT NULL,
  `Area_idArea` INT NOT NULL,
  PRIMARY KEY (`Profesional_idProfesional`, `Area_idArea`),
  INDEX `fk_Profesional_has_Area_Area2_idx` (`Area_idArea` ASC) VISIBLE,
  INDEX `fk_Profesional_has_Area_Profesional2_idx` (`Profesional_idProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_Profesional_has_Area_Profesional2`
    FOREIGN KEY (`Profesional_idProfesional`)
    REFERENCES `Profesional` (`idProfesional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Profesional_has_Area_Area2`
    FOREIGN KEY (`Area_idArea`)
    REFERENCES `Area` (`idArea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Temporal1` (
  `Invento` VARCHAR(200) NULL,
  `Inventor` VARCHAR(200) NULL,
  `Profesional` VARCHAR(200) NULL,
  `Jefe` VARCHAR(200) NULL,
  `Fecha` VARCHAR(200) NULL,
  `Salario` VARCHAR(200) NULL,
  `Comision` VARCHAR(200) NULL,
  `Area_investigacion` VARCHAR(200) NULL,
  `Ranking` VARCHAR(200) NULL,
  `Anio` VARCHAR(200) NULL,
  `Pais_invento` VARCHAR(200) NULL,
  `Pais_inventor` VARCHAR(200) NULL,
  `Region` VARCHAR(200) NULL,
  `Capital` VARCHAR(200) NULL,
  `Poblacion` VARCHAR(200) NULL,
  `Area` VARCHAR(200) NULL,
  `Frontera` VARCHAR(200) NULL,
  `Norte` VARCHAR(200) NULL,
  `Sur` VARCHAR(200) NULL,
  `Este` VARCHAR(200) NULL,
  `Oeste` VARCHAR(200) NULL)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Temporal2` (
  `Nombre` VARCHAR(200) NULL,
  `Pregunta` VARCHAR(200) NULL,
  `Respuesta_posible` VARCHAR(200) NULL,
  `Respuesta_correcta` VARCHAR(200) NULL,
  `Pais` VARCHAR(200) NULL,
  `Respuesta_pais` VARCHAR(200) NULL)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Temporal3` (
  `Nombre_region` VARCHAR(200) NULL,
  `Region_padre` VARCHAR(200) NULL)
ENGINE = InnoDB;


