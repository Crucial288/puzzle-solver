function is38(array) {
  return array.reduce((total, value) => { return total + value }, 0 ) == 38
}

function dups(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    for (let j = 0, l = b.length; j < l; j++) {
      if (a[i] == b[j]) {
        return true
      }
    }
  }

  return false
}

let a3 = []
let a4 = []
let a5 = []

for (let a = 1; a <= 19; a++) {
  for (let b = 1; b <= 19; b++) {
    if (b == a) continue

    for (let c = 1; c <= 19; c++) {
      if (c == a) continue
      if (c == b) continue

      if (a + b + c == 38) {
        //console.log(`${a} ${b} ${c}`)
        a3.push([a, b, c])
      }
    }
  }
}

console.log(`Combinations of 3 ${a3.length}`)

for (let a = 1; a <= 19; a++) {
  for (let b = 1; b <= 19; b++) {
    if (b == a) continue

    for (let c = 1; c <= 19; c++) {
      if (c == a || c == b) continue

      for (let d = 1; d <= 19; d++) {
        if (d == a || d == b || d == c) continue

        if (a + b + c + d == 38) {
          //console.log(`${a} ${b} ${c} ${d}`)
          a4.push([a, b, c, d])
        }
      }
    }
  }
}

console.log(`Combinations of 4 ${a4.length}`)

for (let a = 1; a <= 19; a++) {
  for (let b = 1; b <= 19; b++) {
    if (b == a) continue

    for (let c = 1; c <= 19; c++) {
      if (c == a || c == b) continue

      for (let d = 1; d <= 19; d++) {
        if (d == a || d == b || d == c) continue

        for (let e = 1; e <= 19; e++) {
          if (e == a || e == b || e == c || e == d) continue

          if (a + b + c + d + e == 38) {
            //console.log(`${a} ${b} ${c} ${d} ${e}`)
            a5.push([a, b, c, d, e])
          }
        }
      }
    }
  }
}

console.log(`Combinations of 5 ${a5.length}`)

let count = 0
for (let l1 = 0; l1 < a3.length; l1++) {
  let L1 = a3[l1]
  //console.log(L1)

  for (let l2 = 0; l2 < a4.length; l2++) {
    let L2 = a4[l2]
    //console.log(L2)

    if (dups(L2, L1)) continue

    for (let l3 = 0; l3 < a5.length; l3++) {
      let L3 = a5[l3]

      if (dups(L3, L1) || dups(L3, L2)) continue 
      if (!is38([L1[0], L2[0], L3[0]])) continue /// B0
      if (!is38([L1[2], L2[3], L3[4]])) continue /// F4

      for (let l4 = 0; l4 < a4.length; l4++) {
        let L4 = a4[l4]

        if (dups(L4, L1) || dups(L4, L2) || dups(L4, L3)) continue
        if (!is38([L1[1], L2[1], L3[1], L4[0]])) continue /// B1
        if (!is38([L1[1], L2[2], L3[3], L4[3]])) continue /// F3

        for (let l5 = 0; l5 < a3.length; l5++) {
          let L5 = a3[l5]

          if (dups(L5, L1) || dups(L5, L2) || dups(L5, L3) || dups(L5, L4)) continue
          if (!is38([L3[0], L4[0], L5[0]])) continue /// F0
          if (!is38([L2[0], L3[1], L4[1], L5[1]])) continue /// F1
          if (!is38([L1[0], L2[1], L3[2], L4[2], L5[2]])) continue /// F2
          if (!is38([L1[2], L2[2], L3[2], L4[1], L5[0]])) continue /// B2
          if (!is38([L2[3], L3[3], L4[2], L5[1]])) continue /// B3
          if (!is38([L3[4], L4[3], L5[2]])) continue /// B4

          console.log('Unique!', L1, L2, L3, L4, L5)
          count++
        }
      }
    }
  }
}

console.log(`Total unique answers: ${count}`)