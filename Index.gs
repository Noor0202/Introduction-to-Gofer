--									Now we are going to study all about gofer...



{- so let's start...

	first thing is remember that, to run aany gofer file, it is imp to give the path of that Folder or file...
	after that when you created an file, then you can simply use following command to run the file...

		:l filename.gs and press enter or you can also try :load filename.gs
		:t filename - this thing tell us type of the function.. what type of input this function take's and what type of output it produce.
		:r is use to reload the same file.
		:quit or ctrl + c is used to remove from gofer Interpreter.

	Now we are going to see the Operators Supported by Gofer- 

		(::) 	-	Cons
		&& 	-	AND
		|| 	-	OR
		++ 	-	Append
		(.) 	-	Application
		^ 	-	Exponential
		== 	-	Equal
		/= 	-	Not Equal
		(;) 	-	Compose

	for multiline comment we use {- Anything between this is hidden from Gofer -}
-}


-- now we are going to study some predefind function's - 
	
{-	
	1) head.[a] 			- 	it will return an first element of an list without its type and information.						eg - Q No 2 

	2) last.[a] 			- 	it will return an last element of an list without its type and information. 						eg - Q No 3 

	3) init.[a] 			- 	it will remove last element from the list and return remainig list.							eg - Q No 4

	4) tail.[a] 			- 	it will remove firat element from the list and return remainig list.		 					eg - Q No 5

	5) id.a 			- 	it will return an element with its information id function is same like :t

	6) ord.char 			- 	it will return an ASCII Value of character NOTE - it will take only 'character' in between single inverted comma's. 	eg - Q No 7

	7) chr.Int 			- 	it will return an Value of ASCII Number NOTE - it will take only Integer. 						eg - Q No 8

	8) not.Bool 			- 	it will take an Boolean an return an opposite of it for example not.True then result become False.  			eg - Q No 10

	9) error.string 		- 	it will return an personalize error message if there is an error occurs. 						eg - Q No 6

	10) const 			- 	we can declare some constant variable also but remamber that when you try to perform some operation on it 
						the data type of every variable is must be same.									eg - Q No 15
						eg - if i perform 2 + (2.5) it will show an error message cause of data type are not same so instead of that i write 
						2 + 2 or (2.0) + (2.5) it will work
	
	11) max.a.a 			- 	it will take anything but mainly it takes two integers and return maximum integer from them,
						and if we pass list then it will compare an first element of the two list and return greater from them.
						Note that - both input has same data type.										eg - Q No 11

	12) nub.[a] 			-  	it will take list of anything and remove the redundancy form them.							eg - Q No 12

	13) enumFromTo.a.a		- 	this funtion return value from a to b which we mention while we give inputs.						eg - Q No 13
						we can also write enumFromTo.a.a in [a...b] this form to 
						this function is only work on either single char of input or single number of input

	14) even.Int & odd.Int 		-	it will take an Integer an return an Boolean value if the value is even or odd depends on funtion and its input.
						This much quite simple so I am not going to write an examples of them.

	15) pi				-	it doesn't take any input it return an Actual value of Pi Which is nothing but 3.14159

	16) Trignometric Functions 	- 	there are total six trigonometric functions which are Sine, Cosine, Tangent, Secant, Cosecant and Cotangent. so we can use some of them into gofer 
						by using sin.Float , cos.Float , tan.Float.

	17) Compose (;) Function 	-	it takes two function and input then apply first function with input							eg - Q No 14
						then whatever the result it will apply on second function. 

 	18) elem.a.[a] = Bool 		-	it will check an 'a' element are present in [a] if yes then it will return true else false 

	19) toUpper.char = char 	-	it will return character in capital format 

	20) toLower.char = char 	-	it will return character in small letter format 

	21) product.[Int]		-	it takes an list of integer and return of multiplication of all integers inside the list.
						this fucntion also gives an factorial of n number

	    	 			-	? product.[5,4,3,2,1] 
						120 : Int
						
						? [5...1]			ye hame 5 se 1 tak ki value nahi denga but return me ek empty list dega jiska type
										[Int]
						[] : [Int]			so isliye yaha output [Int] hai with empty list
						
						? product.[]			but jab me yaha empty list paas kar raha hu so uska type [a] hai aur product
										sirf list of Int accept karta hai.
	
						ERROR: Unresolved overloading	so isliye hame ye error dekhne mila
						*** type        : Num.a => a
						*** translation : product.[]

						? product.[5...1]		ab yaha jo input hai [5...1] iska data type [Int] hai jo product accept karta hai
										but ye return me [] list de raha hai ab jabki isme koi element nahi hai but data type same hai
										so ye hame return me 1 dega....
										
										sab data type ka khel hai bhaiiyyaaaaa.....
										so Practice, Practice and just Practice Bcoz....
										Practice makes men perfect not women...😏
										Bcoz....Women Born Perfect...🙂 
						1 : Int

	22) 3+4 is same like (+).3.(4) = 7 in which (+) is a function which takes an two inputs and produce an output

	23) 3::[1,4] is same like a (::).3.[1,4] = [3,1,4] in which (::) is a function which takes an two inputs and produce an output

	24) 'a' == 'a'  is same like (==).'a'.'a' = True in which (==) is a function which takes an two inputs and produce an output

	     same aise hai baki sare comparison function bhi work karenge eg - (<=).5.(10) = True

-}

-- there are many ways to write any function for example

fact1.0 = 1
fact1.n = n * fact1.(n-1)

fact2.n = product.[1...n]

fact3.[] = 1
fact3.xs = head.xs * fact3.(tail.xs)

-- working of below code
--      |   if (n==1) || (n==0) then  1 | else if n>1 then n * fact.(n-1)
 
fact4.n | (n==1) || (n==0) = 1 | n>1 = n * fact.(n-1)



-- 								  Some Basic Question and Working of Inbuild Function


