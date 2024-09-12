import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ordered as cakeOrdered, restocked } from "@/state/slices/cakeSlice";
import { useDispatch, useSelector } from "react-redux";

const CakeView = () => {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector((state) => state.cake.noOfCakes);
  const numberOfIceCreams = useSelector((state) => state.iceCream.noOfIceCream);

  const handleOrderCake = () => {
    if (numberOfCakes > 0) {
      dispatch(cakeOrdered());
      if (numberOfIceCreams > 0) {
        return;
      }
    }
  };

  return (
    <Card className="max-w-md">
      <CardHeader className="text-center text-2xl font-bold">
        Cake card
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <div>
          <h2>No of cakes: {numberOfCakes}</h2>
        </div>
        <div className="space-x-6">
          <Button
            className="rounded-full"
            variant="outline"
            onClick={handleOrderCake}
          >
            Order Cake
          </Button>
          <Button
            variant="primary"
            className="rounded-full"
            onClick={() => dispatch(restocked(5))}
          >
            Restock Cakes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CakeView;
