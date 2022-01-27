

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]
console.log(students.map(s=> s.name))
console.log(students.map(s=> `Hi! My name is ${s.name}`))

students.map(s => {
    if(s.name === "Michel") {
        return {...s, scores: s.scores + 10}
    } else {
        return s;
    }
})

students.map(s => s.name === "Michel" ? {...s, scores: s.scores + 10} : s)

// <ul>
// {props.arr.map(i=> {
//     debugger
//     return (
//         <li><input type="checkbox" checked={i.isDone}><span>{i.item}</span></li>
//     )
// })}
//         </ul>
console.log(students.map(s=>s.name))
//имитировали метод map
console.log(myMap(students, s=>s.name))
function myMap(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i])
    }
    return newArr
}

console.log(students.filter(s=>s.scores >= 100))
console.log(myFilter(students, s=>s.scores >= 100))
//имитируем метод filter. можем гибко изменять условие фильтрации т.к. вынесли колбэк функцию отдельно
function myFilter(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        // callback(array[i]) ? newArr.push(array[i]) : null
        // или
        if(callback(array[i])) newArr.push(array[i])
    }
    return newArr
}

console.log(students.find(s=>s.name === 'Bob'))
console.log(myFind(students, s=>s.name === 'Bob'))
//имитация метода find
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) return array[i]
    }
}

//1. Функция принимает параметром массив чисел и возвращает максим значение
//   getMax1([1,4,6,8] => 8
//2 Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
//   getMax2([1,4,6,8] => [8,6]
//3 Функция принимает параметром массив чисел и кол-во макс, кот надо найти и возвращает массив макс значений
//   getMax3([1,4,6,8],3) => [8,6,4]
// math.max & sort не использовать

const max1 = (arr) => {
    return arr.reduce((a,b) => a > b ? a : b)
}
max1([1,5,9,87])
console.log(max1([1,5,9,87]))
// =====================================
function max2(arr) {
    let max1 = arr.reduce((a,b) => a > b ? a : b)  //99 - первое макс число

    let a = []   //[1,9,2] - удалила из массива первое макс число
    arr.filter(i => {
        if(i !== max1) a.push(i)
    })

    let max2 = a.reduce((a,b) => a > b ? a : b)  //9 - нашла опять макс число в массиве

    let res = []   //запушила все в один массив
        res.push(max1)
        res.push(max2)

    return res
}
max2([99,1,9,2,7,102])
console.log(max2([99,1,9,2,7,102]))
// ====================================
const max3 = (arr,n=1) => {
    let obj = arr.reduce((o, v) => { o[v] = v; return o; }, {});    //{1: 1, 2: 2, 7: 7, 9: 9, 99: 99, 102: 102}
    arr = Object.keys(obj).map(num => parseInt(num));   //[1, 2, 7, 9, 99, 102] - сложила их подрят

    arr.reverse()  //[102, 99, 9, 7, 2, 1]

    const res = arr.splice(0, n)  //отрезала от 0 индекса до того кол-ва кот получу
    return res.length === 1 ? String(res) : res;
}
max3([99,1,9,2,7,102],2)  //если не передадим кол-во то стартовое будет 1, т.к. оно запсиано при входе в ф-ю
console.log(max3([99,1,9,2,7,102],2))