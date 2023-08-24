/**
 * - 技術駆動命名
 *   - メモリ制御を表すMemoryやFlag、型名を表すnumなどの技術ベースでの命名を技術駆動命名とよぶ
 */
class MemoryStateManager {
  changeIntValue(changeValue: number) {
    // ambiguous naming
    let munValue = changeValue

    if (munValue < 0) {
      munValue = 0
      // updateState02Flag()
      // ...
    }
  }
}

/**
 * - 連番命名
 *   - クラスやメソッドに対し番号付で命名するのを連番命名
 */
class Class001 {
  // method01()
  // method02()
  // method03()
}

/**
 * 意図や目的を表現した命名をすることで、ロジックやクラスの構造が簡明になる
 */
