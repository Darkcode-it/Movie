import React, { useState, useEffect } from 'react';
import { FaUsers, FaFilm, FaCog, FaChartBar, FaBars, FaPlus, FaEdit, FaTrash, FaNewspaper } from 'react-icons/fa';
import { adminService } from '../services/adminService';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Data states
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalMovies: 0,
    totalPosts: 0,
    activeUsers: 0,
    averageRating: 0
  });

  // Form states
  const [showUserForm, setShowUserForm] = useState(false);
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingMovie, setEditingMovie] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  // Form data states
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    status: 'Active',
    role: 'User'
  });

  const [movieFormData, setMovieFormData] = useState({
    title: '',
    genre: '',
    year: new Date().getFullYear(),
    rating: 0
  });

  const [postFormData, setPostFormData] = useState({
    title: '',
    content: '',
    status: 'Draft',
    image: ''
  });

  // Load data based on active tab
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        switch (activeTab) {
          case 'dashboard':
            const dashboardStats = await adminService.getDashboardStats();
            setStats(dashboardStats);
            break;
          case 'users':
            const usersData = await adminService.getUsers();
            setUsers(usersData);
            break;
          case 'movies':
            const moviesData = await adminService.getMovies();
            setMovies(moviesData);
            break;
          case 'posts':
            const postsData = await adminService.getPosts();
            setPosts(postsData);
            break;
          default:
            break;
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [activeTab]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  // User management functions
  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = await adminService.addUser(userFormData);
      setUsers([...users, newUser]);
      setShowUserForm(false);
      setUserFormData({ username: '', email: '', status: 'Active', role: 'User' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedUser = await adminService.updateUser(editingUser.id, userFormData);
      setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
      setEditingUser(null);
      setShowUserForm(false);
      setUserFormData({ username: '', email: '', status: 'Active', role: 'User' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true);
      try {
        await adminService.deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Movie management functions
  const handleAddMovie = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newMovie = await adminService.addMovie(movieFormData);
      setMovies([...movies, newMovie]);
      setShowMovieForm(false);
      setMovieFormData({ title: '', genre: '', year: new Date().getFullYear(), rating: 0 });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditMovie = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedMovie = await adminService.updateMovie(editingMovie.id, movieFormData);
      setMovies(movies.map(movie => movie.id === updatedMovie.id ? updatedMovie : movie));
      setEditingMovie(null);
      setShowMovieForm(false);
      setMovieFormData({ title: '', genre: '', year: new Date().getFullYear(), rating: 0 });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMovie = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      setLoading(true);
      try {
        await adminService.deleteMovie(id);
        setMovies(movies.filter(movie => movie.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Post management functions
  const handleAddPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newPost = await adminService.addPost(postFormData);
      setPosts([...posts, newPost]);
      setShowPostForm(false);
      setPostFormData({ title: '', content: '', status: 'Draft', image: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedPost = await adminService.updatePost(editingPost.id, postFormData);
      setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
      setEditingPost(null);
      setShowPostForm(false);
      setPostFormData({ title: '', content: '', status: 'Draft', image: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('آیا از حذف این پست اطمینان دارید؟')) {
      setLoading(true);
      try {
        await adminService.deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading">در حال بارگذاری...</div>;
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>تعداد کل کاربران</h3>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="stat-card">
              <h3>تعداد کل فیلم‌ها</h3>
              <p>{stats.totalMovies}</p>
            </div>
            <div className="stat-card">
              <h3>تعداد کل پست‌ها</h3>
              <p>{stats.totalPosts}</p>
            </div>
            <div className="stat-card">
              <h3>کاربران فعال</h3>
              <p>{stats.activeUsers}</p>
            </div>
            <div className="stat-card">
              <h3>میانگین امتیاز</h3>
              <p>{stats.averageRating}</p>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="users-section">
            <div className="section-header">
              <h2>User Management</h2>
              <button className="btn-add" onClick={() => setShowUserForm(true)}>
                <FaPlus /> Add User
              </button>
            </div>

            {showUserForm && (
              <form className="admin-form" onSubmit={editingUser ? handleEditUser : handleAddUser}>
                <h3>{editingUser ? 'Edit User' : 'Add New User'}</h3>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={userFormData.username}
                    onChange={(e) => setUserFormData({...userFormData, username: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={userFormData.email}
                    onChange={(e) => setUserFormData({...userFormData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={userFormData.status}
                    onChange={(e) => setUserFormData({...userFormData, status: e.target.value})}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={userFormData.role}
                    onChange={(e) => setUserFormData({...userFormData, role: e.target.value})}
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-save">
                    {editingUser ? 'Update User' : 'Add User'}
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setShowUserForm(false);
                      setEditingUser(null);
                      setUserFormData({ username: '', email: '', status: 'Active', role: 'User' });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => {
                          setEditingUser(user);
                          setUserFormData(user);
                          setShowUserForm(true);
                        }}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'movies':
        return (
          <div className="movies-section">
            <div className="section-header">
              <h2>Movie Management</h2>
              <button className="btn-add" onClick={() => setShowMovieForm(true)}>
                <FaPlus /> Add Movie
              </button>
            </div>

            {showMovieForm && (
              <form className="admin-form" onSubmit={editingMovie ? handleEditMovie : handleAddMovie}>
                <h3>{editingMovie ? 'Edit Movie' : 'Add New Movie'}</h3>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={movieFormData.title}
                    onChange={(e) => setMovieFormData({...movieFormData, title: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Genre</label>
                  <input
                    type="text"
                    value={movieFormData.genre}
                    onChange={(e) => setMovieFormData({...movieFormData, genre: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Year</label>
                  <input
                    type="number"
                    value={movieFormData.year}
                    onChange={(e) => setMovieFormData({...movieFormData, year: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={movieFormData.rating}
                    onChange={(e) => setMovieFormData({...movieFormData, rating: parseFloat(e.target.value)})}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-save">
                    {editingMovie ? 'Update Movie' : 'Add Movie'}
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setShowMovieForm(false);
                      setEditingMovie(null);
                      setMovieFormData({ title: '', genre: '', year: new Date().getFullYear(), rating: 0 });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Year</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                    <td>{movie.rating}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => {
                          setEditingMovie(movie);
                          setMovieFormData(movie);
                          setShowMovieForm(true);
                        }}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteMovie(movie.id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'posts':
        return (
          <div className="posts-section">
            <div className="section-header">
              <h2>مدیریت پست‌ها</h2>
              <button className="btn-add" onClick={() => setShowPostForm(true)}>
                <FaPlus /> افزودن پست جدید
              </button>
            </div>

            {showPostForm && (
              <form className="admin-form" onSubmit={editingPost ? handleEditPost : handleAddPost}>
                <h3>{editingPost ? 'ویرایش پست' : 'افزودن پست جدید'}</h3>
                <div className="form-group">
                  <label>عنوان</label>
                  <input
                    type="text"
                    value={postFormData.title}
                    onChange={(e) => setPostFormData({...postFormData, title: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>محتوا</label>
                  <textarea
                    value={postFormData.content}
                    onChange={(e) => setPostFormData({...postFormData, content: e.target.value})}
                    required
                    rows="6"
                  />
                </div>
                <div className="form-group">
                  <label>تصویر</label>
                  <input
                    type="url"
                    value={postFormData.image}
                    onChange={(e) => setPostFormData({...postFormData, image: e.target.value})}
                    placeholder="آدرس تصویر"
                  />
                </div>
                <div className="form-group">
                  <label>وضعیت</label>
                  <select
                    value={postFormData.status}
                    onChange={(e) => setPostFormData({...postFormData, status: e.target.value})}
                  >
                    <option value="Draft">پیش‌نویس</option>
                    <option value="Published">منتشر شده</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-save">
                    {editingPost ? 'بروزرسانی پست' : 'افزودن پست'}
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setShowPostForm(false);
                      setEditingPost(null);
                      setPostFormData({ title: '', content: '', status: 'Draft', image: '' });
                    }}
                  >
                    انصراف
                  </button>
                </div>
              </form>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>شناسه</th>
                  <th>عنوان</th>
                  <th>نویسنده</th>
                  <th>تاریخ</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                    <td>{post.status}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => {
                          setEditingPost(post);
                          setPostFormData(post);
                          setShowPostForm(true);
                        }}
                      >
                        <FaEdit /> ویرایش
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <FaTrash /> حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'settings':
        return (
          <div className="settings-section">
            <h2>Settings</h2>
            <form className="settings-form">
              <div className="form-group">
                <label>Site Title</label>
                <input type="text" defaultValue="Movie App" />
              </div>
              <div className="form-group">
                <label>Admin Email</label>
                <input type="email" defaultValue="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Theme</label>
                <select>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <button type="submit" className="btn-save">Save Changes</button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`admin-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="admin-logo">
          <h2>پنل مدیریت</h2>
        </div>
        <nav className="admin-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabChange('dashboard')}
          >
            <FaChartBar /> داشبورد
          </button>
          <button
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => handleTabChange('users')}
          >
            <FaUsers /> کاربران
          </button>
          <button
            className={`nav-item ${activeTab === 'movies' ? 'active' : ''}`}
            onClick={() => handleTabChange('movies')}
          >
            <FaFilm /> فیلم‌ها
          </button>
          <button
            className={`nav-item ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => handleTabChange('posts')}
          >
            <FaNewspaper /> پست‌ها
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => handleTabChange('settings')}
          >
            <FaCog /> تنظیمات
          </button>
        </nav>
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel; 