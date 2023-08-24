/**
 * 典型的なデータクラス
 *
 * インスタンス生成した後に個別の値を代入して初期化をする(生焼けオブジェクト)
 * → 未初期化状態を誘発してしまうクラス構造
 */
class Money_Bad {
  /** 金額値 */
  amount: number
  /** 通貨単位 */
  currency: string
}

/**
 * 生焼けオブジェクトを防ぐには、
 * インスタンス生成時点で初期値が設定されている状態にする
 *
 * new Money_Good(-1,"")のような不正値が入ってしまう恐れがある
 * そのためバリデーションをかける(ガード節という)
 */
class Money_Good {
  amount: number
  currency: string

  constructor(amount: number, currency: string) {
    // 空文字の場合または空白の場合はエラーを返す
    if (!currency || !currency.trim()) {
      throw new Error('通貨単位を指定してください')
    }
    this.amount = amount
    this.currency = currency
  }

  add(other: number) {
    this.amount += other
  }
}

/**
 * インスタンス変数のmoneyをどんどん上書きしてしまっている
 */
const instance_override_func_Bad = () => {
  const originalPrice = 100
  const specialServiceAdded = true
  const additionalServiceFee = 20
  const seasonOffApplied = true

  const seasonPrice = () => {
    return 110
  }

  let money

  money.amount = originalPrice

  if (specialServiceAdded) {
    money.additionalServiceFee = additionalServiceFee
    if (seasonOffApplied) {
      money.amount = seasonPrice()
    }
  }
}

const diffirent_props_to_func = () => {
  const ticketCount = 3

  const moneyFunc = (valueNum?: number) => {
    return {
      value: valueNum ? valueNum : 0,
      addValue: (money: { value: number; addvalue?: any }) => {
        const add = money.value + this.value
        return moneyFunc(add)
      },
    }
  }

  // 第一引数は金額を入れる想定だが、同じnumber型のticketCountを渡してしまっている
  const moenyResult = moneyFunc().addValue(moneyFunc())
  // moenyResult.valueは3になる
}

/**
 * 設計方法
 * - 1.クラスのコンストラクタで確実に正常値を設定する
 * - 2.計算ロジックをデータ保持側に寄せる
 * - 3.不変で思わぬ動作を防ぐ
 * - 4.変更したい場合は新しいインスタンスを作成する
 * - 5.ローカル変数も不変にする
 * - 6. 値の私間違いを方で防止する
 */
