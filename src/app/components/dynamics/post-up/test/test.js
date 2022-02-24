const arr = ['one', 'two', 'three', 'four', 'five']

const arrLength = [...new Set(arr.map(item => item.length))].sort()

const result = {}

arrLength.forEach(length => {
     result[length] = []
     arr.forEach(item => {
          if (item.length === length) {
               result[length] = [...result[length], item]
          }
     })
})
console.log(result)




function getObj(myArr) {
     let arrCounter = [...new Set(myArr.map((a) => a.length))].sort()
     let grouping = arrCounter.map((a) => {
          return myArr.filter((b) => {
               return b.length === Number(a);
          })
     })
     let rs = arrCounter.reduce((a, b) => {
          let x = {
               [b]: grouping.filter(a => a[0].length === Number(b))[0]
          }
          return Object.assign(x, a);
     }, {})
     this.result = rs
     console.log(this.result);
}
getObj(arr)