--Q No 1 - Below Function return an succesor of an x that means if we pass 5 then it will return an next element of 5 which is nothing but an 6

succ.x=x+1

{- 
Output - 
	? succ.7
	8 : Int
-}

--Q No 2 - Below function return an first element of the list without its type.

{-
	? head.["Shahnoor","Shapik","Maniyar"]
	Shahnoor
-}

--Q No 3 - Below function return an last element of the list without its type.

{-
	? last.["Shahnoor","Shapik","Maniyar"]
	Maniyar
-}

--Q No 4 - Below function remove last element from the list and return remainig list without its type.

{-
	? init."Shahnoor"
	Shahnoo
-}

--Q No 5 - Below function remove first element from the list and return remainig list without its type.

{-
	? tail."Shahnoor"
	hahnoor
-}

--Q No 6 - Below Function takes two input divident and divisor and return it's quotient and if divisor = 0 then it will return an personlized error message.

fun.x.y = if (y == 0) then error."Divide by Zero Error" else x/y 

{- 
Output -
	? fun.4.(2)
	2 : Int
	? fun.4.(0)

	Program error: Divide by Zero Error
-}

--Q No 7 - Below function takes an string and return an list with its ASCII Value

asc.(x::xs) = ord.x :: asc.xs
asc.[] = [] 

{- 
Output -
	? asc."Shahnoor"
	[83, 104, 97, 104, 110, 111, 111, 114] : [Int]
-}

--Q No 8 - Below function takes an list of integer and return an list of character

loc.(x::xs) = chr.x :: loc.xs
loc.[] = [] 

{-
Output -
	? loc.[83, 104, 97, 104, 110, 111, 111, 114]
	Shahnoor
-}

--Q No 9 - Below function takes an String and encode it

encr.(x::xs) = [chr.(flip.mod.(ord.x).(ord.'z'))] :: encr.xs
encr.[] = []

--but it is difficult to decode cause of by using mod we lose the main value

{-
Output -
	? ascend."Shahnoor Maniyar"
	'↕↓↕♀♂→-↓♀◄☺↓
-}

--Q No 10 - Below function takes an list of integer and return odd number of list

nt.(x::xs) = if not.(mod.x.(2) == 0) then x :: nt.xs else nt.xs
nt.[] = [] 

{-
Output -
	? nt.[1,2,3,6,8]
	[1, 3] : [Int]
-}

--Q No 11 - Below function takes an two integer and return an maximum integer

{-
	? max.5.(9)
	9 : Int
-}

--Q No 12 - Below function takes list of anything and remove the redundancy from them

{-
	? nub."Shahnoor"
	Shanor
-}

--Q No 13 - Below function takes two inputs either may be single char or may be single number and return value between them.

{-
	? ['A'...'S']
	ABCDEFGHIJKLMNOPQRS

	Or we can use...

	? enumFromTo.1.(8)
	[1, 2, 3, 4, 5, 6, 7, 8] : [Int]

	Both Function can support two types of inputs either may be char or may be number
-}

--Q No 14 - Below function is show that how to use compose function.

main.x = (sqr;suc).x
sqr.y = y * y
suc.z = z + 1 

{-

Output -
	? main.5
	26 : Int

	eiher we can write above code or we can write below both are same 

main.a = suc.(sqr.a)

	Note - both function have must same data type and number of inputs second function takes input as result of first function

	main function takes an integer first it will sqr then add one into result of sqr

-}

--Q No 15 - we can use constant like below Note -  Pi is inbuid function so it return an actual value of pi

radius = 5.4
areaofcir = pi * radius		{- here i want area of circle so i need value of pi and radius. the value of pi is inbuild so there is not need to declare externally
				   but value of radius is not inbuild so we need to declare it...
				-}
periofcir = 2.0 * pi * radius	{- here one thing is which is we declare 2 as floating point number cause of
				   we know if we need to perform any operation the data type of oprand must be same, here data type of pi and radius is float 
				   thats why we use 2.0 instead of 2 
				-}




--									Now Here Try To Create Your Own Inbuild Function

--Q No 1 - Myhead

myhead.(x::xs) = x

{-
Output -
	? myhead."shahnoor"
	's' : Char
	? head."shahnoor"
	's' : Char
	? :t head
	head : [a] -> a
	? :t myhead
	myhead : [a] -> a
-}

--Q No 2 - Mylast

mylast.[x] = x
mylast.(x::xs) = mylast.xs

{-
Output -
	? mylast
	mylast : [a] -> a
	? last
	last : [a] -> a
	? last."Shahnoor"
	'r' : Char
	? mylast."Shahnoor"
	'r' : Char
-}

--Q No 3 - Myinit

myinit : [a] -> [a]
myinit.[x] = []
myinit.(x::xs) = x :: myinit.xs 

{-
Output -
	? init
	init : [a] -> [a]
	? init."a"
	
	? init."Hello"
	Hell
	? myinit
	myinit : [a] -> [a]
	? myinit."a"
	
	? myinit."Hello"
	Hell
-}

--Q No 4 - Mytail

mytail.(x::xs) = xs

{-
Output -
	tail : [a] -> [a]
	? tail."H"
		
	? tail."Hello"
	ello
	? mytail
	mytail : [a] -> [a]
	? mytail."H"
	
	? mytail."Hello"
	ello
-}

--Q No 5 - myid

myid.x = x

{-
Output -
	? :t myid
	myid : a -> a
	? myid."Shahnoor"
	Shahnoor
	? myid.[]
	[] : [a]
	? :t id
	id : a -> a
	? id.[]
	[] : [a]
	? id."Shahnoor"
	Shahnoor
-}

--Q No 5 - myord

myord.x = if(elem.x.['A'...'Z']) then 64 + rem1.x.['A'...'Z'] else 96 + rem1.x.['a'...'z']
rem1.x.(y::ys) = if(x >= y) then 1 + (rem1.x.ys) else 0 + (rem1.x.ys)   
rem1.x.[] = 0

