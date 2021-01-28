import useGlobalContext from '../../hooks/useGlobalContext';

const Dashboard = () => {
  const { user } = useGlobalContext();

  if (!user) return null;

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h1>{user.displayName}</h1>
    </div>
  );
};

export default Dashboard;
