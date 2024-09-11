import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSelector } from "react-redux";

const UserCard = () => {
  const users = useSelector((state) => state.user.user);
  return (
    <Card className="max-w-md">
      <CardHeader className="text-center text-2xl font-bold">
        User List
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        {users?.map((user) => (
          <div key={user}>{user}</div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UserCard;
