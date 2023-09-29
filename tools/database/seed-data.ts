export const USERS = [1, 2];

export const USER_DATA = [
  {
    id: USERS[0],
    name: 'John Doe',
    email: 'jsmith@gmailtest2.com'
  },
  {
    id: USERS[1],
    name: 'Jane Smith',
    email: 'jsmith@gmailtest.com'
  }
];

export const POSTS = [11, 22];

export const POST_DATA = [
  {
    id: POSTS[0],
    title: 'First Post',
    content: 'This is the content of the first post.',
    published: true,
    authorId: USERS[0],
    // key: 'first_post'
  },
  {
    id: POSTS[1],
    title: 'Second Post',
    content: 'This is the content of the second post.',
    published: false,
    authorId: USERS[1],
    // key: 'second_post'
  }
];
