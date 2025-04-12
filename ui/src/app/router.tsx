import { MultiTab, MultiTabLayout, MultiTabLayoutType } from "universal-ui-react";
import { routes } from "./routes";

export const AppRouter = () => {
    return (<MultiTabLayout type={MultiTabLayoutType.Bar}>
        {
            routes.map(route => (<MultiTab
                path={route.path}
                component={route.component}>
                {route.name}
            </MultiTab>))
        }
    </MultiTabLayout>)
};
