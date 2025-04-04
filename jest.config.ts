/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest", // Использует ts-jest для работы с TypeScript
  testEnvironment: "jsdom", // JSDOM нужен для тестирования React-компонентов
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"], // Дополнительные матчеры для тестирования DOM
  moduleNameMapper: {
    "\\.module\\.scss$": "identity-obj-proxy", // Для работы с CSS-модулями
    "\\.scss$": "identity-obj-proxy", // Если используешь SCSS без модулей
    "^@/(.*)$": "<rootDir>/src/$1", // Поддержка абсолютных импортов
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest", // Компиляция TS и JS файлов
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Поиск тестовых файлов
};
