create table instructor(
  id int PRIMARY KEY,
  name varchar(7),
  dept_name varchar(7),
  salary int
);
create TABLE teaches(
  id int PRIMARY KEY,
  course varchar(7),
  semester varchar(7),
  year varchar(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

-- INNER JOIN
select * from instructor join teaches; -- CROSS join (join 명령어 써도 조건 없음 그냥 나옴)
select * from instructor I join teaches T on I.id = T.id; -- INNER JOIN

/*
Outer join은 공통된 부분만 결합하는 INNER JOIN과 다르게 공통되지 않은 row도 유지한다.
이떄, 왼쪽 테이브르이 row를 유지하면 LEFT (outer) JOIN,
오른쪽 테이블의 row를 유지하면 RIGHT (Outer) JOIN,
양쪽 테이블의 row를 유지하면 FULL OUTER JOIN
*/

delete from teaches where id <=2;
insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

-- LEFT OUTER JOIN
SELECT * FROM instructor I LEFT OUTER JOIN teaches T on I.id = T.id;
-- RIGHT OUTER JOIN
SELECT * FROM instructor I RIGHT OUTER JOIN teaches T on I.id = T.id;