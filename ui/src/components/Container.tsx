import styled from "styled-components";
import { Block } from "universal-ui-react";

const Container = styled(Block)(({style}) => {
    return {
        ...style,
        width: "100%"
    }
});

export default Container;

