CREATE TABLE custumer(
  custid CHAR(10) PRIMARY KEY,
  cystnamem VARCHAR(10) NOT NULL,
  addr CHAR(10) NOT NULL,
  phone CHAR(11),
  birth DATE
);

-- INSERT 추가
INSERT INTO customer (custid,custname,addr,phone,birth) VALUES
("lucky",'강해원','미국 뉴욕','010222333','2002-03-04');

INSERT INTO custumer (custid,cystnamem,addr,phone,birth) VALUES
("lucky",'강해원','미국 뉴욕','010222333','2002-03-04');

INSERT INTO custumer (addr,phone,birth,custid,cystnamem) VALUES
('미국 뉴욕','010222333','2002-03-04',"wow",'강해원');

-- 앞에 선언 생략가능 이때에는 순서대로
INSERT INTO custumer VALUES ("luc",'이지은','미국 뉴욕','010222323','2002-03-04');

-- 여러 튜플 동시 추가
INSERT INTO custumer (custid,cystnamem,addr,phone,birth) VALUES
("lucky",'강원','미국 뉴욕','010222333','2002-03-04')
,("lucky",'해원','미국 뉴욕','010222333','2002-03-04')
,("lucky",'강해','미국 뉴욕','010222333','2002-03-04');

-- UPDATE 수정
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update custumer set addr = '대한민국 서울' where custid = 'happy';

-- DELETE 삭제
-- custid가 happy인 고객의 정보를 테이블에서 삭제
DELETE from custumer where custid ='happy';

-- select 조회
select * from customer; -- * : 와일드 카드
-- 모든 고객의 아이디를 검색
select custid from customer;

-- 모든 고객의 아이디와 생년월일을 검색
select custid birth from customer;

-- 고객 테이블에 있는 모든 주소를 검색하되 중복제거
select DISTINCT addr from customer;

-- <HWERE w조건>
-- 비교 : = , <,>, <-,<-
-- 범위 : BETWEEN
-- 집합 : IN, NOT IN
-- 패턴 : LIKE
-- NULL : is NULL, IS NOT NULL
-- 복합조건 : AND OR NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
SELECT birth from customer where custname = "강해린";

-- 고객 이름이 강해린이 아닌 고객들의 생일 검색
SELECT birth from customer where custname! = "강해린";

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
SELECT * from custname where custname >"박민지"

-- 범위
-- 1995 이상 2000년 이하 출생 고객 검색


select * from customer where birth BETWEEN "1995-01-01" and "2000-12-301";
select * from customer where birth BETWEEN birth KL"1995-01-01" and "2000-12-301";

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT * from customer where addr in ("대한민국 서울","영국런던";
SELECT * from customer where addr = "대한민국 서울" or addr = "영국런던"

-- 주소가 서울혹은 런던이 아닌 고객 검색
select * from customer where addr not in ("대한민국 서울","영국 런던");

-- 패턴
-- 주소가 미국 로스앤젤레스인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스'
select * from customer where addr like '미국 %'

-- 고객 이름에 두번 째 글자가 '지'인 고겍 검색
-- '_' : 임의의 하나의 문자
select * from customer where addr like '_지%'

-- 고객 이름에 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수%'

-- 복합 조건
-- 주소지가 대한민국이고, 2000년 생 이후 출생 고객
select * from customer where addr ="대한민국%" and birth >= '2000-01-01'

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객
select * from customer where phone not like '%4'

-- <ordered by>
-- order by 없음 : pk 기준으로 오름차순 정렬
select * from customer order by custname desc;

-- where 절과 orderby 함께 사용 (이때, where 보다 order by가 뒤에 위치해야함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= "2000-01-01" order by addr desc;

-- <limit>
-- 행의 개수를 제한
select * from customer where birth >= "2000-01-01" limit 1;

-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블(orders)
-- 형식 : foreign key (열_이름) references 기준_테이블(열_이름)
--on update cascade : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
--on delete cascade : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제
create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
); 

-- 테이블 삭제 순서!
-- customer, orders 테이블이 customer.custid기준으로 "관계" 맺음
-- customer 테이블에 존재하는 회원만 orers 테이블에 데이터로 추가가 될 수 있음
-- 만약 orders 테이블이 있는데 customer 테이블을 삭제 하면?
-- pk -fk 연결된



-- <집계함수>
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;
-- 의미있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount', 
min(price) as 'min_price', max(price) as 'max_price' from orders;


-- 주문 테이블에서 총 주문 건수
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수(중복 없이)
select count(DISTINCT custid) from orders;

-- <GROUP BY>
-- ~~ 별로
-- 고객 별로 주문한 주문 건수 구하기
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price) from orders GROUP by custid;

-- 상품별로 판매 갯수 구하기
select prodname, sum(amount) from orders GROUP BY prodname;

-- <HAVING>
-- group by 절 이후 추가 조건
-- 그룹에 대해서 필터링


-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
select custid,sum(amount),sum(amount*price) from orders group by custid having sum(amount * price)>=10000;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
-- (단, custid가 'bunny인 고객은 제외하고 출력할 것')
select custid,sum(amount * price) from orders group by custid where custid != "kiwi" having sum(amount * price) >= 10000;

-- group by 주의 사항
-- select 절에서 groupby 에서 사용한 속성과 집계함수만 사용 가능