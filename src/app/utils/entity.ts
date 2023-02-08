export class Entity {
  static getEntityId(entityUrl) {
    entityUrl = entityUrl.slice(0, -1);
    return /[^/]*$/.exec(entityUrl)[0];
  }
}