--Note - This myord is only work for Alfabets.
--Task - Try to Build myord function which is actually work like a ord function

{-
Output -
	? ord
	ord : Char -> Int
	? ord.'a'
	97 : Int
	? myord
	myord : Char -> Int
	? myord.'a'
	97 : Int
-}

--Q No 7 - mychr

mychr.n = if(elem.n.[65...90]) then rem2.['A'...'Z'].(n - 65) else if (elem.n.[97...122]) then rem2.['a'...'z'].(n - 97) else error."Number is out off range"
rem2.(y::ys).0 = y
rem2.(y::ys).n =  rem2.ys.(n-1)  

--Note - This mychr is only work for Alfabets.
--Task - Try to Build mychr function which is actually work like a chr function

{-
Output -
	? chr
	chr : Int -> Char
	? chr.97
	'a' : Char
	? mychr
	mychr : Int -> Char
	? mychr.97
	'a' : Char
-}

--Q No 8 - mynot

mynot.x | x = False | (x==False) = True  

--we know '|' work like a if - else-if

{-
Output -
	? not
	not : Bool -> Bool
	? mynot
	mynot : Bool -> Bool
	? not.True
	False : Bool
	? mynot.False
	True : Bool
-}

--Q No 9 - mymax

mymax.x.y | x > y = x | x < y = y

{-
Output -
	? :t max
	max : Ord.a => a -> a -> a
	? max."Shahnoor"."Noor"
	Shahnoor
	? max.5.(10)
	10 : Int
	? :t mymax
	mymax : Ord.a => a -> a -> a
	? mymax."Shahnoor"."Noor"
	Shahnoor
	? mymax.5.(10)
	10 : Int
-}

-- Now Try To Build mymin

--Q No 10 - mynub

mynub.[] = []
mynub.(x::xs) = x :: mynub.(mynubhelp.x.xs)

mynubhelp.x.[] = []
mynubhelp.x.(y::ys) | (x==y) = mynubhelp.x.ys | (x/=y) = y :: mynubhelp.x.ys


{-
Output -
	? :t nub
	nub : Eq.a => [a] -> [a]
	? nub."ABCDEDCVBAS"
	ABCDEVS
	? :t mynub
	mynub : Eq.a => [a] -> [a]
	? mynub."ABCDEDCVBAS"
	ABCDEVS
-}

--Q No 11 - enumfromto or [1...5]

mynumfromto.x.y = range3.(range4.x.y).(y-x)

range3.xs.0 = []
range3.(x::xs).n = x :: range3.xs.(n-1)

range4.x.0 = []
range4.x.y = x :: range4.(x+1).(y-1)

mycharfromto.x.y = loc.(mynumfromto.(ord.x).((ord.y)+1)) 

{-
Output -
	? :t ['a'...'f']
	enumFromTo.'a'.'f' : [Char]
	? :t [3...6]
	enumFromTo.3.6 : [Int]
	? ['a'...'f']
	abcdef
	? [3...6]
	[3, 4, 5, 6] : [Int]
	? :t mycharfromto
	mycharfromto : Char -> Char -> [Char]
	? :t mynumfromto
	mynumfromto : Int -> Int -> [Int]
	? mycharfromto.'a'.'h'
	abcdefgh
	? mynumfromto.2.(10)	
	[2, 3, 4, 5, 6, 7, 8, 9] : [Int]
-}

--Q No 12 - mytoupper

mytoupper.x = chr.((ord.x) - 32)

{-
Output -	
	? toUpper
	toUpper : Char -> Char
	? toUpper.'s'
	'S' : Char
	? mytoupper
	mytoupper : Char -> Char
	? mytoupper.'s'
	'S' : Char
-}

--try to build mylower function

--Q No 13 - mymap

mymap : (a -> b) -> [a] -> [b]
mymap.func.(x::xs) = func.x :: mymap.func.xs
mymap.func.[] = []

{-
Output -		
	? map
	map : (a -> b) -> [a] -> [b]
	? map.sqr.[1,4,7,8]
	[1, 16, 49, 64] : [Int]
	? mymap
	mymap : (a -> b) -> [a] -> [b]
	? mymap.sqr.[1,2,3,6]
	[1, 4, 9, 36] : [Int]
-}

--Q No 14 - myfilter

myfilter.func.[] = []
myfilter.func.(x::xs) = if(func.x) then x :: myfilter.func.xs else myfilter.func.xs

validatefilter.x = x > 5

{-
Output -			
	? filter
	filter : (a -> Bool) -> [a] -> [a]
	? myfilter
	myfilter : (a -> Bool) -> [a] -> [a]
	? filter.validatefilter.[1,5,9,7,3,2,4,8,6]
	[9, 7, 8, 6] : [Int]
	? myfilter.validatefilter.[1,5,9,7,3,2,4,8,6]
	[9, 7, 8, 6] : [Int]
-}

--Q No 15 - myflip

myflip.func.x.y = func.y.x

{-
Output -				
	? flip
	flip : (a -> b -> c) -> b -> a -> c
	? myflip
	myflip : (a -> b -> c) -> b -> a -> c
	? flip.(>).4.(5)
	True : Bool
	? myflip.(>).4.(5)
	True : Bool
-}

--Q No 16 - mycomposite

mycomposite.func1.func2.x = func2.(func1.x)

