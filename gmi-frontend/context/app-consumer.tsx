import { View } from "../components/Themed";
import { AppContext } from "./app-context";

type Props = {
  children: React.ReactNode;
};

export function AppConsumer({ children }: Props) {
  return (
    <AppContext.Consumer>
      {(App) => (App.loading ? <View>Loading ...</View> : children)}
    </AppContext.Consumer>
  );
}
