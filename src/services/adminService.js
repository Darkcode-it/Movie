// Mock data for initial development
const mockUsers = [
  { id: 1, username: 'user1', email: 'user1@example.com', status: 'Active', role: 'User' },
  { id: 2, username: 'user2', email: 'user2@example.com', status: 'Inactive', role: 'User' },
  { id: 3, username: 'admin', email: 'admin@example.com', status: 'Active', role: 'Admin' },
];

const mockMovies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8 },
  { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0 },
  { id: 3, title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9 },
];

const mockPosts = [
  { 
    id: 1, 
    title: 'بررسی فیلم Inception', 
    content: 'یک فیلم علمی تخیلی فوق‌العاده...', 
    author: 'admin',
    date: '2024-03-15',
    status: 'Published',
    image: 'https://example.com/inception.jpg'
  },
  { 
    id: 2, 
    title: 'معرفی فیلم The Dark Knight', 
    content: 'یکی از بهترین فیلم‌های بتمن...', 
    author: 'admin',
    date: '2024-03-14',
    status: 'Draft',
    image: 'https://example.com/dark-knight.jpg'
  }
];

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const adminService = {
  // User Management
  async getUsers() {
    await delay(500); // Simulate API call
    return mockUsers;
  },

  async addUser(userData) {
    await delay(500);
    const newUser = {
      id: mockUsers.length + 1,
      ...userData,
      status: 'Active',
      role: 'User'
    };
    mockUsers.push(newUser);
    return newUser;
  },

  async updateUser(id, userData) {
    await delay(500);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      mockUsers[index] = { ...mockUsers[index], ...userData };
      return mockUsers[index];
    }
    throw new Error('User not found');
  },

  async deleteUser(id) {
    await delay(500);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      mockUsers.splice(index, 1);
      return true;
    }
    throw new Error('User not found');
  },

  // Movie Management
  async getMovies() {
    await delay(500);
    return mockMovies;
  },

  async addMovie(movieData) {
    await delay(500);
    const newMovie = {
      id: mockMovies.length + 1,
      ...movieData
    };
    mockMovies.push(newMovie);
    return newMovie;
  },

  async updateMovie(id, movieData) {
    await delay(500);
    const index = mockMovies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      mockMovies[index] = { ...mockMovies[index], ...movieData };
      return mockMovies[index];
    }
    throw new Error('Movie not found');
  },

  async deleteMovie(id) {
    await delay(500);
    const index = mockMovies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      mockMovies.splice(index, 1);
      return true;
    }
    throw new Error('Movie not found');
  },

  // Post Management
  async getPosts() {
    await delay(500);
    return mockPosts;
  },

  async addPost(postData) {
    await delay(500);
    const newPost = {
      id: mockPosts.length + 1,
      ...postData,
      date: new Date().toISOString().split('T')[0],
      author: 'admin'
    };
    mockPosts.push(newPost);
    return newPost;
  },

  async updatePost(id, postData) {
    await delay(500);
    const index = mockPosts.findIndex(post => post.id === id);
    if (index !== -1) {
      mockPosts[index] = { ...mockPosts[index], ...postData };
      return mockPosts[index];
    }
    throw new Error('Post not found');
  },

  async deletePost(id) {
    await delay(500);
    const index = mockPosts.findIndex(post => post.id === id);
    if (index !== -1) {
      mockPosts.splice(index, 1);
      return true;
    }
    throw new Error('Post not found');
  },

  // Dashboard Stats
  async getDashboardStats() {
    await delay(500);
    return {
      totalUsers: mockUsers.length,
      totalMovies: mockMovies.length,
      totalPosts: mockPosts.length,
      activeUsers: mockUsers.filter(user => user.status === 'Active').length,
      averageRating: (mockMovies.reduce((acc, movie) => acc + movie.rating, 0) / mockMovies.length).toFixed(1)
    };
  }
}; 