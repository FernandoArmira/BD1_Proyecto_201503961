use proyecto2;

-- consulta 1
create view consulta1 as 
select profesional.nombre, count(profesional.idprofesional) as Total 
from detalle_profesional, invento, profesional
where detalle_profesional.invento_idinvento = invento.idinvento
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
group by profesional.nombre
order by Total desc;

-- consulta 2
create view consulta2 as 
select pais.nombre, count(respuesta_idrespuesta) as Total
from pais 
left join detalle_respuestas
on pais.idpais = detalle_respuestas.pais_idpais
group by pais.nombre
order by total desc;

-- consulta 3
create view consulta3 as 
select p.pa, p.ar
from frontera, 
(select pais.idpais as pi, pais.nombre as pa, pais.area as ar
from pais
left join inventor
on pais.idpais = inventor.pais_idpais
where inventor.pais_idpais is null) p
where p.pi = frontera.pais_idpais
and norte is null
and sur is null
and este is null
and oeste is null
order by p.ar;

-- consulta 4
create view consulta4 as 
select p.pr as jefe, profesional.nombre as subalterno, area.nombre as area
from detalle_area, profesional, area,
(select profesional.nombre as pr, area.nombre as ar
from detalle_jefe, profesional, area
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea) p
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = p.ar
and profesional.nombre != 'KING PRESIDENT'
order by jefe;

-- consulta 5
create view consulta5 as 
select profesional.nombre, profesional.salario, area.nombre as area
from detalle_area, profesional, area,
(select area.nombre as n, avg (profesional.salario) as promedio
from detalle_area, profesional, area
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
group by area.nombre) s
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = s.n
and salario > promedio;

-- consulta 6
create view consulta6 as 
select pais.nombre, count(detalle_respuestas.respuesta_idrespuesta) as Total
from pais, detalle_respuestas,
(select respuesta_idrespuesta as rc
from detalle_pregunta) r
where pais.idpais = detalle_respuestas.pais_idpais
and detalle_respuestas.respuesta_idrespuesta = r.rc
group by pais.nombre
order by Total desc;

-- consulta 7
create view consulta7 as 
select invento.nombre
from detalle_profesional, detalle_area, area, profesional, invento
where detalle_area.area_idarea = area.idarea
and detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.invento_idinvento = invento.idinvento
and area.nombre = 'Óptica'
order by invento.nombre;

-- consulta 8
create view consulta8 as 
select SUBSTRING(nombre, 1, 1) as Letra, sum(area) as Total_area
from pais
group by Letra;

-- consulta 9
create view consulta9 as 
select p.nombre, p.invento
from
(select inventor.nombre as nombre ,SUBSTRING(inventor.nombre, 1, 2) as n, invento.nombre as invento
from detalle_invento, inventor, invento
where detalle_invento.inventor_idinventor = inventor.idinventor
and detalle_invento.invento_idinvento = invento.idinvento) p
where n = 'Be';

-- consulta 10
create view consulta10 as 
select p2.inventor, p2.inventos, p2.anio
from
(select p.nombre as inventor, p.invento as inventos , p.año as anio, p.n2 as no2
from
(select inventor.nombre as nombre ,SUBSTRING(inventor.nombre, 1, 1) as n, SUBSTRING(inventor.nombre, -1, 1) as n2, 
invento.nombre as invento, invento.anio as año, SUBSTRING(invento.anio, 1, 2) si
from detalle_invento, inventor, invento
where detalle_invento.inventor_idinventor = inventor.idinventor
and detalle_invento.invento_idinvento = invento.idinvento) p
where n = 'B'
and año > 1799
and año < 1901) p2
where p2.no2 = 'r'
or p2.no2 = 'n';

-- consulta 11
create view consulta11 as 
select p.pais, p.area
from
(select pais.nombre as pais, pais.area as area, count(pais_idpais1) as Total 
from frontera, pais
where frontera.pais_idpais = pais.idpais
group by pais.nombre) p
where p.total > 7
order by p.area desc;

-- consulta 12
create view consulta12 as 
select p.invento
from
(select nombre as invento, SUBSTRING(nombre, 1, 1) as l, length(nombre) as le
from invento) p
where l = 'L'
and le <= 4;

-- consulta 13
create view consulta13 as 
select p.profesional, p.salario, p.comision, p.total_salario
from
(select nombre as profesional, salario as salario, comision as comision, (salario + comision) as total_salario,
(salario/4) as por 
from profesional
where comision is not null) p
where p.comision > p.por;

-- consulta 14
create view consulta14 as 
select p.en, count(p.pa) as Total
from
(select distinct detalle_respuestas.pais_idpais as pa, encuesta.nombre as en
from detalle_respuestas, respuesta, pregunta, encuesta
where detalle_respuestas.respuesta_idrespuesta = respuesta.idrespuesta
and respuesta.pregunta_idpregunta = pregunta.idpregunta
and pregunta.encuesta_idencuesta = encuesta.idencuesta) p
group by p.en
order by total desc;

