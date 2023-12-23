import React, { useState } from 'react';

interface PostFormProps {
  onAddPost: (post: Post) => void;
}

interface Post {
  title: string;
  description: string;
  date: string;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddPost = () => {
    const newPost: Post = {
      title,
      description,
      date,
    };
    onAddPost(newPost);
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <div>
      <h2>Add Post</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default PostForm;
