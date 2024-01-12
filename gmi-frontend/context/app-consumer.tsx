import { View } from "../components/Themed";
import i18n from "../i18n/config";
import { AppContext } from "./app-context";

type Props = {
  children: React.ReactNode;
};

export function AppConsumer({ children }: Props) {
  return (
    <AppContext.Consumer>
      {(App) => (App.loading ? <View>{i18n.t("loading")}</View> : children)}
    </AppContext.Consumer>
  );
}
