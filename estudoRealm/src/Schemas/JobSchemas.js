export default class JobSchemas{
    static schema ={
        job:'',
        primryKey: 'id',
        properties:{
            id: { type: 'int', indexed: true },
            nome: 'string',
            cargo:'string',
        } 
    }
}