{-
Output -					
	? (;)
	(;) : (a -> b) -> (b -> c) -> a -> c
	? mycomposite
	mycomposite : (a -> b) -> (b -> c) -> a -> c
	? (;).suc.sqr.10
	121 : Int
	? mycomposite.suc.sqr.10
	121 : Int

Special Output - 
	? (suc;sqr;suc).10
	122 : Int
	? mycomposite.(mycomposite.suc.sqr).suc.10	laga hi tha confusion hoga simple hai, sabse pehle bracket solve hoga bracket ke andar hamne same function ko during runtime
							call kiya hai (may be han...😅) so (mycomposite.suc.sqr) ye ek function ke tarah work kar raha hai which is func1 jo ham code me dekh sakte
							hamne func1 ko x pass kiya so yaha hamara output ayenga 121 i.e. (mycomposite.suc.sqr).10 iska working bhi easy hai 
							sabse pehle 10 suc ko pass hoga suc.10 aur ye hame 11 return karenga then 11 pass hoga sqr function ko aur wo return karenga
							121 fine....
							so ab func1 pura hua func1 ne 121 return kiya ab ye suc function ko pass hoga which is func2 so aise hamara final answer 122 ayega
	122 : Int					here i learn new thing aur wo ye hai ki, ham function ko as a input bhi pass kar sakte during runtime.
-}



--										Practice Questions from pdf


-- Section A 

-- Q No 1 - Create a function called Third, which gives you 3rd element from the list.

third.(x::y::z::xs) = z

{-
Output -
	? third.[1,2,3,4,5,6]
	3 : Int
-}

-- Q No 2 - Create a function called SecondLast, which gives you second last element from the list.

secondlast.[x] = x
secondlast.[x,y] = x 
secondlast.(x::xs) = secondlast.xs

{-
Output -
	? secondlast.[1,2,3,4,5,6]
	5 : Int
-}

-- Q No 3 - Create a function called SumUpto which takes a number and adds all numbers starting from 1 to that number. So if you pass 5 , the answer is 1+2+3+4+5 = 15

-- below function can't run for big integers

--sumupto.0 = 0
--sumupto.n = n + sumupto.(n-1)

--or

sumupto.n=(n*(n+1))/2

-- above funciton can run for big integers

{-
Output -
	? sumupto.228
	26106 : Int
-}

-- Q No 4 - Create a function called fact which takes a number and return factorial of that number.

fact.1 = 1
fact.n = n * fact.(n-1)

{-
Output -
	? fact.5
	120 : Int
-}

-- Q No 5 - Create a function Addfirst which takes two lists and returns the sum of first element of both lists

{-
addfirst.[].[] = 0
addfirst.[].ys = (head.ys)
addfirst.xs.[] = (head.xs)
addfirst.xs.ys = (head.xs) + (head.ys)
-}

--or

addfirst.[].[] = 0
addfirst.[].(y::ys) = y
addfirst.(x::xs).[] = x
addfirst.(x::xs).(y::ys) = x+y

{-
Output -
	? addfirst.[1,2,3].[8,5,2]
	9 : Int
-}

-- Q No 6 - Create a function Tableof which takes two numbers and returns the list which contains the table of that first number, upto 2nd number times...

tableof.x.0 = [] 
tableof.x.y = tableof.x.(y-1) ++ [x*y]

{-
Output -
	? tableof.5.(10)
	[5, 10, 15, 20, 25, 30, 35, 40, 45, 50] : [Int]
-}

-- Q No 7 - Create a function called HowmanyBiggerthan which takes a list and a number and tells you how much elements in list are bigger or equal to that number.

howmanybiggerthan.[].y = 0
howmanybiggerthan.(x::xs).y = if x >= y then 1 + howmanybiggerthan.xs.y else howmanybiggerthan.xs.y 

{-
Output -
	? howmanybiggerthan.[1,2,3,4,5,6,7,8,9].5
	5 : Int
-}

-- Q No 8 - Create a function called AddOdd, which adds all the odd numbers from the list

addodd.[] = 0
addodd.(x::xs) = if mod.x.(2) /= 0 then x + addodd.xs else addodd.xs

{-
Output -
	? addodd.[1,2,3,4,5,6,7,8,9]
	25 : Int
-}

-- Q No 9 - Create a function replaceEven which replaces all the even number of the list with ‘Idiot’ and leaves all even numbers as it is
{-
ans - we cant replace, because, list can contain only same type of data
 but incase list conatin only one element and this element is even however we can't replace, because, read question carefully in last line
 it was stated that "leaves all even numbers as it is" and it is impossible, cause list can contain only same type of data
 but if question is like Create a function replaceEven which replaces all the number of the list with ‘Idiot’

replaceeven : [Int] -> [[Char]]

	you are really idiot.....🤣
-}

--replaceeven.[x] = if mod.x.(2) == 0 then "you are Idiot" else error."List Contain odd Number or more than one element"

--or

replacenumber.(x::xs) = "You are Idiot" :: replacenumber.xs
replacenumber.[] = []

replaceeven.(x::xs) = if (sizof.xs > 0) then "You Are Idiot" else replaceeven.xs
replaceeven.[] =  "Hence it is proov that You Are Really Idiot..."  
-- don't take it seriously it is just for fun...

-- Q No 10 - Write a function called RemoveoddList which takes a list of list which contains some elements and removes all those lists which are of odd size

removeoddlist.[] = []
removeoddlist.(x::xs) = if mod.(sizof.x).2 /= 0 then removeoddlist.xs else x :: removeoddlist.xs 

--creating helping function

sizof.(x::xs) = 1 + sizof.xs
sizof.[] = 0 

{-
Output -
	? removeoddlist.[[1,2,3],[8,5,2,4],[7,4,6,9,5],[1],[8,9]]
	[[8, 5, 2, 4], [8, 9]] : [[Int]]
	? removeoddlist.[[1,2,3,4],[8,5,2,4],[8,9]]
	[[1, 2, 3, 4], [8, 5, 2, 4], [8, 9]] : [[Int]]
	? removeoddlist.[[1,2,3],[8,5,2],[8,9,5]]
	[] : [[Int]]
	? removeoddlist.[[1,2,3],[8,5,2]]
	[] : [[Int]]
	? removeoddlist.[[1]]
	[] : [[Int]]
	? removeoddlist.[[]]
	[[]] : [[a]]
	? removeoddlist.[]
	[] : [[a]]
	? removeoddlist.["Shahnoor","Shapik","Maniyar"]
	["Shahnoor", "Shapik"] : [[Char]]
-}

