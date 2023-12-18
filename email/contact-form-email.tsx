import * as React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type IContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export function ContactFormEmail({ message, senderEmail }: IContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the contact form
                            </Heading>
                            <Hr />
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is : {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
