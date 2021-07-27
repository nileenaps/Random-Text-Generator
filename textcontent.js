import React from 'react';

const TextContent = ({ textOutput }) => {
    { console.log(textOutput, 'textop') }
    return (
        <article>
            {
                textOutput.map(txtDtl => {
                    const { id, desc } = txtDtl;
                    return (<div key={id}>

                        <p>{desc}</p>
                    </div>
                    )
                })
            }
        </article>
    )
}

export default TextContent;