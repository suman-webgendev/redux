import CakeView from "./components/cake-view";
import IceCreamView from "./components/icecream-view";
import UserView from "./components/user-view";

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <IceCreamView />
      <CakeView />
      <UserView />
    </div>
  );
};

export default App;
