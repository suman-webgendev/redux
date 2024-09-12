import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useFetchUsersQuery } from "@/state/slices/userApiSlice";

const UserCard = () => {
  const { data: users = [], isLoading, isError } = useFetchUsersQuery();

  return (
    <Card className="max-w-md">
      <CardHeader className="text-center text-2xl font-bold">
        User List
      </CardHeader>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong!</div>}
      <CardContent className="flex flex-col items-center justify-center gap-2">
        {!isLoading &&
          users.length > 0 &&
          users.map((user) => <div key={user.id}>{user.name}</div>)}
      </CardContent>
    </Card>
  );
};

export default UserCard;
