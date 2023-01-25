/*
class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  get perimeter(){
    return this.width * 2 + this.height * 2;
  }
  get isValid (){
    return this.width > 0 && this.height > 0;
  }

  isBiggerThan (shape){
    return this.perimeter > shape.perimeter;
  }
}
class Square extends Rectangle {
  constructor (width){
    super(width, width);
  }
}
const r = new Rectangle (10, 20)
console.log(r.perimeter)
console.log(r.isValid)
const r2 = new Rectangle (-10, 20)
console.log(r2.isValid)
const c = new Square (10)
console.log(c.perimeter)
console.log(c.isBiggerThan(r)) 

try{
  
  if(width !== width){
    throw new Error('width is not valid')
  }
} catch(e){
  console.log('error')
}


class Book {
  #page = 1
  constructor(title, pages){
    this.title = title
    this.pages = pages
  }
  get page(){
    return this.#page
  }
  nextPage(){
    if (this.#page < this.pages){
      return this.#page++
    }
  }
  close(){
    return this.#page = 1
  }
}
class Library {
  #books = []
  addBook(book){
    this.#books.push(book)
  }
  addBooks(books){
    for (let book of books){
      this.addBook(book)
    }
  }
  firstBooksByLetter(letter){
    const found = []
    for (let book of this.#books){
      if(book.title[0].toLowerCase() === letter.toLowerCase()){
        found.push(book)
      }
    }
    return found
  }
}

  

const b = new Book('The Book of the Book', 10)
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)
const l = new Library ()
l.addBook(b)
l.addBooks([
  new Book ('Ready to player', 500),
  new Book ('The Hobbit', 2000),
  new Book ('The Fellowship of the Ring', 3000)
])
console.log(l.firstBooksByLetter('d')) */

function wait (duration){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration)
    }, duration)
  }) 
}
function waitFor (duration){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration)
    }, duration) 
  })
}
wait(2000)
  .then(() => {
    console.log('done 2s')
    return waitFor(1000)
  
  })
  .then(() => {
    console.log('done 1s')
    return wait(2000)
  })
  .then(() => {
    console.log('done 0s')
    return waitFor(0)
  })
 .catch(err => {
   console.log(err)
 
 })
const async = async function () {
  const duration = await wait(2000)
  console.log(`done ${duration}ms`)
}
async()
Promise.allSettled([wait(1000), waitFor(2000)])
  .then(console.log)
  .catch(console.log)

function addDate(date, days){
  const newDate = new Date(date.getTime())
  newDate.setDate(newDate.getDate() + days)
  return newDate
}

const MONTHS = 'months'
const YEARS = 'years'
const DAYS = 'days'
const MINUTES ='minutes'
const MONTHS_PER_YEAR = 12
const MONTHS_PER_DAY = 30
const DAYS_PER_WEEK = 7

function addInterval(date, interval){
  const parts = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ]
  for (let [unit, value] of Object.entries(interval)){
    parts[unit] = parts[unit] + value
  }
  
  return new Date(...parts)
}

const today = new Date()
const futur = addInterval(today, {
  [MONTHS]: 2,
  [DAYS]: 1,
  [MINUTES]: 3

})
console.log(today)
console.log(futur)