-- Q No 11 - Create a function Comparelist which takes two equal size lists which contains numbers. The function returns a list containing 1 or 0.
--	     It will contain 1 if the number at particular position in 1st list is bigger or equal to number in 2nd list number at same position or index , else 0

comparelist : [Int] -> [Int] -> [Int]
comparelist.[].[] = []
comparelist.xs.[] = error."Second List is Empty... make sure that list is not empty"
comparelist.[].ys = error."First List is Empty... make sure that list is not empty"
comparelist.(x::xs).(y::ys) = if (sizof.xs == sizof.ys) then if (x >= y) then [1] ++ comparelist.xs.ys else [0] ++ comparelist.xs.ys else error."One of The List is not same size"

{-
Output -
	? comparelist.[1,2,3,4,5].[2,4,8,6,0]
	[0, 0, 0, 0, 1] : [Int]
-}

-- Q No 12 - Create a function ReverseAddone which reverses the list of numbers and adds 1 into each number

reverseaddone.[] = []
reverseaddone.(x::xs) = reverseaddone.xs ++ [x+1]

{-
Output -
	? reverseaddone.[8,5,4,6,2]
	[3, 7, 5, 6, 9] : [Int]
-}

-- Q No 13 - A function func which takes a number n and returns n*2 + 3 Answer to Func.5 will be 13 for example
 
func.n = (n*2)+3

{-
Output -
	? func.5
	13 : Int
-}

-- Q No 14 - Create a function secondbiglist which takes lists of lists of numbers and returns you new list of numbers which contains the 2nd largest number from each list

secondbiglist : [[Int]] -> [Int]
secondbiglist.[] = []
secondbiglist.(x::xs) = [largenumber.x] ++ secondbiglist.xs

-- helping function

largenumber:[Int] -> Int
largenumber.[a] = a
largenumber.[a,b] = if (a>b) then b else a
largenumber.(a::b::x) = if (a>b) then largenumber.(a::x) else largenumber.(b::x) 

{-
Output -
	? secondbiglist.[[1,2,3],[7,4,1],[7,8,9],[8,5,2],[4,5,6]]
	[2, 1, 8, 2, 5] : [Int]
-}

-- Q No 15 - Create a function thirdbig which takes lists of numbers and returns you third biggest number

thirdbig : [Int] -> Int
thirdbig.[] = error." for this question list contain atleat 3 elements"
thirdbig.[x] = error." for this question list contain atleat 3 elements"
thirdbig.[x,y] = error." for this question list contain atleat 3 elements"
thirdbig.[x,y,z] =    if ((x <= y)&&(x <= z)) then x else if ((y <= x) && (y <= z)) then y else z
thirdbig.(x::y::xs) = if(x>y) then thirdbig.(x::xs) else thirdbig.(y::xs)

{-
Output -
	? thirdbig.[1,2,3,4,5,6,7,8,9]
	7 : Int
-}

-- here is your assignment do it if you understand the basic consept.

-- Q No 16 - Create a function nbig which takes lists of numbers and returns you n'th biggest number

--nbig : [Int] -> Int -> Int

--nbig.(x::y::xs).n = if (sizof.xs == n) then nbigg.xs else if(x>y) then nbig.(x::xs) else nbig.(y::xs)
--nbigg.(x::xs) =  if (sizof.xs == 1) then x else nbigg.(reverse.(sort.xs))

nbig.xs.0 = head.((sort;reverse).xs) 
nbig.(x::xs).n = if(sizof.xs == n) then (sort;head).xs  else nbig.((sort;reverse).xs).(n-1)

{-
Output -
	? nbig.[9,6,1,4,0,6,0,2,0,2].5
	2 : Int
-}

-- Q No 17 - Create a function which takes list of numbers and returns second highest number.

secondhighest : [Int] -> Int
secondhighest.xs = (sort;reverse;shm).xs 
shm.(x::y::xs) = y  

{-
Output -
	? secondhighest.[9,6,1,4,0,6,0,2,0,2]
	6 : Int
-}

-- Q No 18 - Creat a function which does following - [0,1,2,1,2,0,0,0,1,2,1,1,1,0,0,2] -> [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2]

-- Not Sufficient

list012.(p::ps).qs.rs.ss = if (p == 0) then list012.(ps).(p::qs).rs.ss else if (p == 1) then list012.ps.qs.(p::rs).ss else list012.ps.qs.rs.(p::ss)
list012.[].qs.rs.ss = qs ++ rs ++ ss



{-
Output -

-}

-- Q No 19 - Creat a function which takes number and returns its binary value.

bin.1 = [1]
bin.n = bin.(n/2) ++ [mod.n.(2)]

-- Q No 20 - Creat a function which takes list of list of int and return add of 1st element of 1st list likewise nth element of nth list.

addlist.(x::xs).n = add.x.n + addlist.xs.(n-1)
addlist.[].0 = 0
add.(y::x).n = y + add.x.(n-1)
add.[].n = 0

-- Q No 21 - Create a function to find factor a number in a list

factor.n = facto.n.n
facto.a.0 = []
facto.a.b = if(mod.a.(b) == 0) then facto.a.(b-1) ++ [b] else facto.a.(b-1)

{-
Output -
	? factor.10
	[1, 2, 5, 10] : [Int]
-}

-- Q No 22 - Create a function Joinlist which takes 3 lists and joins all of them into one list, without using ++ operator

joinlist1.x.y = [x] ++ [y] 
joinlist.(x::xs).(ys).(zs) = x :: joinlist.(xs).(ys).(zs)
joinlist.[].(y::ys).(zs) = y :: joinlist.[].(ys).(zs)
joinlist.[].[].(z::zs) = z :: joinlist.[].[].(zs)
joinlist.[].[].[] = []


