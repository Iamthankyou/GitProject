export class Product2 {
  get id(): string | undefined {
    return this._id;
  }

  // @ts-ignore
  set _id(id): string | undefined {
    this._id = id;
  }
  // tslint:disable-next-line:variable-name
  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
}
