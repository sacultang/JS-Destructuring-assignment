# JS-Destructuring-assignment

#### 구조 분해 할당

---

## 객체데이터의 구조분해할당

- 어떤 객체데이터에서 구조 분해 해서 원하는 속성들만 꺼내서 사용할 수 있는 개념
- 데이터.속성 으로 표기하는 점표기법과 동일하다
- 데이터['속성'] 인덱싱 방법과도 같다

```js
const user = {
	name: 'Heropy',
	age: 85,
	email: 'thesecon@gmail.com',
}

const { name, age, email, address } = user

console.log(`사용자의 이름은 ${name}입니다.`)
// 사용자의 이름은 Heropy입니다.
console.log(`사용자의 이름은 ${age}입니다.`)
// 사용자의 이름은 85입니다.
console.log(address)
// undefined

const { name, age, email, address = 'korea' } = user
// 기본값을 지정해줄 수 있다.
```

```js
const user = {
  name: 'heropy',
  age: 85,
  email: 'thesecon@gmail.com'
  address: 'usa'
}

const { name, age, email, address = 'korea' } = user
console.log(address)
// usa 출력
```

구조분해 할때 기본값을 지정했어도 데이터 안에 값이 있으면 데이터의 값으로 출력 된다

객체데이터의 속성의 이름을 바꿀때

```js
const user = {
	name: 'Heropy',
	age: 85,
	email: 'thesecon@gmail.com',
}

const { name: hello, age, email, address } = user
console.log(hello)
// Heropy 출력된다

console.log(name)
// name is not defined 에러가 출력된다
```

---

## 배열데이터의 구조분해할당

- { }가 아닌 [ ]기호를 사용 해야 한다
- 객체데이터와는 다르게 인덱싱되어 있기 때문에 이름이 아닌 순서대로 추출해야 한다

```js
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)
// Apple Banana Cherry undefined 출력된다
```

중간에 있는 데이터를 추출하고 싶을때

- 필요없는 값은 비어두고 쉼표(,)로 순서를 구분해 주기만 하면 된다

```js
const fruits = ['Apple', 'Banana', 'Cherry']
const [, b] = fruits
console.log(b)
// Banana 가 출력된다
```

# 전개 연산자 (Spread)

- 배열데이터를 쉼표(,)로 구분되는 각각의 아이템으로 전개해서 출력한다.

```js
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
// ['Apple', 'Banana', 'Cherry'] 배열이 출력된다
console.log(...fruits)
// 'Apple' 'Banana' 'Cherry' 문자열로 출력된다
```

```js
const fruits = ['Apple', 'Banana', 'Cherry']
function toObject(a, b, c) {
	return {
		a: a,
		b: b,
		c: c,
	}
}
console.log(toObject(...fruits))
// {a: 'Apple', b: 'Banana', c: 'Cherry'}
console.log(toObject(fruits[0], fruits[1], fruits[2]))
// 전개 연산자로 작성한것과 같은 방법..

console.log(toObject(fruits))
// {a: Array(3), b: undefined, c: undefined}
// a에 배열자체가 들어가 버린다
```

fruits의 아이템들이 toObject의 인수로 들어가 객체데이터의 형태로 출력된다

---

```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObject(a, b, ...c) {
	return {
		a: a,
		b: b,
		c: c,
	}
}
console.log(toObject(...fruits))
// {a: 'Apple', b: 'Banana', c: Array(2)} 출력된다
```

매개변수에서 사용할때는 순서대로 받아보고 순서가 명확하지 않을때는
나머지를 배열의 형태로 다 받는다

# 데이터 불변성(Immutability)

- 원시 데이터 : String, Number, Boolean, undefined, null
  - 원시데이터들은 메모리에 만들어지면 불변한다.
  - 간단히 생긴게 같으면 같은 데이터, 다르면 다른 데이터이다.

```js
let a = 1
let b = 4
console.log(a, b, a === b)
// 1 4 false
b = a
console.log(a, b, a === b)
// 1 1 true
a = 7
console.log(a, b, a === b)
// 7 1 false
let c = 1
console.log(b, c, b === c)
// 1 1 true
```

- 참조형 데이터 : Object, Array, Function
  - 불변성이 없다. 즉, 가변한다
  - 모양이 같다고 같은 데이터는 아니다
  - 한 쪽을 수정하면 의도치 않게 다른쪽도 수정이 될 수 있다.

```js
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b)
// {k:1} {k:1} false
a.k = 7
b = a
console.log(a, b, a === b)
// {k:7} {k:7} true
a.k = 2
console.log(a, b, a === b)
// {k:2} {k:2} true
let c = b
console.log(a, b, c, a === c)
// {k:2} {k:2} {k:2} true
a.k = 9
console.log(a, b, c, a === c)
// {k:9} {k:9} {k:9} true
```

- 참조형 데이터를 새롭게 할당해서 완전히 구분지어 사용하고 싶으면
  복사라는 개념을 사용해 메모리상에서 분리해줘야 한다.
  - 복사에는 얕은복사와 깊은복사가 있다

```js
const user = {
	name: 'Heropy',
	age: 85,
	emails: ['sacultang@gmail.com'],
}
const copyUser = user
console.log(copyUser === user)
// true
user.age = 22
console.log(user.age) // 22
console.log(copyUser.age) // 22
// 데이터가 둘 다 변했다
```

1. 얕은 복사

```js
// 복사방법.1
// Object.assign()을 이용하는 방법
const user = {
	name: 'Heropy',
	age: 85,
	emails: ['sacultang@gmail.com'],
}
const copyUser = Object.assign({}, user)
console.log(copyUser === user)
// false
user.age = 22
console.log(user.age) // 22
console.log(copyUser.age) // 85

// 방법.2
// ...전개연산자를 이용하는 방법
const copyUser = { ...user }
console.log(copyUser === user)
// false
```

얕은 복사의 문제점

- 얕은 복사의 문제점은 겉표면만 복사하기 때문에 데이터 안의 또다른
  참조형 데이터는 복사가 되지 않는다.

```js
user.emails.push('neo@naver.com')
console.log(user.emails === copyUser.emails)
// ture
console.log(user.emails)
// ['sacultang@gmail.com', 'neo@naver.com']
console.log(copyUser.emails)
// ['sacultang@gmail.com', 'neo@naver.com']
```

2. 깊은복사

- 자바스크립트로 구현하기 까다롭다

```js
function copyObj(obj) {
	const result = {}
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			result[key] = copyObj(obj[key])
		} else {
			result[key] = obj[key]
		}
	}
	return result
}
const copiedobj = copyObj(user)
console.log(copiedobj)
```

user의 이메일은 배열이었는데 cpoiedobj에는 객체데이터로 바껴있다..
lodash를 사용하도록 하자..

```js
import _ from 'lodash'

const clone = _.cloneDeep(user)
console.log(clone === user)
// false

clone.emails.push('abc@naver.com')
console.log(user.emails === clone.emails)
// false
```

잘 복사 된다