{-
Output -
	? joinlist.[1,2,3].[6,5,4].[7,8,9]
	[1, 2, 3, 6, 5, 4, 7, 8, 9] : [Int]
	? joinlist."Shahnoor"."Shapik"."Maniyar"
	ShahnoorShapikManiyar
-}

-- Q No 23 - create a function collatz which take n and starting from n it creates the series and returns the list uptill end point which will end with 1 
--           So if you get input as 11 the answer is [11,34,17,52,26,13,40,20,10,5,16,8,4,2,1] If Input is 5 then result will be [5,16,8,4,2,1]

collatz.1 = [1]
collatz.n = [n] ++ if(mod.(n).2 == 0) then collatz.(n/2) else collatz.((n*3) + 1)

{-
Output -
	? collatz.11
	[11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] : [Int]
	? collatz.5
	[5, 16, 8, 4, 2, 1] : [Int]
	? collatz.10
	[10, 5, 16, 8, 4, 2, 1] : [Int]
-}

-- Q No 23 - Create a function Remdup which takes a list of numbers and removes all duplicates. In the final output list, every number shall not repeat more than once.

remdup.(xs) = nub.xs

--or

remdup1.[]=[]
remdup1.(x::xs)=x::remdup1.(remove.xs.x)

remove.[].x=[]
remove.(y::ys).x=if(y==x) then remove.ys.x else y::remove.ys.x


{-
Output -
	? remdup.[1,2,4,1,3,4,5,4]
	[1, 2, 4, 3, 5] : [Int]
-}

-- Q No 24 - Write a function listsize4 which takes a list and tells you if its size is of length which is multiple of 4 or not?
--           Means the function takes a list and returns TRUE if list size is 4 or 8 or 12 ... else it will return False

listsize4.(xs) = if(mod.(sizof.xs).4 == 0) then True else False

{-
Output -
	? listsize4.[1,2,3,4,5]
	False : Bool
	? listsize4.[1,2,3,4]
	True : Bool
-}

-- Q No 25 - Write a function which takes two arguments x and y but can randomly return either 1st element or 2nd element?

--rand.x.y = if(mod.(sizof.(joinlist1.x.y)).3 == 0 || mod.(sizof.(joinlist1.x.y)).3 == 1) then x else y   

--rand.x.y = 

{-
Output -

-}

-- Q No 26 - Write a function called sumproduct which takes tow same sized list and return its prodcut + sum i.e - [1,2,3].[4,5,6] = 1*4+2*5+3*6 = 32

sumproduct.xs.ys = sum.(sumpro.xs.ys)
sumpro.(x::xs).(y::ys) = x*y :: sumpro.xs.ys
sumpro.[].[] = [] 

{-
Output -
	? sumproduct.[1,2,3].[4,5,6]
	32 : Int
-}

-- Q No 27 - create a function which takes an list and int and rotate list n times and return final rotation [1,2,3,4,5,6,7,8,9,10].2 -> [3, 4, 5, 6, 7, 8, 9, 10, 1, 2]

rotatelist.(xs).n = firstlist.xs.n ++ lastlist.xs.n  

firstlist.xs.0 = xs
firstlist.(x::xs).n =  firstlist.xs.(n-1)

lastlist.xs.0 = []
lastlist.(x::xs).n =  x :: lastlist.xs.(n-1)

{-
Output -
	? rotatelist.[1,2,3,4,5,6,7,8,9].5
	[6, 7, 8, 9, 1, 2, 3, 4, 5] : [Int]
	? rotatelist.[1,2,3,4,5,6,7,8,9,10].2
	[3, 4, 5, 6, 7, 8, 9, 10, 1, 2] : [Int]
-}

-- Q No 28 - create a function which takes an a and b and return the list filled with a into b times -> filllist.'a'.5 = ['a','a','a','a','a']

filllist.x.0 = []
filllist.x.n = x :: filllist.x.(n-1)

{-
Output -
	? filllist.'a'.5
	aaaaa
	? filllist.(2).5
	[2, 2, 2, 2, 2] : [Int]
	? filllist."Shahnoor".5
	["Shahnoor", "Shahnoor", "Shahnoor", "Shahnoor", "Shahnoor"] : [[Char]]
-}

-- Q No 29 - create a function which takes an a and b and return the remainder

myownmod.a.b = if(a>b) then a-(b*(a/b)) else error."First Argument must be greater than second Argument"

{-
Output -
	? mod.10.(2)
	0 : Int
	? myownmod.10.(2)
	0 : Int
	? mod.100.(7)
	2 : Int
	? myownmod.100.(7)
	2 : Int
-}

-- Q No 30 - create a function which return the range eg range.2.10 -> [2,3,4,5,6,7,8,9] without using any comparison function

mainrange.a.b = range1.(range2.a.b).(b-a)

range1.xs.0 = []
range1.(x::xs).n = x :: range1.xs.(n-1)

range2.a.0 = []
range2.a.b = a :: range2.(a+1).(b-1)

{-
Output -
	? range.5.(10)
	[5, 6, 7, 8, 9] : [Int]
-}

-- Q No 30 - create a range function of python range.start.end.difference

{-
try to solve it without using any comparison function

Output -

-}

-- Q No 31 - create a function which return true and false with respect to size of list if size of list is even then true otherwise false dont use any comparison

evenis.[] = True
evenis.[x] = False
evenis.(x::y::xs) = evenis.xs

{-
Output -
	? evenis.[1,2,3]
	False : Bool
-}

-- Q No 32 - create median function i hope you know median = median is center number of list and is there is no any center number then it gives an average

median : [Int] -> Int
median.[x] = x
median.[x,y] = (x+y)/2
median.xs = median.(tail.(init.xs))

{-
Output -
	? median.[1,2,3,4,5,6,7,8,9]
	5 : Int
	? median.[1,2,3,4,5,6,7,8,9,10]
	5 : Int
-}

