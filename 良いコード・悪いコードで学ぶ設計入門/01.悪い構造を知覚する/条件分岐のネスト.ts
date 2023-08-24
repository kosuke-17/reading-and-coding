/**
 * 3重にネストしたロジック
 *
 * 複数行以上のネストはコードの見通しが悪くなる
 *
 * 生存確認しているロジックの中で魔法を発動するメソッドが実行されるのはよくない
 *
 */
const checkIfAlive = (member: Member, magic: Magic) => {
  if (member.hitPoint > 0) {
    // 行動可能かどうか
    // 眠り、麻痺の状態確認
    if (member.canAct()) {
      // 魔法力が残存しているか判定
      if (magic.constMagicPoint <= member.magicPoint) {
        member.consumeMagicPoint(magic.costMagicPoint)
        member.chant(magic)
      }
    }
  }
}

type Member = {
  hitPoint: number
  magicPoint: number
  canAct: () => boolean
  consumeMagicPoint: (point: number) => void
  chant: (magic: Magic) => void
}
type Magic = { costMagicPoint: number; constMagicPoint: number }
