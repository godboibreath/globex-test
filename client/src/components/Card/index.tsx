import { Styled } from './Card.styles';

interface Props {
    name: string;
    phone: string;
    email: string;
}

function PhoneIcon() {
    return (
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.56H2C1.44775 1.56 1 2.00922 1 2.56V3.06H13V2.56C13 2.26312 12.8701 1.9975 12.6641 1.8139C12.4873 1.65375 12.2549 1.56 12 1.56ZM0 3.06V4.06V19.06V20.06V22.56C0 23.6655 0.895508 24.56 2 24.56H12C12.6602 24.56 13.2456 24.2397 13.6099 23.7475C13.855 23.4155 14 23.0053 14 22.56V20.06V19.06V4.06V3.56V2.56C14 1.45453 13.1045 0.559998 12 0.559998H2C1.5498 0.559998 1.13428 0.708435 0.799805 0.958435C0.313965 1.32172 0 1.90375 0 2.56V3.06ZM1 4.06V19.06H13V4.06H1ZM1 22.56V20.06H13V22.56C13 23.1108 12.5522 23.56 12 23.56H2C1.69092 23.56 1.41455 23.4194 1.23145 23.1967C1.08691 23.0248 1 22.8022 1 22.56ZM8 21.56C8 22.1108 7.55225 22.56 7 22.56C6.44775 22.56 6 22.1108 6 21.56C6 21.0092 6.44775 20.56 7 20.56C7.55225 20.56 8 21.0092 8 21.56Z"
                fill="#432EAB"
            />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 2.56V12.56C23 13.1123 22.5523 13.56 22 13.56L2 13.56C1.44772 13.56 0.999999 13.1123 0.999999 12.56L1 2.56C1 2.45068 1.01754 2.34546 1.04996 2.24699L10.4171 9.91103C11.338 10.6645 12.6624 10.6645 13.5833 9.91103L22.9501 2.24727C22.9825 2.34565 23 2.45078 23 2.56ZM22.1891 1.57785L12.9501 9.13707C12.3975 9.58916 11.6029 9.58916 11.0504 9.13707L1.81123 1.57779C1.87236 1.56611 1.93547 1.56 2 1.56L22 1.56C22.0647 1.56 22.1279 1.56613 22.1891 1.57785ZM22 0.559998C23.1046 0.559998 24 1.45543 24 2.56V12.56C24 13.6646 23.1046 14.56 22 14.56L2 14.56C0.895429 14.56 0 13.6646 0 12.56V2.56C0 1.45543 0.895432 0.559998 2 0.559998H22Z"
                fill="#432EAB"
            />
        </svg>
    );
}

function Card({ name, phone, email }: Props) {
    return (
        <Styled.Card>
            <Styled.ScrolledContainer>
                <Styled.Name>{name}</Styled.Name>
                <Styled.Item>
                    <Styled.IconContainer>
                        <PhoneIcon />
                    </Styled.IconContainer>
                    <Styled.Text>{phone}</Styled.Text>
                </Styled.Item>
                <Styled.Item>
                    <Styled.IconContainer>
                        <MailIcon />
                    </Styled.IconContainer>
                    <Styled.Text>{email}</Styled.Text>
                </Styled.Item>
            </Styled.ScrolledContainer>
        </Styled.Card>
    );
}

export default Card;
