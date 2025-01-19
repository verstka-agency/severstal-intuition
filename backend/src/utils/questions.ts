// TODO нужно переписать author, потому что нужны склонения
export const questions: Array<{
    author: string,
    question: string,
    city: string,
    answers: Array<{
        text: string,
        isCorrect: boolean
    }>
}> = [
    {
        "author": "Елена Вотчинова из Нижнего Новгорода",
        "question": "Елена увлекается занятием экзотического происхождения. Как думаете, какое хобби у Елены?",
        "city": "",
        "answers": [
            { "text": "Американский рестлинг", "isCorrect": false },
            { "text": "Африканский хип-хоп", "isCorrect": false },
            { "text": "Тайский бокс", "isCorrect": true }
        ]
    },
    {
        "author": "Артём Полтавец из Москвы",
        "question": "В хобби Артёма живёт настоящий дух молодости. Угадаете, чем Артём занимается вечерами?",
        "city": "",
        "answers": [
            { "text": "Создаёт игры в Роблоксе", "isCorrect": true },
            { "text": "Собирает автомобили из Lego", "isCorrect": false },
            { "text": "Любит сладости", "isCorrect": false }
        ]
    },
    {
        "author": "Антон Югай из Москвы",
        "question": "У самурая нет цели, только путь. А у Антона…",
        "city": "",
        "answers": [
            { "text": "Нет дома, есть только квартира", "isCorrect": false },
            { "text": "Нет мечты, есть только цели", "isCorrect": true },
            { "text": "Нет собаки, есть только хомяк", "isCorrect": false }
        ]
    },
    {
        "author": "Евгений Бобров из Москвы",
        "question": "Евгений живёт эту жизнь на 100%. Но есть одна вещь, которую он сделал только наполовину. Какая?",
        "city": "",
        "answers": [
            { "text": "Пробежал полумарафон", "isCorrect": true },
            { "text": "Объехал полмира", "isCorrect": false },
            { "text": "Евгений всё доводит до конца", "isCorrect": false }
        ]
    },
    {
        "author": "Специальный вопрос о сотрудниках \"Северстали\"",
        "question": "На вопрос о лучшем дне в жизни 90% участников опроса ответили именно так. Догадаетесь?",
        "city": "",
        "answers": [
            { "text": "День рождения ребёнка", "isCorrect": true },
            { "text": "Выпускной", "isCorrect": false },
            { "text": "Праздник огурца", "isCorrect": false }
        ]
    },
    {
        "author": "Алена Павлова из Череповца",
        "question": "Алёна часто занимается добрыми делами после работы. Угадаете в какой сфере?",
        "city": "",
        "answers": [
            { "text": "Посадила 80 деревьев", "isCorrect": false },
            { "text": "Провела 5 субботников", "isCorrect": false },
            { "text": "Спасла 11 собак из приюта", "isCorrect": true }
        ]
    },
    {
        "author": "Сергей Ливкоев из Череповца",
        "question": "У Сергея есть кот, которого он назвал в честь героя популярного мультфильма. Как?",
        "city": "",
        "answers": [
            { "text": "Матроскин", "isCorrect": false },
            { "text": "Морти", "isCorrect": true },
            { "text": "Спанч Боб", "isCorrect": false }
        ]
    },
    {
        "author": "Татьяна Кузерова из Волгограда",
        "question": "Самое необычное событие, на котором Татьяна была в 2024 — это концерт…",
        "city": "",
        "answers": [
            { "text": "«Короля и Шута»", "isCorrect": false },
            { "text": "Поющих фонтанов", "isCorrect": false },
            { "text": "Metallica", "isCorrect": true }
        ]
    },
    {
        "author": "Специальный вопрос о сотрудниках \"Северстали\"",
        "question": "Какой праздник отмечают 31 октября?",
        "city": "",
        "answers": [
            { "text": "День всех святых", "isCorrect": false },
            { "text": "Хэллоуин", "isCorrect": true },
            { "text": "День благодарения", "isCorrect": false }
        ]
    },
    {
        "author": "Иван Иванов из Санкт-Петербурга",
        "question": "Иван увлекается коллекционированием редких монет. Какая у него самая ценная находка?",
        "city": "",
        "answers": [
            { "text": "Монета времен Петра I", "isCorrect": true },
            { "text": "Советский рубль 1961 года", "isCorrect": false },
            { "text": "Юбилейная монета 2000 года", "isCorrect": false }
        ]
    },
    {
        "author": "Мария Смирнова из Казани",
        "question": "Мария профессионально занимается танцами. Какой стиль она предпочитает?",
        "city": "",
        "answers": [
            { "text": "Балет", "isCorrect": false },
            { "text": "Современный джаз", "isCorrect": true },
            { "text": "Народные танцы", "isCorrect": false }
        ]
    },
    {
        "author": "Дмитрий Кузнецов, Екатеринбург",
        "question": "Дмитрий — заядлый путешественник. Сколько стран он уже посетил?",
        "city": "",
        "answers": [
            { "text": "Более 10", "isCorrect": false },
            { "text": "Более 20", "isCorrect": true },
            { "text": "Более 30", "isCorrect": false }
        ]
    },
    {
        "author": "Ольга Петрова, Новосибирск",
        "question": "Ольга — талантливый музыкант. На каком инструменте она играет?",
        "city": "",
        "answers": [
            { "text": "Фортепиано", "isCorrect": true },
            { "text": "Скрипка", "isCorrect": false },
            { "text": "Гитара", "isCorrect": false }
        ]
    },
    {
        "author": "Виктор Сидоров, Самара",
        "question": "Виктор — настоящий книголюб. Какая его любимая книга?",
        "city": "",
        "answers": [
            { "text": "Война и мир", "isCorrect": true },
            { "text": "Мастер и Маргарита", "isCorrect": false },
            { "text": "Преступление и наказание", "isCorrect": false }
        ]
    },
    {
        "author": "Алексей Иванов, Уфа",
        "question": "Алексей занимается спортом. Какой вид спорта он предпочитает?",
        "city": "",
        "answers": [
            { "text": "Футбол", "isCorrect": false },
            { "text": "Баскетбол", "isCorrect": true },
            { "text": "Теннис", "isCorrect": false }
        ]
    },
    {
        "author": "Светлана Павлова, Омск",
        "question": "Светлана — мастер кулинарии. Какое её коронное блюдо?",
        "city": "",
        "answers": [
            { "text": "Борщ", "isCorrect": true },
            { "text": "Пельмени", "isCorrect": false },
            { "text": "Оливье", "isCorrect": false }
        ]
    },
    {
        "author": "Юлия Сергеева, Владивосток",
        "question": "Юлия увлекается фотографией. Что чаще всего попадает в её объектив?",
        "city": "",
        "answers": [
            { "text": "Пейзажи", "isCorrect": true },
            { "text": "Портреты", "isCorrect": false },
            { "text": "Животные", "isCorrect": false }
        ]
    },
    {
        "author": "Игорь Ковалёв, Красноярск",
        "question": "Игорь — заядлый рыболов. Какую рыбу он поймал наибольшего размера?",
        "city": "",
        "answers": [
            { "text": "Щуку", "isCorrect": true },
            { "text": "Сома", "isCorrect": false },
            { "text": "Карпа", "isCorrect": false }
        ]
    },
    {
        "author": "Анна Белова, Ростов-на-Дону",
        "question": "Анна увлекается рукоделием. Что она создаёт своими руками?",
        "city": "",
        "answers": [
            { "text": "Вязаные игрушки", "isCorrect": true },
            { "text": "Картины из бисера", "isCorrect": false },
            { "text": "Декоративные свечи", "isCorrect": false }
        ]
    },
    {
        "author": "Дмитрий Соколов, Пермь",
        "question": "Дмитрий — знаток истории. Какой период его интересует больше всего?",
        "city": "",
        "answers": [
            { "text": "Средневековье", "isCorrect": true },
            { "text": "Античность", "isCorrect": false },
            { "text": "Новое время", "isCorrect": false }
        ]
    },
    {
        "author": "Олег Васильев, Калининград",
        "question": "Олег увлекается спортом. Какое достижение он считает самым значимым?",
        "city": "",
        "answers": [
            { "text": "Пробежал марафон", "isCorrect": true },
            { "text": "Победил в турнире по шахматам", "isCorrect": false },
            { "text": "Участвовал в триатлоне", "isCorrect": false }
        ]
    },
    {
        "author": "Екатерина Морозова, Хабаровск",
        "question": "Екатерина любит животных. Кто её любимец?",
        "city": "",
        "answers": [
            { "text": "Кошка", "isCorrect": true },
            { "text": "Собака", "isCorrect": false },
            { "text": "Попугай", "isCorrect": false }
        ]
    },
    {
        "author": "Сергей Лебедев, Тюмень",
        "question": "Сергей увлекается техникой. Какое изобретение он недавно собрал?",
        "city": "",
        "answers": [
            { "text": "Дрон", "isCorrect": true },
            { "text": "Робот-пылесос", "isCorrect": false },
            { "text": "3D-принтер", "isCorrect": false }
        ]
    },
    {
        "author": "Марина Кузьмина, Челябинск",
        "question": "Марина активно занимается спортом. Какой вид спорта её любимый?",
        "city": "",
        "answers": [
            { "text": "Плавание", "isCorrect": true },
            { "text": "Гимнастика", "isCorrect": false },
            { "text": "Бег", "isCorrect": false }
        ]
    },
    {
        "author": "Иван Петров, Ярославль",
        "question": "Иван увлекается кулинарией. Какое блюдо он готовит лучше всего?",
        "city": "",
        "answers": [
            { "text": "Пиццу", "isCorrect": true },
            { "text": "Плов", "isCorrect": false },
            { "text": "Бургеры", "isCorrect": false }
        ]
    },
    {
        "author": "Светлана Волкова, Рязань",
        "question": "Светлана занимается волонтёрством. Где она помогает чаще всего?",
        "city": "",
        "answers": [
            { "text": "В приюте для животных", "isCorrect": true },
            { "text": "В доме престарелых", "isCorrect": false },
            { "text": "В больнице", "isCorrect": false }
        ]
    },
    {
        "author": "Александр Сидоров, Пенза",
        "question": "Александр увлекается наукой. Какой раздел науки ему наиболее интересен?",
        "city": "",
        "answers": [
            { "text": "Астрономия", "isCorrect": true },
            { "text": "Биология", "isCorrect": false },
            { "text": "Физика", "isCorrect": false }
        ]
    },
    {
        "author": "Анна Смирнова, Барнаул",
        "question": "Анна занимается творчеством. Какой вид искусства ей ближе всего?",
        "city": "",
        "answers": [
            { "text": "Живопись", "isCorrect": true },
            { "text": "Скульптура", "isCorrect": false },
            { "text": "Музыка", "isCorrect": false }
        ]
    },
    {
        "author": "Денис Козлов, Краснодар",
        "question": "Денис увлекается экстримальным спортом. Что он пробовал?",
        "city": "",
        "answers": [
            { "text": "Прыжки с парашютом", "isCorrect": true },
            { "text": "Скалолазание", "isCorrect": false },
            { "text": "Серфинг", "isCorrect": false }
        ]
    },
    {
        "author": "Ольга Воронцова, Воронеж",
        "question": "Ольга увлекается садоводством. Какое растение она считает своим достижением?",
        "city": "",
        "answers": [
            { "text": "Роза", "isCorrect": true },
            { "text": "Орхидея", "isCorrect": false },
            { "text": "Клематис", "isCorrect": false }
        ]
    },
    {
        "author": "Кирилл Ковалев, Саратов",
        "question": "Кирилл любит путешествовать. Где он побывал в этом году?",
        "city": "",
        "answers": [
            { "text": "Греция", "isCorrect": true },
            { "text": "Турция", "isCorrect": false },
            { "text": "Италия", "isCorrect": false }
        ]
    },
    {
        "author": "Мария Романова, Ульяновск",
        "question": "Мария — известный блогер. На какой платформе она ведет свой блог?",
        "city": "",
        "answers": [
            { "text": "Instagram", "isCorrect": true },
            { "text": "TikTok", "isCorrect": false },
            { "text": "YouTube", "isCorrect": false }
        ]
    },
    {
        "author": "Владимир Жуков, Иркутск",
        "question": "Владимир увлекается рыбалкой. Какую рыбу он ловит чаще всего?",
        "city": "",
        "answers": [
            { "text": "Щука", "isCorrect": true },
            { "text": "Карп", "isCorrect": false },
            { "text": "Сом", "isCorrect": false }
        ]
    },
    {
        "author": "Александра Кузнецова, Тула",
        "question": "Александра — кулинар. Что она готовит на праздники?",
        "city": "",
        "answers": [
            { "text": "Торт", "isCorrect": true },
            { "text": "Салат", "isCorrect": false },
            { "text": "Суп", "isCorrect": false }
        ]
    },
    {
        "author": "Евгений Михайлов, Калуга",
        "question": "Евгений увлекается историей. Какой исторический период ему наиболее интересен?",
        "city": "",
        "answers": [
            { "text": "Древний Египет", "isCorrect": true },
            { "text": "Средневековье", "isCorrect": false },
            { "text": "Викторианская эпоха", "isCorrect": false }
        ]
    },
    {
        "author": "Олеся Акимова, Белгород",
        "question": "Олеся увлекается садоводством. Какое растение она считает любимым?",
        "city": "",
        "answers": [
            { "text": "Лаванда", "isCorrect": true },
            { "text": "Роза", "isCorrect": false },
            { "text": "Тюльпан", "isCorrect": false }
        ]
    },
    {
        "author": "Роман Борисов, Архангельск",
        "question": "Роман увлекается спортом. Какой вид спорта ему нравится больше всего?",
        "city": "",
        "answers": [
            { "text": "Футбол", "isCorrect": true },
            { "text": "Гольф", "isCorrect": false },
            { "text": "Теннис", "isCorrect": false }
        ]
    },
    {
        "author": "Ирина Морозова, Кострома",
        "question": "Ирина работает в сфере технологий. Какая технология её интересует?",
        "city": "",
        "answers": [
            { "text": "Искусственный интеллект", "isCorrect": true },
            { "text": "Виртуальная реальность", "isCorrect": false },
            { "text": "Блокчейн", "isCorrect": false }
        ]
    },
    {
        "author": "Сергей Лавров, Казань",
        "question": "Сергей увлекается путешествиями. Какую страну он мечтает посетить?",
        "city": "",
        "answers": [
            { "text": "Япония", "isCorrect": true },
            { "text": "Индия", "isCorrect": false },
            { "text": "Испания", "isCorrect": false }
        ]
    },
    {
        "author": "Анастасия Сорокина, Ростов-на-Дону",
        "question": "Анастасия увлекается искусством. Какое направление ей наиболее близко?",
        "city": "",
        "answers": [
            { "text": "Абстракционизм", "isCorrect": true },
            { "text": "Реализм", "isCorrect": false },
            { "text": "Импрессионизм", "isCorrect": false }
        ]
    },
    {
        "author": "Юлия Васильева, Сочи",
        "question": "Юлия увлекается литературой. Какой жанр книг ей нравится?",
        "city": "",
        "answers": [
            { "text": "Фантастика", "isCorrect": true },
            { "text": "Детективы", "isCorrect": false },
            { "text": "Мелодрамы", "isCorrect": false }
        ]
    },
    {
        "author": "Петр Смирнов, Псков",
        "question": "Петр увлекается музыкой. Какой музыкальный инструмент он играет?",
        "city": "",
        "answers": [
            { "text": "Гитара", "isCorrect": true },
            { "text": "Скрипка", "isCorrect": false },
            { "text": "Фортепиано", "isCorrect": false }
        ]
    },
    {
        "author": "Татьяна Иванова, Владивосток",
        "question": "Татьяна увлекается йогой. Какую асану она считает своей любимой?",
        "city": "",
        "answers": [
            { "text": "Собака мордой вниз", "isCorrect": true },
            { "text": "Поза лотоса", "isCorrect": false },
            { "text": "Кобра", "isCorrect": false }
        ]
    },
    {
        "author": "Роман Дмитриев, Ярославль",
        "question": "Роман увлекается астрономией. Какое небесное тело ему интересно?",
        "city": "",
        "answers": [
            { "text": "Юпитер", "isCorrect": true },
            { "text": "Сатурн", "isCorrect": false },
            { "text": "Марс", "isCorrect": false }
        ]
    },
    {
        "author": "Наталья Борисова, Ставрополь",
        "question": "Наталья увлекается фотографией. Какую технику она использует?",
        "city": "",
        "answers": [
            { "text": "Зеркальный фотоаппарат", "isCorrect": true },
            { "text": "Мобильный телефон", "isCorrect": false },
            { "text": "Плёнка", "isCorrect": false }
        ]
    },
    {
        "author": "Дмитрий Лукичев, Курск",
        "question": "Дмитрий увлекается кулинарией. Что он часто готовит для своих друзей?",
        "city": "",
        "answers": [
            { "text": "Барбекю", "isCorrect": true },
            { "text": "Паста", "isCorrect": false },
            { "text": "Пельмени", "isCorrect": false }
        ]
    },
    {
        "author": "Елена Котова, Смоленск",
        "question": "Елена увлекается путешествиями. Какую страну она недавно посетила?",
        "city": "",
        "answers": [
            { "text": "Германия", "isCorrect": true },
            { "text": "Франция", "isCorrect": false },
            { "text": "Италия", "isCorrect": false }
        ]
    },
    {
        "author": "Иван Павлов, Челябинск",
        "question": "Иван увлекается рыбалкой. Какую рыбу он ловит чаще всего?",
        "city": "",
        "answers": [
            { "text": "Карп", "isCorrect": true },
            { "text": "Щука", "isCorrect": false },
            { "text": "Сом", "isCorrect": false }
        ]
    },
    {
        "author": "Александра Николаева, Омск",
        "question": "Александра увлекается рисованием. Какую технику она предпочитает?",
        "city": "",
        "answers": [
            { "text": "Акварель", "isCorrect": true },
            { "text": "Масляная краска", "isCorrect": false },
            { "text": "Гуашь", "isCorrect": false }
        ]
    },
    {
        "author": "Владимир Григорьев, Новокузнецк",
        "question": "Владимир увлекается историей. Какое историческое событие ему интересно?",
        "city": "",
        "answers": [
            { "text": "Великая Отечественная война", "isCorrect": true },
            { "text": "Революция 1917 года", "isCorrect": false },
            { "text": "Вторая мировая война", "isCorrect": false }
        ]
    },
    {
        "author": "Лариса Чижова, Екатеринбург",
        "question": "Лариса увлекается рисованием. Какую технику она предпочитает?",
        "city": "",
        "answers": [
            { "text": "Акварель", "isCorrect": true },
            { "text": "Пастель", "isCorrect": false },
            { "text": "Гуашь", "isCorrect": false }
        ]
    },
    {
        "author": "Олег Михайлов, Воронеж",
        "question": "Олег увлекается фотографией. Какой тип камеры он использует?",
        "city": "",
        "answers": [
            { "text": "Зеркальный фотоаппарат", "isCorrect": true },
            { "text": "Компактная камера", "isCorrect": false },
            { "text": "Смартфон", "isCorrect": false }
        ]
    },
    {
        "author": "Евгения Беляева, Тверь",
        "question": "Евгения увлекается йогой. Какой стиль йоги ей наиболее интересен?",
        "city": "",
        "answers": [
            { "text": "Хатха-йога", "isCorrect": true },
            { "text": "Виньяса-йога", "isCorrect": false },
            { "text": "Кундалини-йога", "isCorrect": false }
        ]
    },
    {
        "author": "Роман Соловьев, Самара",
        "question": "Роман увлекается шахматами. Какой стиль игры ему больше всего нравится?",
        "city": "",
        "answers": [
            { "text": "Шахматный blitz", "isCorrect": true },
            { "text": "Шахматный классический", "isCorrect": false },
            { "text": "Рапид", "isCorrect": false }
        ]
    },
    {
        "author": "Анна Петрова, Краснодар",
        "question": "Анна увлекается кулинарией. Какое блюдо она готовит лучше всего?",
        "city": "",
        "answers": [
            { "text": "Торт", "isCorrect": true },
            { "text": "Суп", "isCorrect": false },
            { "text": "Салат", "isCorrect": false }
        ]
    }
]