-- Q No 34 - create a function issorted ehich return true false with respect to list if list is sorted then return true else false

issorted.[x] = True
issorted.(x::y::xs) = if(x<y) then issorted.(y::xs) else False
 
{-
Output -
	? issorted.[4,6,9,7,8]
	False : Bool
	? issorted.[4,6,7,8,9]
	True : Bool
-}

-- Q No 35 - Find bigger list form two list without using size and return it
 
{-

-}

-- Q No 36 - Create a function which gives running total of a list of numbers from either left or right side depending on the input given

{-
   Example Input 		Example Output

--[1,5,4,3,2,8].”Right” 	[23,22,17,13,10,8]
--[1,5,4,3,2,8].”Left” 		[1,6,10,13,15,23]
-}

mainruntotal.xs.side = if(side == "Left") then runtotal.xs else if(side == "Right") then (reverse;runtotal;reverse).xs else error."Plz Enter Correct Input"
runtotal.(x::y::xs) = x :: runtotal.( (x+y) :: xs)
runtotal.[x] = [x]

{-
Output -
	? mainruntotal.[1,5,4,3,2,8]."Left"
	[1, 6, 10, 13, 15, 23] : [Int]
	? mainruntotal.[1,5,4,3,2,8]."Right"
	[23, 22, 17, 13, 10, 8] : [Int]
	? mainruntotal.[8]."Right"
	[8] : [Int]
	? mainruntotal.[1,5,4,3,2,8]."Tight"

	Program error: Plz Enter Correct Input
-}

-- Q No 37 - Check if a string is PALINDROME or not..

{-
Something is Palindrome if its same word from left to right and right to
left, here are some example of Palindrome
	• KAYAK
	• 101101
	• AABBCCCBBAA

-}

--palindrome.xs = if (reverse;(==)).xs.xs then "List is Palindrome" else "List is not Palindrome"

palindrome.xs= (reverse;(==)).xs.xs -- here (==) takes two input one is output of reverse and second one is actual list (xs).

{-
Output -

-}


-- Q No 38 - Create a function which takes a list of tuples of (Int,Int) type and returns the list of product of those numbers in tuples

{-
	Example Input 			Example Output
	[(3,4),(5,3),(6,2),(100,2)] 	[12,15,12,200]

-}

listtup : Num.Int => [(Int,Int)] -> [Int]

listtup= map.(\(x,y) -> x*y)

-- product does'nt support for tupple

--pro.(x,y) = x*y -- hence we write own multiplication function

{-
Output -
	? listtup.[(3,4),(5,3),(6,2),(100,2)]
	[12, 15, 12, 200] : [Int]
-}

-- Q No 39 - Write a function which takes a list of names (String) does 3 things

{-
Step 1 : Removes all the single names (which are single words)
Step 2 : Capitalize the First Letter of name like “abhay gupta” becomes “Abhay Gupta” and then puts the name along with length of name in tuple)

Example Input
[“Preeti” , “abhay” , “abhay gupta”, “neeraj kumar singh”,”Ajay”,”ravi Saxena”]

Example Output
[(“Abhay gupta”,11),(“Neeraj kumar singh”,18),(“Ravi Saxena”,11)]

-}

mainsingle = filter.(\xs -> elem.32.(asc.xs)) ; map.(\xs -> ((head;toUpper).xs :: xs,length.xs))
--mainsingle = (filter.removesingle) ; (map.capitalize)

--removesingle.xs = elem.32.(asc.xs)
--capitalize.(x::xs) = if(elem.(ord.(x)).[97...122]) then ((chr.((ord.x) - 32)) :: xs,sizof.xs) else (x :: xs,sizof.xs) 
--capitalize.xs = (chr.((ord.(head.xs)) - 32) :: xs,sizof.xs) 
--capitalize.xs = ((head;toUpper).xs :: xs,length.xs)

{-
Output -
	? mainsingle.["Preeti" , "abhay" , "abhay gupta", "neeraj kumar singh","Ajay","ravi Saxena"]
	[("Aabhay gupta",11), ("Nneeraj kumar singh",18), ("Rravi Saxena",11)] : [([Char],Int)]
-}

-- Q No 40 - Write a function which take the list of list of numbers and adds the 2nd element with the square of last element of each list

{-
	Example Input
	[[1,2,3,4,5],[5,3,4,2],[6,3,4],[7,8]]

	Out put
	[27, 7, 19, 72]
-}

secndsqr : Num.a => [[a]] -> [a]
secndsqr = map.(\xs -> ((tail;head).xs) + ((last;sqr).xs))

{-
Output -
	? secndsqr.[[1,2,3,4,5],[5,3,4,2],[6,3,4],[7,8]]
	[27, 7, 19, 72] : [Int]
-}

-- Q No 41 - Write a function which takes a list of numbers and returns TRUE or FALSE if its sorted. [1,3,5,6,6,9] -> True [1,13,52,61,64,900] -> True [1,3,8,6,1,5] -> False

checksort.xs = (sort;(==)).xs.xs

{-
Output -
	? checksort.[1,3,8,6,1,5]
	False : Bool
-}

-- Q No 42 - Write a function which takes a list and return a list of list which has all similar elements grouped into one list

--Input : [1,2,5,4,1,2,5,4,1,2,5,4,1,2,5,4] 
--Output : [[1,1,1,1],[2,2,2,2][5,5,5,5],[4,4,4,4]]

grplist.[] = []
grplist.(x::xs) = grplisthelp.x.xs :: grplist.(grplistrem.x.xs)

grplisthelp.y.[] = [y]
grplisthelp.y.(x::xs) = if (y == x) then x :: grplisthelp.y.xs else grplisthelp.y.xs

grplistrem.x.[] = []
grplistrem.x.(y::xs) = if (x /= y) then y :: grplistrem.x.xs else grplistrem.x.xs 


