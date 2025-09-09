# API Houseki no Kuni
![GitHub repo size](https://img.shields.io/github/repo-size/CoringPlay/api-houseki-no-kuni?style=for-the-badge)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/CoringPlay/api-houseki-no-kuni)

# Houseki no Kuni API

Неофициальное REST API для аниме и манги "Houseki no Kuni" (Страна самоцветов). API предоставляет доступ к информации о персонажах, эпизодах и других данных вселенной.

## Функции

- 📊 Данные о персонажах с детальной информацией
- 🖼️ Изображения персонажей из аниме и манги
- 🚀 Быстрые ответы благодаря Vercel
- 🔧 Простая интеграция

## Начало

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/CoringPlay/api-houseki-no-kuni.git
cd houseki-no-kuni-api

# Установите зависимости
npm install

# Запустите локально
npm start
```

### Разместить на Vercel

1. Сделайте форк
2. Подключите его к [Vercel](https://vercel.com)
3. Разверните проект

## Эндпоинты

### Получить всех персонажей

```http
GET /api/characters
```

**Пример ответа:**
```json
[
  {
    "id": "phosphophyllite",
    "name": "Phosphophyllite",
    "ja_name": "フォスフォフィライト",
    "age": "300",
    "hardness": 3.5,
    "family": "The other Gems",
    "current_location": "Moon",
    "first_appearance": "Chapter 1",
    "status": "Active",
    "voice_actors": {
      "japanese": "Tomoyo Kurosawa",
      "english": "Allegra Clark"
    },
    "image": {
      "anime": "https://...",
      "manga": "https://..."
    }
  }
]
```

### Получить персонажа по ID

```http
GET /api/characters/:id
```

**Пример запроса:**
```http
GET /api/characters/phosphophyllite
```

## Примеры

### JavaScript

```javascript
// Получить всех персонажей
fetch('https://api-houseki-no-kuni.vercel.app/api/characters')
  .then(response => response.json())
  .then(data => console.log(data));

// Получить конкретного персонажа
fetch('https://api-houseki-no-kuni.vercel.app/api/characters/phosphophyllite')
  .then(response => response.json())
  .then(data => console.log(data.name));
```

### Python

```python
import requests

# Получить всех персонажей
response = requests.get('https://api-houseki-no-kuni.vercel.app/api/characters')
characters = response.json()
print(characters)

# Получить конкретного персонажа
response = requests.get('https://api-houseki-no-kuni.vercel.app/api/characters/phosphophyllite')
character = response.json()
print(f"Имя: {character['name']}")
```

### cURL

```bash
# Получить всех персонажей
curl https://api-houseki-no-kuni.vercel.app/api/characters

# Получить конкретного персонажа
curl https://api-houseki-no-kuni.vercel.app/api/characters/phosphophyllite
```

## Что используется

- **Node.js** - Среда выполнения
- **Express.js** - Веб-фреймворк
- **Vercel** - Платформа хостинга
- **JSON** - Формат данных

## Спасибо

- [Houseki no Kuni Wiki](https://houseki-no-kuni.fandom.com/) - за данные
- [arufars/api-blue-archive](https://github.com/arufars/api-blue-archive) - за идею проекта