-- consulta 15
create view consulta15 as 
select pais.nombre, pais.poblacion
from pais,
(select sum(pais.poblacion) as po, region.nombre 
from pais, region
where pais.region_idregion = region.idregion
and region.nombre = 'Centro America'
group by region.nombre) p
where pais.poblacion > p.po;

-- cosnsulta 16
create view consulta16 as 
select distinct profesional.nombre as profesional, area.nombre as area
from detalle_jefe, profesional, area,
(select distinct s1.subalterno as sub, s1.area as ar, s1.jefe as je
from
(select p.pr as jefe, profesional.nombre as subalterno, area.nombre as area,
invento.nombre as invento, inventor.nombre as inventor
from detalle_area, profesional, area, detalle_profesional, invento, detalle_invento, inventor,
(select profesional.nombre as pr, area.nombre as ar
from detalle_jefe, profesional, area
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea) p
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = p.ar
and profesional.nombre != 'KING PRESIDENT'
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.invento_idinvento = invento.idinvento
and detalle_invento.invento_idinvento = invento.idinvento
and detalle_invento.inventor_idinventor = inventor.idinventor
order by jefe) s1
where s1.inventor = 'Pasteur') s2
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea
and area.nombre != s2.ar
and profesional.nombre != 'KING PRESIDENT'
order by profesional.nombre;

-- consulta 17
create view consulta17 as 
select invento.nombre as invento
from invento,
(select invento.nombre, invento.anio as anio
from detalle_invento, invento, inventor
where detalle_invento.invento_idinvento = invento.idinvento
and detalle_invento.inventor_idinventor = inventor.idinventor
and inventor.nombre = 'Benz') i
where invento.anio = i.anio;

-- consulta 18
create view consulta18 as 
select pais.nombre, pais.poblacion
from frontera, pais,
(select area as po
from pais
where nombre = 'Japon') p
where frontera.pais_idpais = pais.idpais
and pais_idpais1 is null
and pais.area >= p.po;

-- consulta 19
create view consulta19 as 
select pais.nombre as pais, p.frontera
from pais,
(select frontera.pais_idpais as idpais, pais.nombre as frontera
from frontera, pais
where frontera.pais_idpais1 = pais.idpais) p
where pais.idpais = p.idpais
order by pais.nombre;

-- consulta 20
create view consulta20 as 
select p.nombre, p.salario, p.comision
from
(select nombre as nombre, salario as salario, comision as comision, (comision * 2) as c_doble
from profesional
where comision is not null) p
where p.salario > p.c_doble;

select * from consulta1;
select * from consulta2;
select * from consulta3;
select * from consulta4;
select * from consulta5;
select * from consulta6;
select * from consulta7;
select * from consulta8;
select * from consulta9;
select * from consulta10;
select * from consulta11;
select * from consulta12;
select * from consulta13;
select * from consulta14;
select * from consulta15;
select * from consulta16;
select * from consulta17;
select * from consulta18;
select * from consulta19;
select * from consulta20;

-- consulta 1
select profesional.nombre, count(profesional.idprofesional) as Total 
from detalle_profesional, invento, profesional
where detalle_profesional.invento_idinvento = invento.idinvento
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
group by profesional.nombre
order by Total desc;

-- consulta 2
select pais.nombre, count(respuesta_idrespuesta) as Total
from pais 
left join detalle_respuestas
on pais.idpais = detalle_respuestas.pais_idpais
group by pais.nombre
order by total desc;

-- consulta 3
select p.pa, p.ar
from frontera, 
(select pais.idpais as pi, pais.nombre as pa, pais.area as ar
from pais
left join inventor
on pais.idpais = inventor.pais_idpais
where inventor.pais_idpais is null) p
where p.pi = frontera.pais_idpais
and norte is null
and sur is null
and este is null
and oeste is null
order by p.ar;

-- consulta 4
select p.pr as jefe, profesional.nombre as subalterno, area.nombre as area
from detalle_area, profesional, area,
(select profesional.nombre as pr, area.nombre as ar
from detalle_jefe, profesional, area
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea) p
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = p.ar
and profesional.nombre != 'KING PRESIDENT'
order by jefe;

-- consulta 5
select profesional.nombre, profesional.salario, area.nombre as area
from detalle_area, profesional, area,
(select area.nombre as n, avg (profesional.salario) as promedio
from detalle_area, profesional, area
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
group by area.nombre) s
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = s.n
and salario > promedio;

-- consulta 6
select pais.nombre, count(detalle_respuestas.respuesta_idrespuesta) as Total
from pais, detalle_respuestas,
(select respuesta_idrespuesta as rc
from detalle_pregunta) r
where pais.idpais = detalle_respuestas.pais_idpais
and detalle_respuestas.respuesta_idrespuesta = r.rc
group by pais.nombre
order by Total desc;

-- consulta 7
select invento.nombre
from detalle_profesional, detalle_area, area, profesional, invento
where detalle_area.area_idarea = area.idarea
and detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.invento_idinvento = invento.idinvento
and area.nombre = 'Óptica'
order by invento.nombre;

-- consulta 8
select SUBSTRING(nombre, 1, 1) as Letra, sum(area) as 'Total area'
from pais
group by Letra;

