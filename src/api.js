export const getPosts = async (userId) => {
  const result = await fetch(`http://localhost:5000/post/${userId}`)
  return result.json();
}

export const putPost = async (userId, text) => {
  const result = fetch(
    `http://localhost:5000/post/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify({ message: text }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );
  return result.json();
}

export const getMessages = async (userId) => {
  const result = await fetch(`http://localhost:5000/message/${userId}`)
  return result.json();
}
