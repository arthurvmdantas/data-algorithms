type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T> | null;
};

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private listSize = 0;

  constructor() {}

  /**
   * Add a node to the end of the list
   * @param value
   * @returns
   */
  append(value: T) {
    if (!this.head) return this.prepend(value);

    const newNode: LinkedListNode<T> = { value, next: null };
    let pointer = this.head;

    while (pointer.next) {
      pointer = pointer.next;
    }

    pointer.next = newNode;
    this.listSize++;
  }

  /**
   * Add a node to the beginning of the list
   * @param value Value to be stored on the new node
   */
  prepend(value: T) {
    const newHead: LinkedListNode<T> = {
      value,
      next: this.listSize ? this.head : null,
    };

    this.head = newHead;
    this.listSize++;
  }

  get size() {
    return this.listSize;
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  // iterator
  // [Symbol.iterator]() {
  //   let currentNode = this.#head;

  //   return {
  //     next() {
  //       if (currentNode) {
  //         const value = currentNode.value;
  //         currentNode = currentNode.next;

  //         return {
  //           value,
  //           done: false,
  //         };
  //       }

  //       return {
  //         value: null,
  //         done: true,
  //       };
  //     },
  //   };
  // }
}
