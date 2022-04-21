'use strict'
import _ from 'lodash'
/* 

  구조 분해 할당 (Destructuring assignment)
  비구조화 할당

*/

// const user = {
// 	name: 'Heropy',
// 	age: 85,
// 	email: 'thesecon@gmail.com',
// }

// const { name: hello, age, email, address } = user

// console.log(`사용자의 이름은 ${name}입니다.`)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(c, b, a, d)

/* 

  전개 연산자 (Spread)

*/

// const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
// // console.log(fruits)
// // console.log(...fruits)

// const toObject = (a, b, ...c) => ({ a, b, c })
// console.log(toObject(...fruits))

/* 

  데이터 불변성(Immutability)

*/

// let a = 1
// let b = 4
// console.log(a, b, a === b)
// // 1 4 false
// b = a
// console.log(a, b, a === b)
// // 1 1 true
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)

// let a = { k: 1 }
// let b = { k: 1 }
// console.log(a, b, a === b)
// // {k:1} {k:1} false
// a.k = 7
// b = a
// console.log(a, b, a === b)
// // {k:7} {k:7} true
// a.k = 2
// console.log(a, b, a === b)
// // {k:2} {k:2} true
// let c = b
// console.log(a, b, c, a === c)
// // {k:2} {k:2} {k:2} true
// a.k = 9
// console.log(a, b, c, a === c)
// // {k:9} {k:9} {k:9} true

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

const user = {
	name: 'Heropy',
	age: 85,
	emails: ['sacultang@gmail.com'],
}
const copyUser = { ...user }
console.log(copyUser === user)
// true

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('---------')
console.log('---------')

user.emails.push('neo@naver.com')
console.log(user.emails === copyUser.emails)
console.log(user.emails)
console.log(copyUser.emails)

// function copyObj(obj) {
// 	const result = {}
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'object') {
// 			result[key] = copyObj(obj[key])
// 		} else {
// 			result[key] = obj[key]
// 		}
// 	}
// 	return result
// }
// const copiedobj = copyObj(user)
// console.log(copiedobj)

const clone = _.cloneDeep(user)
console.log(clone)
console.log(clone === user)
clone.emails.push('abc@naver.com')
console.log(user.emails === clone.emails)
