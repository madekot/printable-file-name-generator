/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest", // Использует ts-jest для работы с TypeScript
  testEnvironment: "jsdom", // JSDOM нужен для тестирования React-компонентов
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"], // Дополнительные матчеры для тестирования DOM
  moduleNameMapper: {
    "\\.module\\.scss$": "identity-obj-proxy", // Для работы с CSS-модулями
    "\\.scss$": "identity-obj-proxy", // Если используешь SCSS без модулей
    "^@/(.*)$": "<rootDir>/src/$1", // Поддержка абсолютных импортов
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest", // Компиляция TS и JS файлов
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Поиск тестовых файлов
};
