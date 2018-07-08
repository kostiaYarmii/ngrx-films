import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const films = [{
            id: 1,
            name: 'Avengers',
            rate: 5
        }, {
            id: 2,
            name: 'Iron man',
            rate: 5
        }, {
            id: 3,
            name: 'Fight club',
            rate: 5
        }];
        return { films };
    }
}