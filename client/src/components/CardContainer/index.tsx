import type { PropsWithChildren } from 'react';
import { Styled } from './CardContainer.styles';

function CardContainer({ children }: PropsWithChildren) {
    return <Styled.Container>{children}</Styled.Container>;
}

export default CardContainer;