-- Q No 43 - Take 2 list A and B remove from the elements from A which exist in B

 
myelem.x.[] = False
myelem.x.(y::xs) = if(x==y) then True else myelem.x.xs

remab.[].ys = []
remab.(x::xs).ys = if myelem.x.ys then remab.xs.ys else x :: remab.xs.ys


-- Q No 44 - reverse list from position x to y only

--myrev.(x::xs).(1).b = [x] ++ myrev.xs.(a).(b-1)
--myrev.[].(a).b = []
--myrev.(x::xs).(0).b = myrev.xs.0.(b-1) ++ [x]
--myrev.xs.(0).0 = xs
--myrev.(x::xs).(a).b = [x] ++ myrev.xs.(a-1).(b)

myrev.xs.(1).b = myrevhelp.xs.b ++ xs
myrev.(x::xs).(a).b = [x] ++ myrev.xs.(a-1).b

myrevhelp.xs.0 = []
myrevhelp.(x::xs).b = myrevhelp.xs.(b-1) ++ [x] 


--										Practice Questions on Ctype


ctype Tree where
	Node: Int -> Tree -> Tree -> Tree
	Etree: Tree

-- Common Output - highestLayer.(Node.5.(Node.10.(Node.20.Etree.Etree).(Node.25.Etree.Etree)).(Node.15.Etree.(Node.30.Etree.Etree)))

--1)highest layer of tree acoornding to maximum number of node in layer

addL.[].[] = []
addL.[].b = b
addL.a.[] = a
addL.(x::xs).(y::ys) = x+y :: addL.xs.ys

hL.(Node.n.Etree.Etree) = [1]
hL.(Node.n.Etree.b) = [1] ++ addL.[].(hL.b)
hL.(Node.n.a.Etree) = [1] ++ addL.(hL.a).[]
hL.(Node.n.a.b) = [1] ++ addL.(hL.a).(hL.b)

maxPos.[(a,b)] = b
maxPos.((a,b) :: (x,y) :: xs) = if x < a then maxPos.((a,b) :: xs) else maxPos.((x,y) :: xs)

highestLayer.(Node.n.a.b) = maxPos.(zip.(hL.(Node.n.a.b)).[1...])


--2)sum of nodes of tree

sumTree.(Node.n.Etree.Etree)=n
sumTree.(Node.n.Etree.b)=n+sumTree.b
sumTree.(Node.n.a.Etree)=n+sumTree.a
sumTree.(Node.n.a.b)=n+sumTree.a+sumTree.b


--3)convert tree to ds

ttods : Tree -> [([Char],Int)]

ttods.(Node.n.Etree.Etree) =[("",n)]
ttods.(Node.n.Etree.b) = [("",n)]++(map.(\(a,b)->((::).'R'.a,b)).(ttods.b))
ttods.(Node.n.a.Etree) =[("",n)]++(map.(\(a,b)->((::).'L'.a,b)).(ttods.a))
ttods.(Node.n.a.b)=[("",n)]++((map.(\(a,b)->((::).'L'.a,b)).(ttods.a)))++(map.(\(a,b)->((::).'R'.a,b)).(ttods.b))


--convert ds to tree 

featch.[(x,y)]=y
remfirst.l=map.(\(x,y)->(tail.x,y)).l
dstot.[]=Etree
dstot.l=(Node.(featch.(filter.(\(x,y)->((==)."".x)).l)).(dstot.(remfirst.(filter.(\(x,y)->(if(x==[])then False else (==).'L'.(head.x))).l))).(dstot.(remfirst.(filter.(\(x,y)->(if(x==[])then False else (==).'R'.(head.x))).l))))



--4) greater than parent node node

gtn.(Node.n.Etree.Etree) = []
gtn.(Node.n.Etree.(Node.a.b.c)) = if a > n then a :: gtn.(Node.a.b.c) else gtn.(Node.a.b.c)
gtn.(Node.n.(Node.a.b.c).Etree) = if a > n then a :: gtn.(Node.a.b.c) else gtn.(Node.a.b.c)
gtn.(Node.n.(Node.a.b.c).(Node.p.q.r)) = if (a > n) && (p > n) then a :: p :: (++).(gtn.(Node.a.b.c)).(gtn.(Node.p.q.r)) else if (a > n) then a :: (++).(gtn.(Node.a.b.c)).(gtn.(Node.p.q.r)) else if (p > n) then p :: (++).(gtn.(Node.a.b.c)).(gtn.(Node.p.q.r)) else (++).(gtn.(Node.a.b.c)).(gtn.(Node.p.q.r))



--5)mirror of tree

mirrorTree.(Node.n.Etree.Etree) = Node.n.Etree.Etree
mirrorTree.(Node.n.Etree.b) = Node.n.(mirrorTree.b).Etree
mirrorTree.(Node.n.a.Etree) = Node.n.Etree.(mirrorTree.a)
mirrorTree.(Node.n.a.b) = Node.n.(mirrorTree.b).(mirrorTree.a)


--6)list of leaf nodes of tree

leafNode.(Node.n.Etree.Etree)=[n]
leafNode.(Node.n.Etree.b)=leafNode.b
leafNode.(Node.n.a.Etree)=leafNode.a
leafNode.(Node.n.a.b)=leafNode.a++leafNode.b	







{-

maintest : [[Int]] -> Int -> [[Int]] 
maintest.xs.num = laststep.(evenrev.xs).num

evenrev : [[a]] -> [[a]]
evenrev.(x::y::xs) = x :: reverse.(y) :: evenrev.xs
evenrev.[x,y] = x :: reverse.(y) :: []
evenrev.[x] = [x]

laststep : [[a]] -> Int -> [[a]]
laststep.(x::xs).num = rotate.x.num :: laststep.xs.num
laststep.[].num = []

rotate : [a] -> Int -> [a]
rotate.(x::xs).num = rotate.(xs ++ [x]).(num-1)
rotate.xs.0 = xs

-}
