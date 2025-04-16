import React from "react"
import Button from "../../actions/Button"
import Tag from "../../text/Tag"
import Message from "../../blocks/Message"

export default {
  title: "Theming/Theming",
  tags: ["!autodocs"],
}

export const ThemedButton = () => (
  <div className="style-root">
    {/* Default components */}
    <div className="component-container">
      <div>
        <Button>Default Button</Button>
      </div>
      <div>
        <Tag variant="primary">Default Tag</Tag>
      </div>
      <div>
        <Message variant="primary">Default Message</Message>
      </div>
    </div>
    {/* Themed components */}
    <div className="component-container themed-root">
      <div>
        <Button>Themed Button</Button>
      </div>
      <div>
        <Tag variant="primary">Themed Tag</Tag>
      </div>
      <div>
        <Message variant="primary">Default Message</Message>
      </div>
    </div>
    <style>
      {`

        .style-root {
            .themed-root {
                /* Global semantic override */
                --seeds-color-primary: var(--seeds-color-green-500);
                --seeds-color-primary-dark: var(--seeds-color-green-700);
                --seeds-color-primary-light: var(--seeds-color-green-300);
                
                /* Global component override */
                .seeds-button {
                    --button-font-family: Georgia;
                    --button-border-radius-md: var(--seeds-rounded-2xl);
                }
            }                     
        }




        
        /* -------------------- */
        /* Styles for docs */

        .style-root {
             .component-container {
                display: flex;
                flex-direction: column;
                width: fit-content;
                margin-block-end: var(--seeds-s12);
                div {
                    margin-block-end: var(--seeds-s6);
                }
            }    
        }

     `}
    </style>
  </div>
)
