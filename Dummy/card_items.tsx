import  test  from '@/Dummy/images/test.avif'

export const card_items =
    [
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
        {
            "id": "4",
            "userId": "user4",
            "title": "Chemistry Fundamentals",
            "description": "Dive into the world of atoms and molecules.",
            "imageUrl": test,
            "price": 250,
            "isPublished": true,
            "categoryId": "category4",
            "createdAt": new Date("2023-01-04T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-04T00:00:00.000Z"),
            "category": {
                "id": "category4",
                "name": "Chemistry"
            },
            "chapters": [
                {
                    "id": "chapter7",
                    "title": "Chapter 1",
                    "description": "This is the first chapter.",
                    "videoUrl": "https://example.com/videos/7",
                    "position": 1,
                    "isPublished": true,
                    "isFree": false,
                    "courseId": "4",
                    "createdAt": new Date("2023-01-04T00:00:00.000Z"),
                    "updatedAt": new Date("2023-01-04T00:00:00.000Z")
                },
                {
                    "id": "chapter8",
                    "title": "Chapter 2",
                    "description": "This is the second chapter.",
                    "videoUrl": "https://example.com/videos/8",
                    "position": 2,
                    "isPublished": true,
                    "isFree": false,
                    "courseId": "4",
                    "createdAt": new Date("2023-01-04T00:00:00.000Z"),
                    "updatedAt": new Date("2023-01-04T00:00:00.000Z")
                }
            ],
            "progress": 80
        },
        {
            "id": "5",
            "userId": "user5",
            "title": "Introduction to Biology",
            "description": "Explore the science of life.",
            "imageUrl": test,
            "price": 300,
            "isPublished": true,
            "categoryId": "category5",
            "createdAt": new Date("2023-01-05T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-05T00:00:00.000Z"),
            "category": {
              "id": "category5",
              "name": "Biology"
            },
            "chapters": [
              {
                "id": "chapter9",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/9",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "5",
                "createdAt": new Date("2023-01-05T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-05T00:00:00.000Z")
              },
              {
                "id": "chapter10",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/10",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "5",
                "createdAt": new Date("2023-01-05T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-05T00:00:00.000Z")
              }
            ],
            "progress": 100
          },
          {
            "id": "6",
            "userId": "user6",
            "title": "Advanced Physics",
            "description": "Explore advanced topics in physics.",
            "imageUrl": test,
            "price": 350,
            "isPublished": true,
            "categoryId": "category6",
            "createdAt": new Date("2023-01-06T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-06T00:00:00.000Z"),
            "category": {
              "id": "category6",
              "name": "Physics"
            },
            "chapters": [
              {
                "id": "chapter11",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/11",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "6",
                "createdAt": new Date("2023-01-06T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-06T00:00:00.000Z")
              },
              {
                "id": "chapter12",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/12",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "6",
                "createdAt": new Date("2023-01-06T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-06T00:00:00.000Z")
              }
            ],
            "progress": 120
          },
          {
            "id": "7",
            "userId": "user7",
            "title": "Chemistry Fundamentals",
            "description": "Dive into the world of atoms and molecules.",
            "imageUrl": test,
            "price": 400,
            "isPublished": true,
            "categoryId": "category7",
            "createdAt": new Date("2023-01-07T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-07T00:00:00.000Z"),
            "category": {
              "id": "category7",
              "name": "Chemistry"
            },
            "chapters": [
              {
                "id": "chapter13",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/13",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "7",
                "createdAt": new Date("2023-01-07T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-07T00:00:00.000Z")
              },
              {
                "id": "chapter14",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/14",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "7",
                "createdAt": new Date("2023-01-07T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-07T00:00:00.000Z")
              }
            ],
            "progress": 140
          },
          {
            "id": "8",
            "userId": "user8",
            "title": "Introduction to Biology",
            "description": "Explore the science of life.",
            "imageUrl": test,
            "price": 450,
            "isPublished": true,
            "categoryId": "category8",
            "createdAt": new Date("2023-01-08T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-08T00:00:00.000Z"),
            "category": {
              "id": "category8",
              "name": "Biology"
            },
            "chapters": [
              {
                "id": "chapter15",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/15",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "8",
                "createdAt": new Date("2023-01-08T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-08T00:00:00.000Z")
              },
              {
                "id": "chapter16",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/16",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "8",
                "createdAt": new Date("2023-01-08T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-08T00:00:00.000Z")
              }
            ],
            "progress": 160
          },
          {
            "id": "9",
            "userId": "user9",
            "title": "Advanced Physics",
            "description": "Explore advanced topics in physics.",
            "imageUrl": test,
            "price": 500,
            "isPublished": true,
            "categoryId": "category9",
            "createdAt": new Date("2023-01-09T00:00:00.000Z"),
            "updatedAt": new Date("2023-01-09T00:00:00.000Z"),
            "category": {
              "id": "category9",
              "name": "Physics"
            },
            "chapters": [
              {
                "id": "chapter17",
                "title": "Chapter 1",
                "description": "This is the first chapter.",
                "videoUrl": "https://example.com/videos/17",
                "position": 1,
                "isPublished": true,
                "isFree": false,
                "courseId": "9",
                "createdAt": new Date("2023-01-09T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-09T00:00:00.000Z")
              },
              {
                "id": "chapter18",
                "title": "Chapter 2",
                "description": "This is the second chapter.",
                "videoUrl": "https://example.com/videos/18",
                "position": 2,
                "isPublished": true,
                "isFree": false,
                "courseId": "9",
                "createdAt": new Date("2023-01-09T00:00:00.000Z"),
                "updatedAt": new Date("2023-01-09T00:00:00.000Z")
              }
            ],
            "progress": 180
          },
    ]
