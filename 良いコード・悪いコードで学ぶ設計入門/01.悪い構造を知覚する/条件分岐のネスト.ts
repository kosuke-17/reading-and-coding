/**
 * 何重にもネストしたロジック
 */
const checkIfAlive = (member: { hitPoint: number; canAct: () => boolean }) => {
  if (member.hitPoint > 0) {
    // 行動可能かどうか
    // 麻痺していたりするかの状態確認
    if (member.canAct()) {
    }
  }
}
