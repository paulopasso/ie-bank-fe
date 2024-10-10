<template>
    <div class="home">
      <h1 class="title">Welcome to IE Bank</h1>
      <p class="subtitle">Your trusted financial partner for the best student of the world xD</p>
      <a role="button" href="/accounts" class="btn btn-primary mt-3">View Accounts</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  </style>