-- consulta 9
select p.nombre, p.invento
from
(select inventor.nombre as nombre ,SUBSTRING(inventor.nombre, 1, 2) as n, invento.nombre as invento
from detalle_invento, inventor, invento
where detalle_invento.inventor_idinventor = inventor.idinventor
and detalle_invento.invento_idinvento = invento.idinvento) p
where n = 'Be';

-- consulta 10
select p2.inventor, p2.inventos, p2.anio
from
(select p.nombre as inventor, p.invento as inventos , p.año as anio, p.n2 as no2
from
(select inventor.nombre as nombre ,SUBSTRING(inventor.nombre, 1, 1) as n, SUBSTRING(inventor.nombre, -1, 1) as n2, 
invento.nombre as invento, invento.anio as año, SUBSTRING(invento.anio, 1, 2) si
from detalle_invento, inventor, invento
where detalle_invento.inventor_idinventor = inventor.idinventor
and detalle_invento.invento_idinvento = invento.idinvento) p
where n = 'B'
and año > 1799
and año < 1901) p2
where p2.no2 = 'r'
or p2.no2 = 'n';

-- consulta 11
select p.pais, p.area
from
(select pais.nombre as pais, pais.area as area, count(pais_idpais1) as Total 
from frontera, pais
where frontera.pais_idpais = pais.idpais
group by pais.nombre) p
where p.total > 7
order by p.area desc;

-- consulta 12
select p.invento
from
(select nombre as invento, SUBSTRING(nombre, 1, 1) as l, length(nombre) as le
from invento) p
where l = 'L'
and le <= 4;

-- consulta 13
select p.profesional, p.salario, p.comision, p.total_salario
from
(select nombre as profesional, salario as salario, comision as comision, (salario + comision) as total_salario,
(salario/4) as por 
from profesional
where comision is not null) p
where p.comision > p.por;

-- consulta 14
select p.en, count(p.pa) as Total
from
(select distinct detalle_respuestas.pais_idpais as pa, encuesta.nombre as en
from detalle_respuestas, respuesta, pregunta, encuesta
where detalle_respuestas.respuesta_idrespuesta = respuesta.idrespuesta
and respuesta.pregunta_idpregunta = pregunta.idpregunta
and pregunta.encuesta_idencuesta = encuesta.idencuesta) p
group by p.en
order by total desc;

-- consulta 15
select pais.nombre, pais.poblacion
from pais,
(select sum(pais.poblacion) as po, region.nombre 
from pais, region
where pais.region_idregion = region.idregion
and region.nombre = 'Centro America'
group by region.nombre) p
where pais.poblacion > p.po;

-- cosnsulta 16
select distinct profesional.nombre as profesional, area.nombre as area
from detalle_jefe, profesional, area,
(select distinct s1.subalterno as sub, s1.area as ar, s1.jefe as je
from
(select p.pr as jefe, profesional.nombre as subalterno, area.nombre as area,
invento.nombre as invento, inventor.nombre as inventor
from detalle_area, profesional, area, detalle_profesional, invento, detalle_invento, inventor,
(select profesional.nombre as pr, area.nombre as ar
from detalle_jefe, profesional, area
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea) p
where detalle_area.profesional_idprofesional = profesional.idprofesional
and detalle_area.area_idarea = area.idarea
and area.nombre = p.ar
and profesional.nombre != 'KING PRESIDENT'
and detalle_profesional.profesional_idprofesional = profesional.idprofesional
and detalle_profesional.invento_idinvento = invento.idinvento
and detalle_invento.invento_idinvento = invento.idinvento
and detalle_invento.inventor_idinventor = inventor.idinventor
order by jefe) s1
where s1.inventor = 'Pasteur') s2
where detalle_jefe.profesional_idprofesional = profesional.idprofesional
and detalle_jefe.area_idarea = area.idarea
and area.nombre != s2.ar
and profesional.nombre != 'KING PRESIDENT'
order by profesional.nombre;

-- consulta 17
select invento.nombre as invento
from invento,
(select invento.nombre, invento.anio as anio
from detalle_invento, invento, inventor
where detalle_invento.invento_idinvento = invento.idinvento
and detalle_invento.inventor_idinventor = inventor.idinventor
and inventor.nombre = 'Benz') i
where invento.anio = i.anio;

-- consulta 18
select pais.nombre, pais.poblacion
from frontera, pais,
(select area as po
from pais
where nombre = 'Japon') p
where frontera.pais_idpais = pais.idpais
and pais_idpais1 is null
and pais.area >= p.po;

-- consulta 19
select pais.nombre as pais, p.frontera
from pais,
(select frontera.pais_idpais as idpais, pais.nombre as frontera
from frontera, pais
where frontera.pais_idpais1 = pais.idpais) p
where pais.idpais = p.idpais
order by pais.nombre;

-- consulta 20
select p.nombre, p.salario, p.comision
from
(select nombre as nombre, salario as salario, comision as comision, (comision * 2) as c_doble
from profesional
where comision is not null) p
where p.salario > p.c_doble;

