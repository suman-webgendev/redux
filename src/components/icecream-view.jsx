import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ordered, restocked } from "@/state/slices/icecreamSlice";
import { useDispatch, useSelector } from "react-redux";

const IcecreamView = () => {
  const dispatch = useDispatch();
  const noOfIceCream = useSelector((state) => state.iceCream.noOfIceCream);
  return (
    <Card className="max-w-md">
      <CardHeader className="text-center text-2xl font-bold">
        Ice-cream card
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <div>
          <h2>No of iceCreams: {noOfIceCream}</h2>
        </div>
        <div className="space-x-6">
          <Button
            className="rounded-full"
            variant="outline"
            onClick={() => dispatch(ordered())}
          >
            Order Icecream
          </Button>
          <Button
            variant="primary"
            className="rounded-full"
            onClick={() => dispatch(restocked(5))}
          >
            Restock IceCreams
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IcecreamView;
