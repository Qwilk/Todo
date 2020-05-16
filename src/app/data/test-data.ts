// Тестовые данные (замена БД)

import { Category } from '../model/category.model';
import { Priority } from '../model/priority.model';
import { Task } from '../model/task.model';

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учёба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Сопрт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'}
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#e5e5e5'},
        {id: 2, title: 'Средний', color: '#85d1b2'},
        {id: 3, title: 'Высокий', color: '#f1828d'},
        {id: 4, title: 'Срочно!', color: '#f1128d'}
    ];

    static tasks: Task[] = [
        {
            id: 1, 
            title: 'Залить бензин полный бак', 
            completed: false, 
            priority: TestData.priorities[2], 
            category: TestData.categories[9], 
            date: new Date('2020-04-19')
        },

        {
            id: 2, 
            title: 'Передать отчеты начальнику', 
            completed: false, 
            priority: TestData.priorities[0], 
            category: TestData.categories[0], 
            date: new Date('2020-04-11')
        },

        {
            id: 3, 
            title: 'Сделать уборку дома', 
            completed: true, 
            priority: TestData.priorities[2], 
            category: TestData.categories[1]
        },

        {
            id: 4, 
            title: 'Погульть с семьёй', 
            completed: false, 
            priority: TestData.priorities[1], 
            category: TestData.categories[1], 
            date: new Date('2020-08-17')
        },

        {
            id: 5, 
            title: 'Учить квантовую физику', 
            completed: false, 
            priority: TestData.priorities[1], 
            category: TestData.categories[2], 
            date: new Date('2020-06-11')
        },

        {
            id: 6, 
            title: 'Сходить на семинар по программированию', 
            completed: true, 
            priority: TestData.priorities[2], 
            category: TestData.categories[2], 
            date: new Date('2020-04-19')
        },

        {
            id: 7, 
            title: 'Найти билеты в Тайланд', 
            completed: false, 
            priority: TestData.priorities[2], 
            category: TestData.categories[3]
        },

        {
            id: 8, 
            title: 'Приготовить ужин', 
            completed: false,
            category: TestData.categories[5]
        },

        {
            id: 9, 
            title: 'Подтянутся 10 раз', 
            completed: false, 
            priority: TestData.priorities[2], 
            category: TestData.categories[4], 
            date: new Date('2020-03-12')
        },

        {
            id: 10, 
            title: 'Пробежать 100 м', 
            completed: true, 
            priority: TestData.priorities[0], 
            category: TestData.categories[4]
        },

        {
            id: 11, 
            title: 'Организовать детский праздник', 
            completed: false
        },

        {
            id: 12, 
            title: 'Сходить на лекцию "Java"', 
            completed: false, 
            priority: TestData.priorities[1], 
            category: TestData.categories[2]
        },

        {
            id: 13, 
            title: 'Купить продукты', 
            completed: false, 
            priority: TestData.priorities[2], 
            category: TestData.categories[5], 
            date: new Date('2020-05-11')
        },

        {
            id: 14, 
            title: 'Провести собрание', 
            completed: true,
            category: TestData.categories[0]
        },

        {
            id: 15, 
            title: 'Сдать экзамен по Java', 
            completed: true, 
            priority: TestData.priorities[2]
        },

        {
            id: 16, 
            title: 'Положить 100 000 руб в банк', 
            completed: false, 
            priority: TestData.priorities[3], 
            category: TestData.categories[6]
        },

        {
            id: 17, 
            title: 'Попросить аванс на работе', 
            completed: false, 
            priority: TestData.priorities[2], 
            category: TestData.categories[6]
        },

        {
            id: 18, 
            title: 'Сдать анализы, проверить гемоглобин', 
            completed: false, 
            priority: TestData.priorities[3], 
            category: TestData.categories[8], 
            date: new Date('2020-12-11')
        },

        {
            id: 19, 
            title: 'Сравнить новый айпад с самсунг', 
            completed: false, 
            priority: TestData.priorities[0], 
            category: TestData.categories[7], 
            date: new Date('2020-10-11')
        },

        {
            id: 20, 
            title: 'Футбол с сотрудниками', 
            completed: false, 
            priority: TestData.priorities[0], 
            category: TestData.categories[4], 
            date: new Date('2020-03-17')
        }
    ];
}