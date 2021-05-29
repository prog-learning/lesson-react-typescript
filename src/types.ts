/**
 *  TypeScript を 最低限ざっくり学ぶ
 */

/** 型の種類 **
 * string
 * number
 * boolean
 * null
 * undefined
 * any
 */


/* 型の付け方 */
// アノテーション annotation

let i: number = 0;

i = i + 1; // OK
// i = 'progL'; // Error

const myname: string = 'nob';
const isOpen: boolean = false;

/* 配列の中身に型 */
const array: string[] = ["apple", "banana"];

/* オブジェクトの中に型 */
const item1: { id: number; name: string; } = { id: 123, name: 'ちくわ' };

/* 型の定義（予め型を決めておく） */
type Item = { // 型の名前は大文字始まり
  id: number;
  readonly name: string;
  description?: string;
};
// readonly...書き換え不可
// ?(optional)...あってもなくてもよいプロパティ

const item2: Item = { id: 124, name: '壺' };

// item2.name = 'ただの壺'; // Error
item2.description = 'ただの壺';


/* 【応用】 インデックスシグネチャ(Index Signature) */
// 柔軟なオブジェクトの型をつくる
type Status = {
  level: number;
  maxHP: number;
  maxMP: number;
  [attr: string]: number; // keyはstringで, プロパティはnumberのものをいくつでも追加できる
};
// これで,ないkeyがあっても定義できる
// また,この場合は`attr`は何でも良いがここに入るものが何かを示していると良い

const myStatus: Status = {
  level: 99,
  maxHP: 999,
  maxMP: 999,
  attack: 999,
  defense: 999,
  // speed: '計測不能', // Error
};


/* 型推論 */
// 定義時に型を推測してくれる
let say = 'Hello';
// sayの型は勝手にstringになる


/* リテラル型 */
type Menrui = 'soba' | 'udon' | 'ramen';
const food: Menrui = 'udon'; // OK
// const myfood: Menrui = 'foo'; // Error

// こんな風にも使える

let fruits: string[] | undefined; // 文字列の配列かundefindが入る
fruits = undefined;
fruits = ['apple'];
fruits.push('banana');


/* 関数の型 */
const add = (a: number, b: number): number => a + b;
// 引数と戻り値それぞれに型を付ける

// なにも返さない関数の返り値の型はvoidという
const hello = (): void => {
  console.log("Hello!");
};

// 予め, 引数と返り値の型をまとめて定義する
type Multi = {
  (n: number, m: number): number;
};

const multiplication: Multi = (n, m) => n * m;

// シグネチャSignature）を使って関数の型セットを作成
type Upper = (arg: string) => string;
const upper: Upper = arg => arg.toUpperCase();


/* interface と type */
// interfaceでも型を定義できる
interface User {
  name: string;
}
interface User {
  age: number;
}
interface User {
  animal: "rabbit" | "bear" | "fox" | "dog";
}
// 今こういう状態
interface User {
  name: string;
  age: number;
  animal: "rabbit" | "bear" | "fox" | "dog";
}

// 再定義可能？→再定義ではなく,既存の型に追加される（バグにつながるので注意）

// また, オブジェクトの型しか作れない点に注意
// interface Horse 'uma'; // Error

type Animal = {
  name: string;
};

// type Animal = {
//   age: number;
// };
// 同名不可
