// Queue data structure implementation in native TypeScript.
export interface QueueType<T> {
  push(item: T): void;
  pop(): void;
  front(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  updateFront(data: T): void;
  getList(): T[];
}


export class Queue<T> implements QueueType<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): void {
    this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  updateFront(data: T): void {
    if (this.items.length > 0) this.items[0] = JSON.parse(JSON.stringify(data));
  }

  getList(): T[] {
    return this.items;
  }
}
