import type { PropsWithChildren } from 'react';
import { Styled } from './Layout.styles';

function Layout({ children }: PropsWithChildren) {
    return (
        <Styled.Page>
            <Styled.Container>{children}</Styled.Container>
        </Styled.Page>
    );
}

export default Layout;
