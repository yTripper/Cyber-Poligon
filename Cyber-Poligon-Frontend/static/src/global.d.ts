declare const bootstrap: any;

// Типы для анимации при скроллинге и загрузки аватара
declare function onScroll(): void;

declare function closeModal(modalId: string): void;

interface FileReaderEventTarget extends EventTarget {
    result: string;
}

interface FileReaderEvent extends ProgressEvent {
    target: FileReaderEventTarget;
}

declare interface AvatarInputElement extends HTMLInputElement {
    files: FileList | null;
}

// Типы для работы с IndexedDB для аутентификации
declare const dbName: string;
declare const dbVersion: number;
declare let db: IDBDatabase;

declare interface User {
    username: string;
    email: string;
    password: string;
}

declare function openIndexedDB(): void;

declare function registerUser(username: string, email: string, password: string, confirmPassword: string): void;

declare function loginUser(email: string, password: string): void;

declare function resetPassword(email: string): void;

// Типы для проверки ответов
declare let correctAnswers: number;
declare let totalQuestions: number;

declare function checkAnswer(button: HTMLButtonElement, isCorrect: boolean, explanation: string): void;

declare function updateResult(): void;
