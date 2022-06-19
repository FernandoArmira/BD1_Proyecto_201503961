use proyecto2;

SET SQL_SAFE_UPDATES = 0;

update temporal1 set region = 'Europa del Oeste' where region = 'Europa Occidental';

insert into region (Nombre)
select distinct Nombre_region from temporal3 order by Nombre_region;

insert into pais (nombre, poblacion, area, capital, region_idregion)
select distinct pais_inventor, poblacion, area, capital, idregion
from temporal1, region
where temporal1.region = region.nombre 
order by pais_inventor;

insert into frontera (pais_idpais, pais_idpais1, norte, sur, este, oeste)
select p.pais, idpais, p.norte, p.sur, p.este, p.oeste
from pais,
(select distinct idpais as pais, frontera as front, norte, sur, este, oeste
from temporal1, pais
where temporal1.pais_inventor = pais.nombre
order by temporal1.frontera) p
where pais.nombre = p.front
order by p.pais;

insert into frontera (pais_idpais)
select distinct idpais
from temporal1, pais
where frontera = ''
and pais.nombre = temporal1.pais_inventor
order by temporal1.pais_inventor;

insert into invento (nombre, anio, pais_idpais)
select distinct invento, anio, idpais
from temporal1, pais
where invento != ''
and temporal1.pais_invento = pais.nombre
order by invento;

insert into inventor(nombre, pais_idpais)
SELECT distinct inventor, idpais
FROM temporal1, pais
WHERE inventor 
NOT LIKE '%,%'
and inventor !=''
and temporal1.pais_inventor = pais.nombre
order by inventor;

insert into inventor(nombre, pais_idpais)
SELECT distinct substring_index( SUBSTRING_INDEX(inventor, ' ', 1), ',', '1') AS fname, idpais
FROM temporal1,pais
where inventor LIKE '%,%'
and temporal1.pais_inventor = pais.nombre;

insert into inventor(nombre, pais_idpais)
SELECT distinct substring_index(SUBSTRING_INDEX(SUBSTRING_INDEX(inventor,' ', 2), ' ',-1), ',', '1') AS mname, idpais
FROM temporal1,pais
where inventor LIKE '%,%'
and temporal1.pais_inventor = pais.nombre;

insert into inventor(nombre, pais_idpais)
values ('Bardeen','52');

insert into detalle_invento(invento_idinvento, inventor_idinventor)
select distinct invento.idinvento, inventor.idinventor
from temporal1, invento, inventor, pais
where temporal1.invento != ''
and temporal1.inventor NOT LIKE '%,%'
and temporal1.invento = invento.nombre
and temporal1.inventor = inventor.nombre
and temporal1.pais_inventor = pais.nombre
and temporal1.pais_invento = pais.nombre
and inventor.pais_idpais = pais.idpais
and invento.pais_idpais = pais.idpais
order by invento.idinvento;

insert into detalle_invento(invento_idinvento, inventor_idinventor)
select distinct invento.idinvento, inventor.idinventor
from temporal1, invento, inventor, pais,
(select distinct invento as inv, substring_index( SUBSTRING_INDEX(inventor, ' ', 1), ',', '1') AS fname, pais_inventor as pais1, pais_invento as pais2 
from temporal1
where invento != ''
and inventor LIKE '%,%'
order by inventor) i
where i.inv = invento.nombre
and i.fname = inventor.nombre
and i.pais1 = pais.nombre
and i.pais2 = pais.nombre
and inventor.pais_idpais = pais.idpais
and invento.pais_idpais = pais.idpais;

insert into detalle_invento(invento_idinvento, inventor_idinventor)
select distinct invento.idinvento, inventor.idinventor
from temporal1, invento, inventor, pais,
(select distinct invento as inv, substring_index(SUBSTRING_INDEX(SUBSTRING_INDEX(inventor,' ', 2), ' ',-1), ',', '1') AS mname, pais_inventor as pais1, pais_invento as pais2 
from temporal1
where invento != ''
and inventor LIKE '%,%'
order by inventor) i
where i.inv = invento.nombre
and i.mname = inventor.nombre
and i.pais1 = pais.nombre
and i.pais2 = pais.nombre
and inventor.pais_idpais = pais.idpais
and invento.pais_idpais = pais.idpais;

insert into detalle_invento(invento_idinvento, inventor_idinventor)
values ('138','286');

