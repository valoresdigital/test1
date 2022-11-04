const calculateDateOneWeekAgo = () => {
  const weekAgo = new Date();
  return weekAgo.setDate(weekAgo.getDate() - 7);
};

const loadUsers = async (setUsers, setError) => {
  try {
    const response = await fetch("http://localhost:3004/users");
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    } else {
      throw new Error();
    }
  } catch (e) {
    setError("Something went wrong, try again later");
  }
};

export { calculateDateOneWeekAgo, loadUsers };
