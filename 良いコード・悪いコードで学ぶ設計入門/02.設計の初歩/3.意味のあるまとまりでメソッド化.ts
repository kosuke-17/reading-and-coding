/**
 * 問題: それぞれの攻撃力と守備力からダメージ計算を行うまでの一連の流れが1つのメソッドで行われている
 */
const inflictDamage3_bad = () => {
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

/**
 * 計算のロジックをメソッドに閉じ込めて、一連の流れを読みやすくする
 */
const inflictDamage3_good = () => {
  const playerAttackPoint = 5
  const weaponAttackPoint = 5
  const enemyDefensePoint = 10
  const weaponDefensePoint = 2

  // ここの計算処理は別ファイルに切り出せば、さらに見やすくなる
  const sumUpTotalAttackPoint = (playerAP: number, weaponAP: number) => {
    return playerAP + weaponAP
  }
  const sumUpTotalPlayerDefencePoint = (playerDP: number, weaponDP: number) => {
    return playerDP + weaponDP
  }
  const estimateDamage = (totalPlayerAP: number, totalEnemyDP: number) => {
    return totalPlayerAP - totalEnemyDP / 2
  }

  const totalPlayerAttackPoint = sumUpTotalAttackPoint(
    playerAttackPoint,
    weaponAttackPoint
  )
  const totalEnemyDefencePoint = sumUpTotalPlayerDefencePoint(
    enemyDefensePoint,
    weaponDefensePoint
  )
  let damageAmount = estimateDamage(
    totalPlayerAttackPoint,
    totalEnemyDefencePoint
  )

  if (damageAmount < 0) {
    damageAmount = 0
  }
}
