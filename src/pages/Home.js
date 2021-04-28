import React from 'react'

function Home() {
    return (
        <div className='home'>
            <h3>
            Hi, I'm Maurice (O'Sullivan), an aspiring front-end developer.
            I currently work at Amazon as an Analyst, and I graduated from the University of Michigan in 2019 with a degree in Economics and minor in Computer Science.
            </h3>
            <h3>
                {'\n'}
                Experience/ Languages & Tools I'm interested in: 
                <li>React</li>
                <li>Python</li>
                <li>AWS - S3, DynamoDB and Amplify</li>
                <li>C++ (but very rusty)</li>
            </h3>
        </div>
    )
}

export default Home;
