/**
 * 多くの行が存在する場合に、下記のコードがどこかに存在するとバグを発生させる可能性があります
 */
const root = () => {
  // どこかに実装
  let hitPoint = 10
  const damageAmount = 3

  // どこかに実装
  hitPoint = hitPoint - damageAmount
  // どこかに実装
  if (hitPoint < 0) {
    hitPoint = 0
  }

  const recoveryAmount = 3
  /**
   * どこかに書かれるヒットポイント回復ロジック
   *
   * どこかで負のあたいなどが入る恐れがある
   */
  hitPoint = hitPoint + recoveryAmount
  if (99 < hitPoint) {
    hitPoint = 999
  }
}

/**
 * クラスにしてデータとロジックの関係性を強める
 */
class HitPoint {
  private readonly MIN_HIT_POINT = 0
  private readonly MAX_HIT_POINT = 99
  value = 0

  constructor(v: number) {
    /** 初期値をバリデーション */
    this.validateMinHP(v)
    this.validateMaxHP(v)

    this.value = v
  }

  /** ダメージを与える */
  damage(damageAmount: number) {
    const subtractedValue = this.subtractValue(damageAmount)
    const correctedValue = this.checkCorrectedSubtractedValue(subtractedValue)

    // インスタンス化することで、バリデーションも行う
    return new HitPoint(correctedValue)
  }

  /** 回復する */
  recover(recoveryAmount: number) {
    const recoverdValue = this.addValue(recoveryAmount)
    const correctedValue = this.checkCorrectedAddValue(recoverdValue)

    return new HitPoint(correctedValue)
  }

  addValue(amount: number) {
    const value = this.value + amount
    return value
  }

  subtractValue(amount: number) {
    const value = this.value - amount
    return value
  }

  checkCorrectedAddValue(recover: number) {
    return recover < this.MAX_HIT_POINT ? this.MAX_HIT_POINT : recover
  }

  checkCorrectedSubtractedValue(damaged: number) {
    return damaged < this.MIN_HIT_POINT ? this.MIN_HIT_POINT : damaged
  }

  validateMinHP(value: number) {
    if (value < this.MIN_HIT_POINT)
      throw new Error(`${this.MIN_HIT_POINT}以上を指定してください`)
  }
  validateMaxHP(value: number) {
    if (value > this.MAX_HIT_POINT)
      throw new Error(`${this.MAX_HIT_POINT}以下を指定してください`)
  }
}
