import styled from '@emotion/styled';

const Card = styled.div`
    height: 315px;
    max-height: 315px;
    border-radius: 15px;
    padding: 24px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    overflow-y: hidden;
`;

const ScrolledContainer = styled.div`
    height: 100%;
    overflow-y: auto;
    scrollbar-width: thin;
`;

const Name = styled.h2`
    display: block;
    font-weight: bold;
    margin-bottom: 24px;
    font-size: 24px;
    color: #262c40;
`;

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;
`;

const Text = styled.p`
    font-size: 14px;
    color: #8189a3;
`;

const IconContainer = styled.div`
    margin-right: 14px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Styled = {
    Card,
    Name,
    Item,
    ScrolledContainer,
    IconContainer,
    Text,
};
