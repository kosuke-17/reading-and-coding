// データクラスとはデータを保持するだけのクラス
// publicにすることでどこでもデータの出し入れが自由

/**
 * ContractManagerの税込み計算ロジックが別の場所にも同じものがあったため、
 * 1箇所修正しても、他の場所のロジックも修正しなければバグになってしまう
 *
 * 複雑な仕様やFEとBEで同じことをしようとすると起こりそうな問題
 *
 * → 対策は１箇所で共通化しておくこと？
 * → データクラスにロジックを入れておけば良い。例えば、自身データクラスのみ変更することができるようにするとか
 *
 * - ContractAmountは初期化もされていないためエラーが発生する
 * - 負の数や小数点など不正な値が渡されてしまうかもしれない
 *   - データクラスの方でバリデーションロジックを実装する必要がある
 */

/**
 * 契約金額
 */
class ContractAmount {
  // 税込金額
  public amountIncludingTax: number
  // 消費税率
  public salesTaxRate: number
}

/**
 * 契約を管理するクラス
 */
class ContractManager {
  constructor(private readonly contractAmount: ContractAmount) {}

  /**
   * 税込金額を計算する
   * @param amountExcludingTax 税抜き金額
   * @param salesTaxRate 消費税率
   */
  calculateAmountIncludingTax(
    amountExcludingTax: number,
    salesTaxRate: number
  ) {
    const multiplier = salesTaxRate + 1.0
    const amountIncludingTax = multiplier + amountExcludingTax

    return amountIncludingTax
  }

  /**
   * 契約締結する
   */
  conclude() {
    const salesTaxRate = 1.1
    const amountIncludingTax = this.calculateAmountIncludingTax(
      10,
      salesTaxRate
    )

    const constractAmount = new ContractAmount()
    constractAmount.amountIncludingTax = amountIncludingTax
    constractAmount.salesTaxRate = salesTaxRate
  }
}

/**
 * データクラスが引き起こす弊害
 * - 重複コード
 * - 修正漏れ
 * - 未初期化状態(生焼けオブジェクト)
 * - 不整地の混入
 *
 * これらによってバグが発生したり可読性が下がったりして開発生産性が下がる
 */
