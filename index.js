//Homework4

//Задание 1

let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

//Задание 2

let r = 1;

while (r <= 5) {
    console.log(r);
    r++;
}

//Задание 3

let t = 7;

while (t <= 22) {
    console.log(t);
    t++;
}

//Задание 4

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'

};

for (let nameUser in obj) {
    console.log(`${nameUser}-зарплата ${obj[nameUser]} долларов`);
}

//Задание 5

let n = 1000; 
let num = 0; 
while (n >= 50) { 
    n /= 2; 
    num++; 
} 
console.log(`Получилось число ${n}`); 
console.log(`Количество итераций ${num}`);

//Задание 6

let firstFridayMonth = 5;
for (let day = firstFridayMonth; day <= 31; day += 7) { 
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`); 
}