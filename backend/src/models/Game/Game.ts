import { sequelize } from "../../config/db"
import { DataTypes } from "sequelize"

/**
 * Game не живет самостоятельно, всегда привязан к User
 */
export const Game = sequelize.define("Game", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    /**
     * Увеличиваем каждые 10 вопросов
     */
    currentRound: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    /**
     * Икрементируем после каждого ответа и сбрасываем до 1, когда меняется раунд
     */
    currentQuestion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    /**
     * Содержит массив UUID вопросов из таблицы Questions
     */
    questions: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    /**
     * Меняем в зависимости от того, какое действие было выполнено
     * Баллы за правильный ответ: 100 баллов.
     * Штраф за неверный ответ: -50 баллов.
     * Баллы за мини-игру: 200 баллов.
     * Бонусные баллы при первом входе в игру: 500 баллов.
     */
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 500
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    isAdditionalGamePassed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isGamePassed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

/**
 * Ручка, которая отправляет превью вопросов
 * Ручка, которая отдает текущий вопрос
 * Ручка, которая принимает ответ на вопрос
 * Ручка, которая принимает ответ по Мемори
 * Ручка, которая принимает ответ по Открыткам
 */