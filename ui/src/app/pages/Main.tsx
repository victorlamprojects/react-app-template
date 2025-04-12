import { useEffect } from "react";
import Container from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { init, isLoading } from "../../stores/main/main.store";

export const Main = () => {
    const dispatch = useAppDispatch();
    const isLoaded = useAppSelector(isLoading);
    useEffect(() => {
        dispatch(init());
    }, []);
    return <Container>
        {isLoaded ? "Loading page" : "Loaded page"}
    </Container>
}
