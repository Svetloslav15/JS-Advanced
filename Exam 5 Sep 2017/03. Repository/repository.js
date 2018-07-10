class Repository{
    constructor(props){
        this.props = props;
        this._id = 0;
        this.data = new Map();
    }
    get count(){
        return this.data.size;
    }

    add(entity){
        this._validateEntity(entity);
        this.data.set(this._id, entity);
        return this._id++;
    }

    get(id){
        if (!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, newEntity){
        if (!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this._validateEntity(newEntity);
        this.data.set(id, newEntity);
    }
    del(id){
        if (!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }

    _validateEntity(entity){
        for (let key in this.props) {
            if (!Object.keys(entity).includes(key)){
                throw new Error(`Property ${key} is missing from the entity!`);
            }
            if (this.props[key] !== typeof entity[key]){
                throw new Error(`"Property ${key} is of incorrect type!`)
            }
        }
    }
}