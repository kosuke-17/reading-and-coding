/**
 * 問題:下記のコードは何をやっているのかわからない
 */
const inflictDamage1_bad = () => {
  let d = 0
  const p1 = 5
  const p2 = 5
  const d1 = 10
  const d2 = 2

  d = p1 + p2
  d = d - (d1 + d2) / 2
  if (d < 0) {
    d = 0
  }
}

/**
 * 定数と変数を命名することで可読性低下を防ぐ
 */
const inflictDamage1_good = () => {
  let damageAmount = 0
  const playerAttackPoint = 5
  const weaponAttackPoint = 5
  const enemyDefensePoint = 10
  const weaponDefensePoint = 2

  damageAmount = playerAttackPoint + weaponAttackPoint
  damageAmount = damageAmount - (enemyDefensePoint + weaponDefensePoint) / 2

  if (damageAmount < 0) {
    d = 0
  }
}
