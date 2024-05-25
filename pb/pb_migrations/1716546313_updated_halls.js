/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i53bubcgebvw0bf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1rcsodcp",
    "name": "enabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i53bubcgebvw0bf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1rcsodcp",
    "name": "disabled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