insert into profesional(nombre, fecha_contrato, salario, comision)
select distinct profesional, fecha, salario, comision
from temporal1
where comision != '';

insert into profesional(nombre, fecha_contrato, salario)
select distinct profesional, fecha, salario
from temporal1
where comision = ''
and profesional != '';

insert into detalle_profesional(invento_idinvento, profesional_idprofesional)
select distinct idinvento, idprofesional 
from temporal1, profesional, invento, pais
where temporal1.invento = invento.nombre
and temporal1.pais_invento = pais.nombre
and invento.pais_idpais = pais.idpais
and temporal1.profesional = profesional.nombre
order by idinvento;

insert into area (nombre, ranking)
select distinct area_investigacion, ranking
from temporal1
where area_investigacion != ''
order by area_investigacion;

insert into detalle_jefe (profesional_idprofesional, area_idarea)
select distinct idprofesional, idarea 
from temporal1, profesional, area
where temporal1.jefe != ''
and temporal1.profesional = profesional.nombre
and temporal1.jefe = area.nombre
order by idarea;

insert into detalle_jefe (profesional_idprofesional, area_idarea)
select distinct idprofesional, idarea 
from temporal1, profesional, area
where temporal1.profesional = 'KING PRESIDENT'
and temporal1.profesional = profesional.nombre
order by idarea;

insert into detalle_area (profesional_idprofesional, area_idarea)
select distinct idprofesional, idarea
from temporal1, profesional, area
where temporal1.profesional = profesional.nombre
and temporal1.area_investigacion = area.nombre;

insert into encuesta (nombre)
select distinct nombre from temporal2;

insert into pregunta (encuesta_idencuesta, pregunta)
select distinct idencuesta, pregunta
from temporal2, encuesta
where temporal2.nombre = encuesta.nombre;

insert into respuesta (pregunta_idpregunta, respuesta, letra)
select distinct idpregunta, respuesta_posible, SUBSTRING(respuesta_posible, 1, 1)
from temporal2, pregunta, encuesta
where temporal2.pregunta = pregunta.pregunta
and temporal2.nombre = encuesta.nombre
and pregunta.encuesta_idencuesta = encuesta.idencuesta;

insert into detalle_pregunta (pregunta_idpregunta, respuesta_idrespuesta)
select distinct idpregunta, idrespuesta
from temporal2, pregunta, encuesta, respuesta
where temporal2.pregunta = pregunta.pregunta
and temporal2.respuesta_correcta = respuesta.respuesta
and temporal2.nombre = encuesta.nombre
and respuesta.pregunta_idpregunta = pregunta.idpregunta
and pregunta.encuesta_idencuesta = encuesta.idencuesta;

insert into detalle_respuestas (pais_idpais, respuesta_idrespuesta)
select distinct idpais, idrespuesta 
from temporal2, respuesta, pregunta, encuesta, pais
where rtrim(temporal2.pais) = pais.nombre
and temporal2.respuesta_pais = respuesta.letra
and temporal2.pregunta = pregunta.pregunta
and temporal2.nombre = encuesta.nombre
and respuesta.pregunta_idpregunta = pregunta.idpregunta
and pregunta.encuesta_idencuesta = encuesta.idencuesta;

update region set region_idregion = '1' where nombre = 'Mediterraneo';
update region set region_idregion = '1' where nombre = 'Sur Africana';
update region set region_idregion = '1' where nombre = 'Centro Africana';
update region set region_idregion = '1' where nombre = 'Norte Africana';
update region set region_idregion = '2' where nombre = 'El Caribe';
update region set region_idregion = '2' where nombre = 'Centro America';
update region set region_idregion = '2' where nombre = 'Sur America';
update region set region_idregion = '2' where nombre = 'Norte America';
update region set region_idregion = '3' where nombre = 'Cercano Oriente';
update region set region_idregion = '3' where nombre = 'Lejano Oriente';
update region set region_idregion = '9' where nombre = 'Europa del Oeste';
update region set region_idregion = '9' where nombre = 'Centro Europa';
update region set region_idregion = '9' where nombre = 'Europa del Este';
update region set region_idregion = '16' where nombre = 'Pacifico Central';
update region set region_idregion = '16' where nombre = 'Pacifico';
update region set region_idregion = '16' where nombre = 'Pacifico Sur';



