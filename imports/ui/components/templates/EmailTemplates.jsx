import React from 'react';
import { Box, Email, Item, Span, renderEmail } from 'react-html-email';

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim();

const DefaultEmailTemplate = function(props) {
  return (
    <Email title={props.title} headCSS={css}>
      <Box border={0} cellpadding={0} cellspacing={0} width={600}>
        <Item align="center" bgcolor="#f8f8f8">
          <Image alt="header image" src="img/h1.gif" width={300} height={200} />
        </Item>
        <Item>
          <Span>{props.header}</Span>
          <Span>{props.text}</Span>
        </Item>
        <Item>
          <Span>&reg; Kick up Startup 2017</Span>
        </Item>
      </Box>
    </Email>
  );
};

export const GetDefaultEmailTemplate = function(title, header, text){
  return renderEmail(<DefaultEmailTemplate name={title} header={header} text={text} />);
}
