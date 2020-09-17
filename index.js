'use strict'

const btn = document.getElementById('btn')

const omikuji = [
  "大吉", "中吉", "小吉", "吉", "凶", "大凶", "末吉"
]


function prob(){
  btn.addEventListener('click', () => {
    btn.textContent = omikuji[Math.floor(Math.random() * omikuji.length)]
  })
}
prob()

// 確率を偏らせる
function change() {
  btn.addEventListener('click', () => {

    const n = Math.random()
    if (n < 0.05) {
      btn.textContent = '大吉' // 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉' // 15%
    } else {
      btn.textContent = '凶'　// 80%
    }
  })
}
// change()