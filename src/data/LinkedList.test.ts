import { LinkedList } from "./LinkedList";

describe("Empty list", () => {
  test("Has size 0", () => {
    const list = new LinkedList();
    expect(list.size).toBe(0);
  });

  test("Has no elements", () => {
    const list = new LinkedList();
    const array = [];
    for (const value of list) array.push(value);

    expect(array.length).toBe(0);
  });
});

describe("Inserting elements", () => {
  test("Append increments the size", () => {
    const list = new LinkedList();
    list.append(1);

    expect(list.size).toBe(1);
  });

  test("Append adds an element", () => {
    const list = new LinkedList();
    list.append(1);
    const array = [];
    for (const value of list) array.push(value);

    expect(array[0]).toBe(1);
  });

  test("Append adds an element to the end of the list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    const array = [];
    for (const value of list) array.push(value);

    expect(array[1]).toBe(2);
  });

  test("Prepend increments the size", () => {
    const list = new LinkedList();
    list.prepend(1);

    expect(list.size).toBe(1);
  });

  test("Prepend adds an element", () => {
    const list = new LinkedList();
    list.prepend(1);
    const array = [];
    for (const value of list) array.push(value);

    expect(array[0]).toBe(1);
  });

  test("Prepend adds an element to the beginning of the list", () => {
    const list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    const array = [];
    for (const value of list) array.push(value);

    expect(array[0]).toBe(2);
  });
});
