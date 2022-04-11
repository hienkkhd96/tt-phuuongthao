const toObject = {
    multilObject: (objects) => {
        newObjects = objects.map(object => object.toObject());
        return newObjects;
    },
    oneObject: (objects) => objects.toObject()
}

module.exports = toObject;