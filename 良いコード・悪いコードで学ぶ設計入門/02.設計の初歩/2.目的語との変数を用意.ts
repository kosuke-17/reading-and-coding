/**
 * 問題点:変数を使い回している
 *
 * damageAmountに再代入しているため、破壊的代入になっている
 */
const inflictDamage2_bad = () => {
  let damageAmount = 0
  const playerAttackPoint = 5
  const weaponAttackPoint = 5
  const enemyDefensePoint = 10
  const weaponDefensePoint = 2

  // プレイヤー自身の攻撃力を命名する必要あり
  damageAmount = playerAttackPoint + weaponAttackPoint
  damageAmount = damageAmount - (enemyDefensePoint + weaponDefensePoint) / 2

  if (damageAmount < 0) {
    damageAmount = 0
  }
}

/**
 * 修正後
 *
 * 変数を使い回すのではなく
 */
const inflictDamage2_good = () => {
  const playerAttackPoint = 5
  const weaponAttackPoint = 5
  const enemyDefensePoint = 10
  const weaponDefensePoint = 2

  const totalPlayerAttackPoint = playerAttackPoint + weaponAttackPoint
  const totalEnemyDefencePoint = enemyDefensePoint + weaponDefensePoint
  let damageAmount = totalPlayerAttackPoint - totalEnemyDefencePoint / 2
  if (damageAmount < 0) {
    damageAmount = 0
  }
}
