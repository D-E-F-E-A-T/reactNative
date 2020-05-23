import Realm from 'realm';
import JobSchemas from '../Schemas/JobSchemas';

export default function getRealm(){
    return Realm.open({
        schema: [JobSchemas],
    });
}