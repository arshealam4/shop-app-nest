export interface IRepository<T> {
  /**
   * create item
   * @param item
   */
  create(item: T): Promise<any>;

  /**
   * find item by query
   * @param query
   */
  findAllByQuery(query: Record<string, any>, filterFields: Record<string, any>): Promise<T>;
}
