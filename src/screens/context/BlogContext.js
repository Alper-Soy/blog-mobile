import React, { createContext, useReducer } from 'react';

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        { title: `Blog Post #${state.length + action.payload}` },
      ];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost', payload: 1 });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
