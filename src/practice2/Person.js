// TODO feedback: 推荐用export default 导出class
export class Person {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}
