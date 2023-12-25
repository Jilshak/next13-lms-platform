import test from './images/test.avif'

export const DashboardItems = [
    {
        "id": "1",
        "userId": "user1",
        "title": "Introduction to Programming",
        "description": "This is a course about programming.",
        "imageUrl": test,
        "price": 100,
        "isPublished": true,
        "categoryId": "category1",
        "createdAt": new Date("2023-01-01T00:00:00.000Z"),
        "updatedAt": new Date("2023-01-01T00:00:00.000Z"),
        "category": {
            "id": "category1",
            "name": "Computer Science"
        },
        "chapters": [
            {
                "id": "chapter1",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/1",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "1",
                "createdAt": new Date("2023-01-01T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-01T00:00:00.000Z")
            },
            {
                "id": "chapter2",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/2",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "1",
                "createdAt": new Date("2023-01-01T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-01T00:00:00.000Z")
            }
        ],
        "progress": 20
    },
    {
        "id": "2",
        "userId": "user2",
        "title": "Advanced Mathematics",
        "description": "Explore advanced topics in mathematics.",
        "imageUrl": test,
        "price": 150,
        "isPublished": true,
        "categoryId": "category2",
        "createdAt": new Date("2023-01-02T00:00:00.000Z"),
        "updatedAt": new Date("2023-01-02T00:00:00.000Z"),
        "category": {
            "id": "category2",
            "name": "Mathematics"
        },
        "chapters": [
            {
                "id": "chapter3",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/3",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "2",
                "createdAt": new Date("2023-01-02T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-02T00:00:00.000Z")
            },
            {
                "id": "chapter4",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/4",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "2",
                "createdAt": new Date("2023-01-02T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-02T00:00:00.000Z")
            }
        ],
        "progress": 40
    },
    {
        "id": "3",
        "userId": "user3",
        "title": "Basics of Physics",
        "description": "Understand the fundamental concepts of physics.",
        "imageUrl": test,
        "price": 200,
        "isPublished": true,
        "categoryId": "category3",
        "createdAt": new Date("2023-01-03T00:00:00.000Z"),
        "updatedAt": new Date("2023-01-03T00:00:00.000Z"),
        "category": {
            "id": "category3",
            "name": "Physics"
        },
        "chapters": [
            {
                "id": "chapter5",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/5",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "3",
                "createdAt": new Date("2023-01-03T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-03T00:00:00.000Z")
            },
            {
                "id": "chapter6",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/6",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "3",
                "createdAt": new Date("2023-01-03T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-03T00:00:00.000Z")
            }
        ],
        "progress": 60
    },
]